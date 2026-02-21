// src/components/ui/SectionWrapper.tsx
'use client'

import { motion } from 'framer-motion'
import { staggerContainer } from '@/lib/motionVariants'

interface SectionWrapperProps {
  id: string
  children: React.ReactNode
  className?: string
  alt?: boolean
}

export default function SectionWrapper({ id, children, className = '', alt = false }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={`py-24 md:py-32 px-6 md:px-24 relative ${alt ? 'section-alt' : ''} ${className}`}
      style={alt ? { background: 'var(--bg2)' } : {}}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={staggerContainer}
    >
      {children}
    </motion.section>
  )
}
