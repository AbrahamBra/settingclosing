'use client'

import { useEffect, useRef, useState, type ElementType } from 'react'
import { prepareWithSegments, walkLineRanges, type PreparedTextWithSegments } from '@chenglou/pretext'

interface BalancedTextProps {
  children: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  className?: string
  [key: string]: unknown
}

/**
 * Wraps text and applies optimal balanced width so lines distribute evenly.
 * Eliminates typographic widows/orphans on headings.
 *
 * SEO-safe: renders the exact same text in the DOM. Only max-width changes.
 * Derives font string from computed styles — no font prop needed.
 */
export function BalancedText({ children, as: Tag = 'h2', className, ...rest }: BalancedTextProps) {
  const ref = useRef<HTMLElement>(null)
  const [maxWidth, setMaxWidth] = useState<number | undefined>(undefined)
  const preparedRef = useRef<PreparedTextWithSegments | null>(null)
  const lastFontRef = useRef<string>('')

  const calculate = () => {
    const el = ref.current
    if (!el || !preparedRef.current) return

    const fullWidth = el.parentElement?.offsetWidth ?? el.offsetWidth
    if (fullWidth <= 0) return

    const prepared = preparedRef.current
    const fullLineCount = walkLineRanges(prepared, fullWidth, () => {})

    // Single line — no balancing needed
    if (fullLineCount <= 1) {
      setMaxWidth(undefined)
      return
    }

    // Binary search: narrowest width that keeps the same line count
    let lo = fullWidth * 0.5
    let hi = fullWidth
    for (let i = 0; i < 16; i++) {
      const mid = (lo + hi) / 2
      if (walkLineRanges(prepared, mid, () => {}) <= fullLineCount) hi = mid
      else lo = mid
    }
    setMaxWidth(Math.ceil(hi) + 1)
  }

  const prepareAndCalculate = () => {
    const el = ref.current
    if (!el) return
    // Derive font string from the rendered element's computed styles
    const computed = window.getComputedStyle(el)
    const font = computed.font || `${computed.fontWeight} ${computed.fontSize} ${computed.fontFamily}`
    if (font === lastFontRef.current && preparedRef.current) {
      calculate()
      return
    }
    lastFontRef.current = font
    preparedRef.current = prepareWithSegments(children, font)
    calculate()
  }

  useEffect(() => {
    document.fonts.ready.then(prepareAndCalculate)

    const onResize = () => prepareAndCalculate()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [children]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Tag
      ref={ref as React.Ref<HTMLHeadingElement>}
      className={className}
      style={maxWidth ? { maxWidth: `${maxWidth}px` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
