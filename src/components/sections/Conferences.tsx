// src/components/sections/Conferences.tsx
'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { fadeUp } from '@/lib/motionVariants'
import { conferences } from '@/lib/data'

export default function Conferences() {
  return (
    <SectionWrapper id="conferences">
      <motion.div variants={fadeUp}>
        <div className="section-label">Dissemination</div>
        <h2 className="section-title mb-2">Conferences & <em>Presentations</em></h2>
        <p className="text-base mb-14 max-w-xl" style={{ color: 'var(--text2)' }}>
          Active participation in the scientific community through conference presentations and posters.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {conferences.map((conf, i) => (
          <motion.div
            key={conf.event}
            className="surface-card p-6 border-l-4 transition-all"
            style={{ borderLeftColor: 'transparent' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }}
            viewport={{ once: true }}
            whileHover={{
              borderLeftColor: 'var(--accent)',
              x: 5,
              boxShadow: '0 8px 30px var(--glow)',
            }}
          >
            <h3 className="font-serif text-lg font-semibold mb-2" style={{ color: 'var(--text)' }}>
              {conf.event}
            </h3>
            <p className="text-xs italic mb-2" style={{ color: 'var(--text3)' }}>{conf.type}</p>
            <p className="text-sm mb-3" style={{ color: 'var(--text2)' }}>{conf.venue}</p>
            <span className="inline-block font-mono text-xs px-3 py-1 rounded-full"
              style={{ background: 'rgba(42,95,143,0.08)', color: 'var(--accent)' }}>
              {conf.year}
            </span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
