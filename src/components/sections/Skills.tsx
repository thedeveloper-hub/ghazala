// src/components/sections/Skills.tsx
'use client'

import { motion } from 'framer-motion'
import SectionWrapper from '@/components/ui/SectionWrapper'
import { fadeUp } from '@/lib/motionVariants'
import { skills } from '@/lib/data'

type Skill = { name: string; icon: string; proficiency: number }

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      className="surface-card p-5 relative overflow-hidden cursor-default"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0, transition: { delay: index * 0.07, duration: 0.5 } }}
      viewport={{ once: true }}
      whileHover={{
        y: -6,
        borderColor: 'var(--accent)',
        boxShadow: '0 14px 40px var(--glow)',
        transition: { duration: 0.25 },
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0"
        style={{ background: 'linear-gradient(135deg, var(--glow), rgba(74,159,212,0.08))' }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      <span className="text-2xl mb-2 block relative">{skill.icon}</span>
      <p className="text-sm font-medium mb-1 relative" style={{ color: 'var(--text)' }}>{skill.name}</p>

      {/* Skill bar */}
      <div className="h-0.5 rounded-full mt-3 overflow-hidden relative" style={{ background: 'var(--border)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent3))' }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: skill.proficiency, transition: { duration: 0.9, delay: index * 0.07 + 0.3, ease: [0.4,0,0.2,1] } }}
          viewport={{ once: true }}
          style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent3))', transformOrigin: 'left' }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const allSkills = [...skills.lab, ...skills.software]

  return (
    <SectionWrapper id="skills">
      <motion.div variants={fadeUp}>
        <div className="section-label">Expertise</div>
        <h2 className="section-title mb-2">Skills & <em>Techniques</em></h2>
        <p className="text-base mb-14 max-w-xl" style={{ color: 'var(--text2)' }}>
          A versatile experimental toolkit spanning wet lab, imaging, and computational analysis.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {allSkills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
