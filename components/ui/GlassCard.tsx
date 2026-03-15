import { HTMLAttributes } from 'react'

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  accent?: boolean
}

export function GlassCard({ accent = false, className = '', children, ...props }: GlassCardProps) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden ${className}`}
      style={{
        background: 'rgba(255,255,255,0.88)',
        border: accent
          ? '1px solid rgba(59, 130, 246, 0.4)'
          : '1px solid rgba(28, 25, 23, 0.1)',
        boxShadow: accent
          ? '0 2px 20px rgba(59,130,246,0.08), 0 1px 4px rgba(28,25,23,0.06)'
          : '0 2px 16px rgba(28,25,23,0.07), 0 1px 3px rgba(28,25,23,0.05)',
      }}
      {...props}
    >
      {/* Subtle top-left sheen */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: accent
            ? 'linear-gradient(160deg, rgba(59,130,246,0.05) 0%, transparent 45%)'
            : 'linear-gradient(160deg, rgba(255,255,255,0.6) 0%, transparent 45%)',
        }}
      />
      {children}
    </div>
  )
}
