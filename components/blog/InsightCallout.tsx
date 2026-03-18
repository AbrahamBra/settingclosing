import { ReactNode } from 'react'

export function InsightCallout({ title = 'Insight', children }: { title?: string; children: ReactNode }) {
  return (
    <div className="border-l-[3px] border-[#F87171] pl-4 py-3 my-6 bg-[#F87171]/[0.04] rounded-r-lg">
      <p className="text-[#F87171] font-semibold text-sm mb-1">💡 {title}</p>
      <div className="text-text-secondary text-sm">{children}</div>
    </div>
  )
}
