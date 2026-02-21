// src/components/sections/Patent.tsx
'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { fadeUp } from '@/lib/motionVariants'
import { patent } from '@/lib/data'

export default function Patent() {
  return (
    <SectionWrapper id="patent">
      <motion.div variants={fadeUp}>
        <div className="section-label">Intellectual Property</div>
        <h2 className="section-title mb-10">Patent</h2>
      </motion.div>

      <motion.div
        className="rounded-xl p-8 md:p-10 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, var(--surface), rgba(184,134,11,0.03))',
          border: '1px solid rgba(184,134,11,0.2)',
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
        viewport={{ once: true }}
        whileHover={{ boxShadow: '0 16px 60px rgba(184,134,11,0.15)' }}
      >
        {/* Decorative circle */}
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(184,134,11,0.12), transparent)' }} />

        <p className="font-mono text-xs tracking-[0.15em] mb-4" style={{ color: 'var(--gold)' }}>
          Patent No. {patent.number} · India Patent Office · {patent.year}
        </p>
        <h3 className="font-serif text-2xl font-semibold leading-snug mb-4" style={{ color: 'var(--text)' }}>
          {patent.title}
        </h3>
        <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text2)' }}>
          {patent.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {patent.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
