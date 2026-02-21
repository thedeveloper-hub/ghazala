// src/components/sections/About.tsx
'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { fadeUp, fadeLeft, fadeRight, staggerContainer, glowPulse } from '@/lib/motionVariants'
import { profile } from '@/lib/data'

export default function About() {
  return (
    <SectionWrapper id="about" alt>
      <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-16 items-start">

        {/* Profile Card */}
        <motion.div
          variants={fadeLeft}
          className="surface-card p-8 lg:sticky lg:top-24"
        >
          {/* Avatar */}
          <motion.div
            className="w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-6 font-serif text-4xl font-light text-white relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent3))' }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="relative z-10">GR</span>
            <div className="absolute inset-0 rounded-full" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.2), transparent)' }} />
          </motion.div>

          <h3 className="font-serif text-2xl font-semibold text-center mb-1" style={{ color: 'var(--text)' }}>Ghazala Rahman</h3>
          <p className="text-xs text-center italic mb-6 font-mono" style={{ color: 'var(--text3)' }}>PhD Scholar · IIT Hyderabad</p>

          {[
            { icon: '✉️', value: 'bo22resch11001@iith.ac.in', href: 'mailto:bo22resch11001@iith.ac.in' },
            { icon: '📱', value: '+91-##########' },
            { icon: '📍', value: 'IIT Hyderabad, Telangana, India' },
            { icon: '🎓', value: '2022–2027 (PhD Expected)' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3 py-2 text-sm border-b"
              style={{ borderColor: 'var(--border)', color: 'var(--text2)' }}
              whileHover={{ x: 3 }}
            >
              <span className="w-7 h-7 rounded-md flex items-center justify-center text-sm flex-shrink-0"
                style={{ background: 'rgba(42,95,143,0.1)' }}>
                {item.icon}
              </span>
              {item.href
                ? <a href={item.href} className="text-xs hover:text-accent-DEFAULT transition-colors" style={{ color: 'inherit', textDecoration: 'none' }}>{item.value}</a>
                : <span className="text-xs">{item.value}</span>
              }
            </motion.div>
          ))}

          <motion.a
            href="https://orcid.org/0009-0007-9137-0777"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 p-2 rounded-lg text-xs font-mono no-underline transition-all"
            style={{
              background: 'rgba(166,206,57,0.15)',
              border: '1px solid rgba(166,206,57,0.3)',
              color: '#5a8a00',
            }}
            whileHover={{ background: 'rgba(166,206,57,0.25)' }}
          >
            <span>🆔</span>
            <span>ORCID: 0009-0007-9137-0777</span>
          </motion.a>
        </motion.div>

        {/* Text Content */}
        <div>
          <motion.div variants={fadeUp}>
            <div className="section-label">About Me</div>
            <motion.h2
              className="section-title mb-4"
              variants={glowPulse}
              animate="animate"
            >
              Decoding <em>Cancer</em><br />at the Cellular Scale
            </motion.h2>
          </motion.div>

          {profile.about.map((para, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              className="text-base leading-[1.8] mb-5"
              style={{ color: 'var(--text2)' }}
            >
              {para}
            </motion.p>
          ))}

          <motion.div variants={fadeUp}>
            <p className="font-mono text-xs tracking-[0.15em] uppercase mb-3" style={{ color: 'var(--text3)' }}>
              Research Focus
            </p>
            <motion.div
              className="flex flex-wrap gap-2"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {profile.researchFocus.map((tag, i) => (
                <motion.span
                  key={tag}
                  className="tag"
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1, transition: { delay: i * 0.06 } }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.06 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
