import { HTMLAttributes } from 'react'

interface DarkCardProps extends HTMLAttributes<HTMLDivElement> {
  accent?: boolean
  hover?: boolean
}

export function DarkCard({ accent = false, hover = false, className = '', children, ...props }: DarkCardProps) {
  return (
    <div
      className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
        hover ? 'hover:border-white/[0.12] hover:-translate-y-0.5' : ''
      } ${className}`}
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: accent
          ? '1px solid rgba(200, 117, 51, 0.4)'
          : '1px solid rgba(255, 255, 255, 0.06)',
      }}
      {...props}
    >
      {children}
    </div>
  )
}
