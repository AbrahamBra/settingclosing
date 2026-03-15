'use client'

export function ButtonGlow({ as: Tag = 'button', className = '', children, ...props }: any) {
  return (
    <Tag
      className={`relative inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-sans font-semibold text-white overflow-hidden transition-all duration-300 ${className}`}
      style={{
        background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
        boxShadow: '0 0 20px rgba(59,130,246,0.4), 0 0 40px rgba(59,130,246,0.2)',
      }}
      onMouseEnter={(e: any) => {
        e.currentTarget.style.transform = 'translateY(-3px)'
        e.currentTarget.style.boxShadow =
          '0 0 30px rgba(59,130,246,0.6), 0 0 60px rgba(59,130,246,0.3), 0 15px 40px -10px rgba(59,130,246,0.5)'
      }}
      onMouseLeave={(e: any) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow =
          '0 0 20px rgba(59,130,246,0.4), 0 0 40px rgba(59,130,246,0.2)'
      }}
      {...props}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, transparent 0%, rgba(255,255,255,0.03) 50%, transparent 100%)',
          animation: 'shine 8s infinite',
          transform: 'rotate(30deg)',
        }}
      />
      <span className="relative z-10">{children}</span>
    </Tag>
  )
}
