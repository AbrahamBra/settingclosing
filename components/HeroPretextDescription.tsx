'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  prepareWithSegments,
  layoutNextLine,
  type PreparedTextWithSegments,
  type LayoutCursor,
} from '@chenglou/pretext'

interface Line {
  text: string
  y: number
  x: number
  width: number
}

const TEXT =
  "On génère tes RDV qualifiés avec l'IA pour que tu te concentres sur ce que tu fais de mieux\u00a0: closer."

/** Copper pipeline signal SVG — decorative obstacle for text flow */
function PipelineSignal() {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      aria-hidden="true"
      className="pointer-events-none select-none"
    >
      {/* Outer ring */}
      <circle cx="36" cy="36" r="34" stroke="#C87533" strokeWidth="1.5" strokeOpacity="0.35" />
      {/* Mid ring */}
      <circle cx="36" cy="36" r="24" stroke="#C87533" strokeWidth="1" strokeOpacity="0.5" />
      {/* Inner ring */}
      <circle cx="36" cy="36" r="14" stroke="#C87533" strokeWidth="1" strokeOpacity="0.7" />
      {/* Center dot */}
      <circle cx="36" cy="36" r="4" fill="#C87533" fillOpacity="0.9" />
      {/* Cross lines */}
      <line x1="36" y1="2" x2="36" y2="70" stroke="#C87533" strokeWidth="0.75" strokeOpacity="0.2" />
      <line x1="2" y1="36" x2="70" y2="36" stroke="#C87533" strokeWidth="0.75" strokeOpacity="0.2" />
      {/* Tick marks */}
      <line x1="36" y1="2" x2="36" y2="8" stroke="#C87533" strokeWidth="1.5" strokeOpacity="0.7" />
      <line x1="36" y1="64" x2="36" y2="70" stroke="#C87533" strokeWidth="1.5" strokeOpacity="0.7" />
      <line x1="2" y1="36" x2="8" y2="36" stroke="#C87533" strokeWidth="1.5" strokeOpacity="0.7" />
      <line x1="64" y1="36" x2="70" y2="36" stroke="#C87533" strokeWidth="1.5" strokeOpacity="0.7" />
    </svg>
  )
}

/**
 * Hero subtitle with Pretext obstacle-aware text flow.
 * Text visually wraps around a decorative SVG placed at top-right.
 *
 * SEO-safe: original <p class="hero-description"> stays in the DOM for
 * AI crawlers (GPTBot, ClaudeBot, etc.) and the speakable cssSelector.
 * The Pretext visual layer is aria-hidden="true".
 */
export function HeroPretextDescription() {
  const containerRef = useRef<HTMLDivElement>(null)
  const preparedRef = useRef<PreparedTextWithSegments | null>(null)
  const [lines, setLines] = useState<Line[]>([])
  const [blockHeight, setBlockHeight] = useState<number>(0)
  const [ready, setReady] = useState(false)

  const LINE_HEIGHT = 28 // px — matches Tailwind text-lg leading-7
  const SVG_SIZE = 72 // matches the PipelineSignal dimensions
  const SVG_GAP = 14 // gap between text and SVG

  const computeLayout = () => {
    const el = containerRef.current
    if (!el || !preparedRef.current) return

    const fullWidth = el.offsetWidth
    if (fullWidth <= 0) return

    const svgBlockWidth = SVG_SIZE + SVG_GAP // how much width the SVG takes
    const svgRows = Math.ceil(SVG_SIZE / LINE_HEIGHT) // lines that overlap the SVG

    const prepared = preparedRef.current
    let cursor: LayoutCursor = { segmentIndex: 0, graphemeIndex: 0 }
    let lineIndex = 0
    const computed: Line[] = []

    while (true) {
      // Lines 0..svgRows-1 run beside the SVG (right side), so they're narrower
      const isBesideSvg = lineIndex < svgRows
      const lineMaxWidth = isBesideSvg
        ? Math.max(fullWidth - svgBlockWidth, 80)
        : fullWidth

      const line = layoutNextLine(prepared, cursor, lineMaxWidth)
      if (!line) break

      computed.push({
        text: line.text,
        y: lineIndex * LINE_HEIGHT,
        x: 0, // always left-aligned
        width: line.width,
      })
      cursor = line.end
      lineIndex++
    }

    setLines(computed)
    setBlockHeight(lineIndex * LINE_HEIGHT)
    setReady(true)
  }

  useEffect(() => {
    document.fonts.ready.then(() => {
      const el = containerRef.current
      if (!el) return
      const computed = window.getComputedStyle(el.querySelector('[data-pretext-measure]') ?? el)
      const font = computed.font || `${computed.fontWeight} ${computed.fontSize} ${computed.fontFamily}`
      preparedRef.current = prepareWithSegments(TEXT, font)
      computeLayout()
    })

    const onResize = () => {
      if (preparedRef.current) computeLayout()
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div ref={containerRef} className="relative max-w-xl mx-auto mb-12" style={{ minHeight: '112px' }}>
      {/* SEO-safe: full text in DOM for crawlers + speakable selector */}
      <p
        className={`font-sans text-lg text-text-secondary hero-description ${ready ? 'sr-only' : ''}`}
        data-speakable="true"
      >
        {TEXT}
      </p>

      {/* Invisible measure element to read computed font styles */}
      <span
        aria-hidden="true"
        data-pretext-measure
        className="font-sans text-lg text-text-secondary absolute opacity-0 pointer-events-none"
      />

      {/* Pretext visual layer — aria-hidden so screen readers use the <p> above */}
      {ready && (
        <div
          aria-hidden="true"
          className="relative"
          style={{ height: `${blockHeight}px` }}
        >
          {/* Pipeline Signal SVG — top-right obstacle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 right-0"
            style={{ width: SVG_SIZE, height: SVG_SIZE }}
          >
            <PipelineSignal />
          </motion.div>

          {/* Text lines — each placed precisely */}
          {lines.map((line, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.25 + i * 0.04, ease: 'easeOut' }}
              className="absolute font-sans text-lg text-text-secondary leading-7 whitespace-pre"
              style={{
                top: line.y,
                left: line.x,
              }}
            >
              {line.text}
            </motion.span>
          ))}
        </div>
      )}
    </div>
  )
}
