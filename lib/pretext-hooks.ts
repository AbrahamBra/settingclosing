'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import {
  prepare,
  layout,
  prepareWithSegments,
  walkLineRanges,
  type PreparedText,
  type PreparedTextWithSegments,
} from '@chenglou/pretext'

/**
 * Prepares text for Pretext layout. Runs once per text/font combo.
 * Must be called client-side only (uses canvas internally).
 */
export function usePreparedText(text: string, font: string): PreparedText | null {
  const [prepared, setPrepared] = useState<PreparedText | null>(null)

  useEffect(() => {
    // Wait for font to be available before measuring
    document.fonts.ready.then(() => {
      setPrepared(prepare(text, font))
    })
  }, [text, font])

  return prepared
}

/**
 * Prepares text with segment data for advanced layout (walkLineRanges, layoutNextLine).
 */
export function usePreparedSegments(text: string, font: string): PreparedTextWithSegments | null {
  const [prepared, setPrepared] = useState<PreparedTextWithSegments | null>(null)

  useEffect(() => {
    document.fonts.ready.then(() => {
      setPrepared(prepareWithSegments(text, font))
    })
  }, [text, font])

  return prepared
}

/**
 * Returns the layout result (height, lineCount) for a prepared text at a given width.
 * Recalculates on resize automatically.
 */
export function useTextLayout(
  prepared: PreparedText | null,
  maxWidth: number,
  lineHeight: number
) {
  const [result, setResult] = useState<{ height: number; lineCount: number } | null>(null)

  useEffect(() => {
    if (!prepared) return
    setResult(layout(prepared, maxWidth, lineHeight))
  }, [prepared, maxWidth, lineHeight])

  return result
}

/**
 * Finds the optimal balanced width for a text block.
 * Uses binary search with walkLineRanges to find the narrowest width
 * that produces the same line count as the full width.
 * Returns the balanced maxWidth in pixels.
 */
export function useBalancedWidth(
  text: string,
  font: string,
  lineHeight: number
): { balancedWidth: number | null; ref: React.RefObject<HTMLElement | null> } {
  const containerRef = useRef<HTMLElement | null>(null)
  const [balancedWidth, setBalancedWidth] = useState<number | null>(null)
  const preparedRef = useRef<PreparedTextWithSegments | null>(null)

  const calculate = useCallback(() => {
    const el = containerRef.current
    if (!el || !preparedRef.current) return

    const fullWidth = el.offsetWidth
    if (fullWidth <= 0) return

    const prepared = preparedRef.current

    // Get line count at full width
    const fullLineCount = walkLineRanges(prepared, fullWidth, () => {})

    // If single line, no balancing needed
    if (fullLineCount <= 1) {
      setBalancedWidth(null)
      return
    }

    // Binary search for the narrowest width that keeps the same line count
    let lo = fullWidth * 0.5 // Start at 50% width
    let hi = fullWidth

    for (let i = 0; i < 16; i++) {
      const mid = (lo + hi) / 2
      const count = walkLineRanges(prepared, mid, () => {})
      if (count <= fullLineCount) {
        hi = mid
      } else {
        lo = mid
      }
    }

    // Round up to prevent edge-case wrapping
    setBalancedWidth(Math.ceil(hi) + 1)
  }, [])

  useEffect(() => {
    document.fonts.ready.then(() => {
      preparedRef.current = prepareWithSegments(text, font)
      calculate()
    })
  }, [text, font, calculate])

  // Recalculate on resize
  useEffect(() => {
    const handleResize = () => {
      if (preparedRef.current) calculate()
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [calculate])

  return { balancedWidth, ref: containerRef }
}
