// src/components/sections/Education.tsx
'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { fadeUp, timelineItem } from '@/lib/motionVariants'
import { education } from '@/lib/data'

export default function Education() {
  return (
    <SectionWrapper id="education">
      <motion.div variants={fadeUp}>
        <div className="section-label">Education</div>
        <h2 className="section-title mb-2">Academic <em>Journey</em></h2>
        <p className="text-base mb-14 max-w-xl" style={{ color: 'var(--text2)' }}>
          A foundation built on rigorous science and consistent excellence across premier institutions.
        </p>
      </motion.div>

      <div className="relative pl-8">
        {/* Vertical line */}
        <div className="absolute left-2 top-0 bottom-0 w-px"
          style={{ background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />

        {education.map((item, i) => (
          <motion.div
            key={i}
            variants={timelineItem}
            className="relative mb-12"
          >
            {/* Dot */}
            <motion.div
              className="absolute -left-8 top-1.5 w-4 h-4 rounded-full border-2 flex items-center justify-center"
              style={{ background: 'var(--bg)', borderColor: 'var(--accent)' }}
              whileHover={{ scale: 1.5, background: 'var(--accent)' }}
            >
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
            </motion.div>

            <p className="font-mono text-xs tracking-[0.1em] mb-2" style={{ color: 'var(--accent)' }}>
              {item.period}
            </p>

            <motion.div
              className="surface-card p-6 md:p-7"
              whileHover={{ x: 5, borderColor: 'var(--accent)', boxShadow: '0 8px 40px var(--glow)' }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-serif text-xl font-semibold mb-1" style={{ color: 'var(--text)' }}>
                {item.degree}
              </h3>
              <p className="text-sm font-medium mb-3" style={{ color: 'var(--accent)' }}>
                {item.field} · {item.institution}
              </p>
              <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text2)' }}>
                {item.description}
              </p>
              {item.cgpa && (
                <span className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-full"
                  style={{ background: 'rgba(184,134,11,0.1)', border: '1px solid rgba(184,134,11,0.2)', color: 'var(--gold)' }}>
                  {'achievement' in item ? `🏅 ${item.achievement}` : `⭐ CGPA: ${item.cgpa}`}
                </span>
              )}
              {item.highlights && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {item.highlights.map((h) => (
                    <span key={h} className="tag">{h}</span>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
