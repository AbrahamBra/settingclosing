'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

interface StoryStep {
  id: string
  counter: string
  color: string
  title: string
  desc: string
  tools: { name: string; color: string }[]
  metric?: { value: string; label: string }
  isOutcome?: boolean
}

const STEPS: StoryStep[] = [
  {
    id: 'j1',
    counter: 'J1',
    color: '#B9A4FB',
    title: 'On cartographie ton march\u00e9',
    desc: 'ICP, signaux d\u2019achat, angles de message. On comprend ton offre, ton client id\u00e9al, et ce qui le fait r\u00e9agir.',
    tools: [
      { name: 'Sales Navigator', color: '#B9A4FB' },
      { name: 'Claude Cowork', color: '#C87533' },
      { name: 'Google Sheets', color: '#918B85' },
    ],
  },
  {
    id: 's1',
    counter: 'S1',
    color: '#FBBF24',
    title: 'Premiers messages envoy\u00e9s',
    desc: 'Ton setter a analys\u00e9 200+ profils. L\u2019IA a r\u00e9dig\u00e9 les messages. Il a valid\u00e9, ajust\u00e9 les angles, et lanc\u00e9 la s\u00e9quence.',
    tools: [
      { name: 'Reactin', color: '#B9A4FB' },
      { name: 'Claude Code', color: '#C87533' },
      { name: 'Make', color: '#34D399' },
    ],
    metric: { value: '200+', label: 'profils analys\u00e9s' },
  },
  {
    id: 's2',
    counter: 'S2',
    color: '#34D399',
    title: 'Premier RDV dans ton agenda',
    desc: 'Les prospects int\u00e9ress\u00e9s sont qualifi\u00e9s et book\u00e9s directement dans ton calendrier. Toi, tu closes.',
    tools: [
      { name: 'Breakcold', color: '#34D399' },
      { name: 'Calendly', color: '#C87533' },
    ],
    metric: { value: '8%', label: 'taux de r\u00e9ponse' },
  },
  {
    id: 'm2',
    counter: 'M2+',
    color: '#C87533',
    title: 'Le syst\u00e8me s\u2019affine tout seul',
    desc: 'Chaque semaine, le feedback enrichit ta base de connaissance. Mois 3 n\u2019a rien \u00e0 voir avec mois 1.',
    tools: [],
    metric: { value: '1\u20134', label: 'RDV / semaine en croisi\u00e8re' },
    isOutcome: true,
  },
]

function Panel({ step }: { step: StoryStep }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`rounded-2xl p-6 md:p-8 ${
        step.isOutcome
          ? 'bg-accent/5 border-2 border-accent/20'
          : 'bg-bg-secondary border border-white/[0.06]'
      }`}
    >
      {/* Mobile counter */}
      <div className="md:hidden mb-4">
        <span className="text-4xl font-extrabold" style={{ color: step.color }}>
          {step.counter}
        </span>
        <div className="w-10 h-[3px] mt-2 rounded-full" style={{ backgroundColor: step.color }} />
      </div>

      <h3 className="font-sans font-bold text-text-primary text-lg mb-2">{step.title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-4">{step.desc}</p>

      {/* Tool badges */}
      {step.tools.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {step.tools.map((tool) => (
            <span
              key={tool.name}
              className="px-2.5 py-0.5 rounded-md text-[11px] font-medium"
              style={{
                backgroundColor: `${tool.color}12`,
                border: `1px solid ${tool.color}25`,
                color: tool.color,
              }}
            >
              {tool.name}
            </span>
          ))}
        </div>
      )}

      {/* Metric */}
      {step.metric && (
        <div
          className="inline-flex items-baseline gap-2 px-3 py-1.5 rounded-lg"
          style={{ backgroundColor: `${step.color}10` }}
        >
          <span className="text-xl font-extrabold tabular-nums" style={{ color: step.color }}>
            {step.metric.value}
          </span>
          <span className="text-xs text-text-muted">{step.metric.label}</span>
        </div>
      )}
    </motion.div>
  )
}

export function StoryScroll() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(Math.floor(v * STEPS.length), STEPS.length - 1)
    setActiveIndex(idx)
  })

  const activeStep = STEPS[activeIndex]

  return (
    <section ref={containerRef} className="section-padding bg-bg-primary">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
            Ton parcours
          </p>
          <h2 className="font-sans text-h2 font-extrabold text-text-primary">
            Ce qui se passe apr&egrave;s ton inscription
          </h2>
        </div>

        {/* Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8">
          {/* Sticky counter (desktop) */}
          <div className="hidden md:block">
            <div className="sticky top-[40vh]">
              <motion.span
                key={activeStep.counter}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="block text-7xl font-extrabold"
                style={{ color: activeStep.color }}
              >
                {activeStep.counter}
              </motion.span>
              <div
                className="w-[60px] h-[3px] mt-3 rounded-full transition-colors duration-500"
                style={{ backgroundColor: activeStep.color }}
              />
            </div>
          </div>

          {/* Panels */}
          <div className="space-y-32 md:space-y-[40vh] pb-16">
            {STEPS.map((step) => (
              <Panel key={step.id} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
