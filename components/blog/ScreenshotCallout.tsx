import { ReactNode } from 'react'

const variantColors = {
  ia: { border: 'border-[#B9A4FB]/[0.2]', bg: 'bg-[#B9A4FB]/[0.04]', text: 'text-[#B9A4FB]' },
  methode: { border: 'border-[#FBBF24]/[0.2]', bg: 'bg-[#FBBF24]/[0.04]', text: 'text-[#FBBF24]' },
  humain: { border: 'border-[#34D399]/[0.2]', bg: 'bg-[#34D399]/[0.04]', text: 'text-[#34D399]' },
  hybrid: { border: 'border-[#D0A0FD]/[0.2]', bg: 'bg-[#D0A0FD]/[0.04]', text: 'text-[#D0A0FD]' },
}

export function ScreenshotCallout({
  variant = 'ia',
  caption,
  children
}: {
  variant?: keyof typeof variantColors
  caption: string
  children?: ReactNode
}) {
  const colors = variantColors[variant]
  return (
    <div className={`my-6 p-4 ${colors.bg} border ${colors.border} rounded-xl`}>
      <div className="bg-white/[0.04] border border-dashed border-white/[0.08] rounded-lg min-h-[140px] flex items-center justify-center text-text-muted text-sm mb-3">
        {children || '📸 Screenshot'}
      </div>
      <p className={`text-sm ${colors.text}`}>{caption}</p>
    </div>
  )
}
