// src/components/sections/Research.tsx
'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { fadeUp, timelineItem } from '@/lib/motionVariants'
import { research } from '@/lib/data'

export default function Research() {
  return (
    <SectionWrapper id="research" alt>
      <motion.div variants={fadeUp}>
        <div className="section-label">Experience</div>
        <h2 className="section-title mb-2">Research <em>Timeline</em></h2>
        <p className="text-base mb-14 max-w-xl" style={{ color: 'var(--text2)' }}>
          Progressive contributions to cancer biology and mechanobiology research.
        </p>
      </motion.div>

      <div className="relative pl-8">
        <div className="absolute left-2 top-0 bottom-0 w-px"
          style={{ background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />

        {research.map((item, i) => (
          <motion.div key={i} variants={timelineItem} className="relative mb-12">
            <motion.div
              className="absolute -left-8 top-1.5 w-4 h-4 rounded-full border-2 flex items-center justify-center"
              style={{ background: 'var(--bg2)', borderColor: 'var(--accent)' }}
              whileHover={{ scale: 1.5, background: 'var(--accent)' }}
            >
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
            </motion.div>

            <p className="font-mono text-xs tracking-[0.1em] mb-2" style={{ color: 'var(--accent)' }}>
              {item.period} · {item.institution}
            </p>

            <motion.div
              className="surface-card p-6 md:p-7"
              whileHover={{ x: 5, borderColor: 'var(--accent)', boxShadow: '0 8px 40px var(--glow)' }}
            >
              <h3 className="font-serif text-xl font-semibold mb-1" style={{ color: 'var(--text)' }}>{item.title}</h3>
              <p className="text-sm font-medium mb-3" style={{ color: 'var(--accent)' }}>{item.lab}</p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text2)' }}>{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
