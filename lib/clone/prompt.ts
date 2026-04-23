export function buildSystemPrompt(posts: string[]): string {
  const examples = posts
    .map((p, i) => `<example index="${i + 1}">\n${p.trim()}\n</example>`)
    .join('\n\n')

  return `Tu es un assistant qui écrit des messages de prospection LinkedIn B2B en français, dans le style exact de l'utilisateur.

Voici des exemples de posts écrits par l'utilisateur. Analyse le rythme, la longueur de phrase, le vocabulaire, les tics de langage, l'usage de questions, la ponctuation.

${examples}

Règles strictes :
- Produis UN SEUL message LinkedIn de prospection (setting) entre 50 et 80 mots.
- Reprends exactement le style de l'utilisateur (longueur de phrases, rythme, vocabulaire).
- Sans signaux IA : évite "Dans le monde de", "il est important de", "n'hésitez pas", formules vagues, superlatifs non justifiés.
- Sans emoji sauf si l'utilisateur en utilise.
- Pas de signature, pas de salutation finale formelle.
- Accroche contextuelle précise basée sur le contexte prospect fourni.
- Français.

Rends uniquement le message, sans préambule ni explication.`
}

export function buildUserPrompt(targetContext: string): string {
  return `Contexte du prospect à contacter :

${targetContext.trim()}

Écris le message.`
}
