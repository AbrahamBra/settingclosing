'use client'

export function ButtonGlow({ as: Tag = 'button', className = '', children, ...props }: any) {
  return (
    <Tag
      className={`relative inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-sans font-semibold text-white overflow-hidden transition-all duration-300 ${className}`}
      style={{
        background: 'linear-gradient(135deg, #F87171 0%, #EF4444 100%)',
        boxShadow: '0 2px 16px rgba(248,113,113,0.32), 0 1px 4px rgba(248,113,113,0.18)',
      }}
      onMouseEnter={(e: any) => {
        e.currentTarget.style.transform = 'translateY(-3px)'
        e.currentTarget.style.boxShadow =
          '0 6px 24px rgba(248,113,113,0.45), 0 2px 8px rgba(248,113,113,0.25), 0 12px 32px -8px rgba(248,113,113,0.30)'
      }}
      onMouseLeave={(e: any) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow =
          '0 2px 16px rgba(248,113,113,0.32), 0 1px 4px rgba(248,113,113,0.18)'
      }}
      {...props}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)',
          animation: 'shine 8s infinite',
          transform: 'rotate(30deg)',
        }}
      />
      <span className="relative z-10">{children}</span>
    </Tag>
  )
}
