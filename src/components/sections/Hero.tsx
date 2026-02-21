// src/components/sections/Hero.tsx
'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { heroContainer, heroItem, blobAnimation } from '@/lib/motionVariants'
import { floatingKeywords } from '@/lib/data'

const STATS = [
  { num: '3', label: 'Publications' },
  { num: '1', label: 'Patent' },
  { num: 'AIR 385', label: 'GATE 2022' },
]

type FloatingWord = { id: number; text: string; x: number; y: number; rotation: number; duration: number; delay: number }

export default function Hero() {
  const { scrollY } = useScroll()
  const contentY = useTransform(scrollY, [0, 600], [0, 80])
  const blob1Y = useTransform(scrollY, [0, 600], [0, 60])
  const blob2Y = useTransform(scrollY, [0, 600], [0, 90])

  const [words, setWords] = useState<FloatingWord[]>([])

  useEffect(() => {
    const initial: FloatingWord[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      text: floatingKeywords[i % floatingKeywords.length],
      x: Math.random() * 90,
      y: 50 + Math.random() * 40,
      rotation: (Math.random() - 0.5) * 20,
      duration: 10 + Math.random() * 8,
      delay: -(Math.random() * 10),
    }))
    setWords(initial)
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-[100px] pb-16 px-6 md:px-24"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(42,95,143,0.08) 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 20% 70%, rgba(184,134,11,0.06) 0%, transparent 60%)'
        }} />
      </div>

      {/* Animated Blobs */}
      <motion.div
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-40 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(42,95,143,0.25), transparent)', y: blob1Y }}
        animate={blobAnimation(0).animate}
        style={{ filter: 'blur(80px)', y: blob1Y }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[-5%] w-[350px] h-[350px] rounded-full opacity-40 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(184,134,11,0.2), transparent)', filter: 'blur(80px)', y: blob2Y }}
        animate={blobAnimation(3).animate}
      />
      <motion.div
        className="absolute top-[40%] left-[30%] w-[250px] h-[250px] rounded-full opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(74,159,212,0.2), transparent)', filter: 'blur(80px)' }}
        animate={blobAnimation(5).animate}
      />

      {/* Floating Keywords */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {words.map((word) => (
          <motion.span
            key={word.id}
            className="absolute font-mono text-[0.65rem] tracking-[0.15em] uppercase"
            style={{
              left: `${word.x}%`,
              top: `${word.y}%`,
              rotate: word.rotation,
              color: 'var(--accent)',
            }}
            animate={{
              y: [-10, -140],
              opacity: [0, 0.12, 0.12, 0],
            }}
            transition={{
              duration: word.duration,
              delay: word.delay,
              repeat: Infinity,
              ease: 'linear',
              times: [0, 0.08, 0.92, 1],
            }}
          >
            {word.text}
          </motion.span>
        ))}
      </div>

      {/* DNA SVG decoration */}
      <motion.svg
        className="absolute right-[5%] top-[15%] opacity-[0.05] pointer-events-none z-[1]"
        width="200" height="400" viewBox="0 0 200 400"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <path d="M100 0 Q150 50 100 100 Q50 150 100 200 Q150 250 100 300 Q50 350 100 400" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path d="M100 0 Q50 50 100 100 Q150 150 100 200 Q50 250 100 300 Q150 350 100 400" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8,4"/>
        <circle cx="100" cy="100" r="6" fill="currentColor"/>
        <circle cx="100" cy="200" r="6" fill="currentColor"/>
        <circle cx="100" cy="300" r="6" fill="currentColor"/>
      </motion.svg>

      {/* Main Content */}
      <motion.div
        className="relative z-[2] max-w-2xl"
        style={{ y: contentY }}
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Tag */}
        <motion.div
          variants={heroItem}
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full font-mono text-xs tracking-[0.1em]"
          style={{
            background: 'linear-gradient(135deg, rgba(42,95,143,0.1), rgba(74,159,212,0.1))',
            border: '1px solid rgba(42,95,143,0.2)',
            color: 'var(--accent)',
          }}
        >
          <motion.span
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[0.5rem]"
            style={{ color: 'var(--gold)' }}
          >●</motion.span>
          PhD Research Scholar · Biotechnology
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={heroItem}
          className="font-serif font-light leading-[1.05] tracking-tight mb-2"
          style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)', color: 'var(--text)' }}
        >
          Ghazala<br />
          <em style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 300 }}>Rahman</em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={heroItem}
          className="font-serif font-normal italic mb-6"
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', color: 'var(--text2)' }}
        >
          IIT Hyderabad · Cancer Biology & Mechanobiology
        </motion.p>

        {/* Research description */}
        <motion.p
          variants={heroItem}
          className="text-base leading-[1.75] mb-10 pl-5 max-w-xl"
          style={{ color: 'var(--text2)', borderLeft: '2px solid var(--accent)' }}
        >
          Investigating the mechanobiological role of{' '}
          <strong style={{ color: 'var(--text)' }}>Caveolin-1</strong> in breast tumor progression
          using the zebrafish xenograft model — bridging cell mechanics with cancer therapeutics.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={heroItem} className="flex gap-4 flex-wrap">
          <motion.a
            href="#publications"
            className="btn-primary"
            onClick={(e) => { e.preventDefault(); document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' }) }}
            whileHover={{ y: -2, boxShadow: '0 8px 25px rgba(42,95,143,0.4)' }}
            whileTap={{ scale: 0.97 }}
          >
            View Publications
          </motion.a>
          <motion.a
            href="#contact"
            className="btn-outline"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Stats */}
      <motion.div
        className="absolute right-6 md:right-24 bottom-16 z-[2] hidden md:flex gap-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 1.4, duration: 0.7 } }}
      >
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <span
              className="block font-serif font-semibold leading-none mb-1"
              style={{ fontSize: '2rem', color: 'var(--accent)' }}
            >
              {stat.num}
            </span>
            <span className="text-xs font-mono tracking-[0.1em] uppercase" style={{ color: 'var(--text3)' }}>
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
