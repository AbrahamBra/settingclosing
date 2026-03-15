import { HTMLAttributes } from 'react'

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  accent?: boolean
}

export function GlassCard({ accent = false, className = '', children, ...props }: GlassCardProps) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        border: accent
          ? '1px solid rgba(59, 130, 246, 0.45)'
          : '1px solid rgba(255, 255, 255, 0.09)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
      {...props}
    >
      {/* Gradient border highlight */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          padding: '1px',
          background: accent
            ? 'linear-gradient(135deg, rgba(59,130,246,0.3) 0%, transparent 55%)'
            : 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 55%)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />
      {children}
    </div>
  )
}
