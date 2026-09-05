#!/usr/bin/env node
// Tire les données Search Console via un compte de service.
// Zéro dépendance : le JWT est signé avec le module crypto natif.
//
//   node scripts/gsc-pull.mjs --key ~/.secrets/gsc-key.json --site sc-domain:setting.live
//
// Options : --days 90   fenêtre analysée (défaut 90)
//           --out .gsc  dossier de sortie (défaut .gsc)

import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'
import os from 'node:os'

const SCOPE = 'https://www.googleapis.com/auth/webmasters.readonly'
const TOKEN_URL = 'https://oauth2.googleapis.com/token'
const API = 'https://searchconsole.googleapis.com/webmasters/v3/sites'

function args() {
  const a = process.argv.slice(2)
  const get = (n, d) => {
    const i = a.indexOf(`--${n}`)
    return i === -1 ? d : a[i + 1]
  }
  const key = get('key')
  const site = get('site')
  if (!key || !site) {
    console.error('usage: node scripts/gsc-pull.mjs --key <service-account.json> --site <sc-domain:exemple.fr | https://exemple.fr/>')
    process.exit(2)
  }
  return {
    key: key.replace(/^~/, os.homedir()),
    site,
    days: Number(get('days', '90')),
    out: get('out', '.gsc'),
  }
}

const b64url = (b) => Buffer.from(b).toString('base64url')

async function accessToken(sa) {
  const now = Math.floor(Date.now() / 1000)
  const head = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
  const claims = b64url(JSON.stringify({
    iss: sa.client_email, scope: SCOPE, aud: TOKEN_URL, exp: now + 3600, iat: now,
  }))
  const input = `${head}.${claims}`
  const sig = b64url(crypto.createSign('RSA-SHA256').update(input).sign(sa.private_key))
  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: `${input}.${sig}`,
    }),
  })
  const j = await res.json()
  if (!res.ok) throw new Error(`auth ${res.status} : ${JSON.stringify(j)}`)
  return j.access_token
}

// Pagine jusqu'à épuisement : l'API plafonne à 25 000 lignes par appel.
async function query(token, site, body) {
  const url = `${API}/${encodeURIComponent(site)}/searchAnalytics/query`
  const rows = []
  for (let startRow = 0; ; startRow += 25000) {
    const res = await fetch(url, {
      method: 'POST',
      headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json' },
      body: JSON.stringify({ rowLimit: 25000, startRow, ...body }),
    })
    const j = await res.json()
    if (!res.ok) throw new Error(`api ${res.status} : ${JSON.stringify(j)}`)
    const batch = j.rows || []
    rows.push(...batch)
    if (batch.length < 25000) return rows
  }
}

const iso = (d) => d.toISOString().slice(0, 10)

function csv(rows, dims) {
  const esc = (v) => {
    const s = String(v ?? '')
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
  }
  const head = [...dims, 'clicks', 'impressions', 'ctr', 'position']
  const lines = [head.join(',')]
  for (const r of rows) {
    lines.push([
      ...(r.keys || []).map(esc),
      r.clicks, r.impressions, (r.ctr * 100).toFixed(2), r.position.toFixed(1),
    ].join(','))
  }
  return lines.join('\n') + '\n'
}

const sum = (rows, f) => rows.reduce((a, r) => a + r[f], 0)

async function main() {
  const { key, site, days, out } = args()
  const sa = JSON.parse(fs.readFileSync(key, 'utf8'))
  const token = await accessToken(sa)

  // GSC accuse 2 à 3 jours de retard : on s'arrête à J-3.
  const end = new Date(Date.now() - 3 * 864e5)
  const start = new Date(end - (days - 1) * 864e5)
  const prevEnd = new Date(start - 864e5)
  const prevStart = new Date(prevEnd - (days - 1) * 864e5)

  fs.mkdirSync(out, { recursive: true })
  const range = { startDate: iso(start), endDate: iso(end) }
  console.log(`site   ${site}`)
  console.log(`peri.  ${range.startDate} -> ${range.endDate}  (${days} j)`)
  console.log(`compar ${iso(prevStart)} -> ${iso(prevEnd)}\n`)

  const pulls = {
    queries: ['query'],
    pages: ['page'],
    'queries-x-pages': ['query', 'page'],
    daily: ['date'],
    devices: ['device'],
    countries: ['country'],
  }

  for (const [name, dims] of Object.entries(pulls)) {
    const rows = await query(token, site, { ...range, dimensions: dims })
    fs.writeFileSync(path.join(out, `${name}.csv`), csv(rows, dims))
    console.log(`${String(rows.length).padStart(6)} lignes  ${name}.csv`)
  }

  // Totaux des deux périodes, pour situer l'évolution d'un coup d'œil.
  const [cur, prev] = await Promise.all([
    query(token, site, { ...range, dimensions: ['date'] }),
    query(token, site, { startDate: iso(prevStart), endDate: iso(prevEnd), dimensions: ['date'] }),
  ])
  const tot = (rows) => ({
    clics: sum(rows, 'clicks'),
    impressions: sum(rows, 'impressions'),
  })
  const a = tot(cur), b = tot(prev)
  const delta = (x, y) => (y === 0 ? 'n/a' : `${x >= y ? '+' : ''}${(((x - y) / y) * 100).toFixed(0)} %`)
  console.log(`\nclics        ${a.clics}  (période précédente ${b.clics}, ${delta(a.clics, b.clics)})`)
  console.log(`impressions  ${a.impressions}  (période précédente ${b.impressions}, ${delta(a.impressions, b.impressions)})`)
  console.log(`\nfichiers dans ${path.resolve(out)}/`)
}

main().catch((e) => {
  console.error(`\néchec : ${e.message}`)
  if (String(e.message).includes('403')) {
    console.error("→ le compte de service n'a probablement pas encore été ajouté dans Search Console,")
    console.error('  ou la propriété visée par --site ne correspond pas à celle où il a été ajouté.')
  }
  process.exit(1)
})
