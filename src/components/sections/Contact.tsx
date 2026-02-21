// src/components/sections/Contact.tsx
'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { fadeUp, fadeRight } from '@/lib/motionVariants'

const CONTACT_ITEMS = [
  { icon: '✉️', label: 'Email', value: 'bo22resch11001@iith.ac.in', href: 'mailto:bo22resch11001@iith.ac.in' },
  { icon: '📱', label: 'Phone', value: '+91-##########', href: 'tel:+91##########' },
  { icon: '📍', label: 'Location', value: 'IIT Hyderabad, Kandi, Telangana 502285, India' },
  { icon: '🆔', label: 'ORCID', value: '0009-0007-9137-0777', href: 'https://orcid.org/0009-0007-9137-0777' },
]

export default function Contact() {
  return (
    <SectionWrapper id="contact" alt>
      <motion.div variants={fadeUp}>
        <div className="section-label">Connect</div>
        <h2 className="section-title mb-2">Get in <em>Touch</em></h2>
        <p className="text-base mb-14 max-w-xl" style={{ color: 'var(--text2)' }}>
          Open to collaborations, discussions, and opportunities in cancer biology and mechanobiology research.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact items */}
        <div className="space-y-4">
          {CONTACT_ITEMS.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href || '#'}
              target={item.href?.startsWith('http') ? '_blank' : undefined}
              rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 p-4 surface-card no-underline transition-all"
              style={{ color: 'var(--text)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: i * 0.09 } }}
              viewport={{ once: true }}
              whileHover={{ x: 6, borderColor: 'var(--accent)', boxShadow: '0 4px 20px var(--glow)', color: 'var(--accent)' }}
            >
              <span className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: 'rgba(42,95,143,0.1)' }}>
                {item.icon}
              </span>
              <div>
                <p className="font-mono text-[0.65rem] tracking-[0.1em] uppercase mb-0.5" style={{ color: 'var(--text3)' }}>
                  {item.label}
                </p>
                <p className="text-sm font-medium">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="surface-card p-8 md:p-10"
          variants={fadeRight}
        >
          <h3 className="font-serif text-2xl font-light mb-4" style={{ color: 'var(--text)' }}>
            Interested in Collaboration?
          </h3>
          <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--text2)' }}>
            My research sits at the intersection of mechanobiology, cancer cell biology, and translational therapeutics. I am always open to collaborative projects, research discussions, and opportunities — particularly in cancer biology, zebrafish models, and lipid-based drug delivery systems.
          </p>
          <motion.a
            href="mailto:bo22resch11001@iith.ac.in"
            className="btn-primary"
            whileHover={{ y: -2, boxShadow: '0 8px 25px rgba(42,95,143,0.4)' }}
            whileTap={{ scale: 0.97 }}
          >
            Send a Message
          </motion.a>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
