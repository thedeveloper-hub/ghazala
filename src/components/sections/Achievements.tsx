// src/components/sections/Achievements.tsx
'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { fadeUp, slideInBar } from '@/lib/motionVariants'
import { achievements } from '@/lib/data'

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" alt>
      <motion.div variants={fadeUp}>
        <div className="section-label">Honors</div>
        <h2 className="section-title mb-2">Awards & <em>Achievements</em></h2>
        <p className="text-base mb-14 max-w-xl" style={{ color: 'var(--text2)' }}>
          Recognition of academic excellence and research contributions at national and international levels.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {achievements.map((item, i) => (
          <motion.div
            key={item.title}
            className="surface-card p-7 relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }}
            viewport={{ once: true }}
            whileHover={{ y: -6, boxShadow: '0 14px 50px var(--glow)' }}
          >
            {/* Top bar animation */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-0.5 origin-left"
              style={{ background: 'linear-gradient(90deg, var(--accent), var(--gold))' }}
              variants={slideInBar}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />

            <motion.span
              className="text-3xl mb-4 block"
              animate={{ y: [0, -5, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 3, delay: i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              {item.icon}
            </motion.span>

            <h3 className="font-serif text-lg font-semibold mb-2" style={{ color: 'var(--text)' }}>
              {item.title}
            </h3>
            <p className="text-xs leading-relaxed mb-3" style={{ color: 'var(--text2)' }}>
              {item.description}
            </p>
            <span className="font-mono text-xs" style={{ color: 'var(--accent)' }}>{item.year}</span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
