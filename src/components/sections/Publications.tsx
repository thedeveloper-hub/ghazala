// src/components/sections/Publications.tsx
'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { fadeUp } from '@/lib/motionVariants'
import { publications } from '@/lib/data'

export default function Publications() {
  return (
    <SectionWrapper id="publications" alt>
      <motion.div variants={fadeUp}>
        <div className="section-label">Research Output</div>
        <h2 className="section-title mb-2">Publications & <em>Findings</em></h2>
        <p className="text-base mb-14 max-w-xl" style={{ color: 'var(--text2)' }}>
          Peer-reviewed contributions advancing our understanding of cancer biology and pharmaceutical sciences.
        </p>
      </motion.div>

      <div className="space-y-4">
        {publications.map((pub, i) => (
          <motion.div
            key={pub.number}
            className="surface-card p-6 md:p-8 grid grid-cols-[auto_1fr] gap-6 items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6 } }}
            viewport={{ once: true }}
            whileHover={{ borderColor: 'var(--accent)', boxShadow: '0 8px 40px var(--glow)' }}
          >
            <motion.span
              className="font-serif text-4xl font-light leading-none select-none"
              style={{ color: 'var(--border)' }}
              whileHover={{ color: 'var(--accent)' }}
            >
              {pub.number}
            </motion.span>
            <div>
              <h3 className="font-serif text-lg font-semibold leading-snug mb-2" style={{ color: 'var(--text)' }}>
                {pub.title}
              </h3>
              <p className="text-sm italic mb-1" style={{ color: 'var(--accent)' }}>{pub.journal}</p>
              <p className="font-mono text-xs mb-3" style={{ color: 'var(--text3)' }}>{pub.year}</p>
              <div className="flex flex-wrap gap-2">
                {pub.tags.map((tag) => (
                  <motion.span key={tag} className="tag" whileHover={{ scale: 1.06 }}>{tag}</motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
