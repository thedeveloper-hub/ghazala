// src/components/layout/Navbar.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useNavbarScroll, useActiveSection } from '@/hooks/useAnimations'
import { navbarVariants, underlineHover } from '@/lib/motionVariants'

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Research', href: '#research' },
  { label: 'Skills', href: '#skills' },
  { label: 'Publications', href: '#publications' },
  { label: 'Awards', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

const SECTION_IDS = ['about', 'education', 'research', 'skills', 'publications', 'achievements', 'contact']

export default function Navbar() {
  const { isScrolled, isHidden } = useNavbarScroll()
  const activeSection = useActiveSection(SECTION_IDS)
  const { theme, setTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  const scrollTo = (href: string) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <motion.nav
      variants={navbarVariants}
      animate={isHidden ? 'hidden' : 'visible'}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 h-[70px] transition-all duration-300 ${
        isScrolled
          ? 'bg-white/70 dark:bg-gray-900/80 backdrop-blur-xl border-b border-black/5 dark:border-white/5 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <motion.a
        href="#hero"
        onClick={(e) => { e.preventDefault(); scrollTo('#hero') }}
        className="font-serif text-xl font-semibold tracking-wide no-underline"
        style={{ color: 'var(--text)' }}
        whileHover={{ scale: 1.03 }}
      >
        Ghazala <span style={{ color: 'var(--accent)' }}>Rahman</span>
      </motion.a>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.href.replace('#', '')
          return (
            <li key={item.label}>
              <motion.button
                onClick={() => scrollTo(item.href)}
                className="relative pb-1 text-xs tracking-[0.05em] uppercase font-medium border-0 bg-transparent cursor-pointer"
                style={{ color: isActive ? 'var(--accent)' : 'var(--text2)' }}
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                {item.label}
                <motion.span
                  variants={underlineHover}
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] rounded-full"
                  style={{ background: 'var(--accent)' }}
                />
              </motion.button>
            </li>
          )
        })}
      </ul>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        <motion.button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="w-10 h-10 rounded-full border flex items-center justify-center text-lg cursor-pointer"
          style={{ background: 'var(--surface2)', borderColor: 'var(--border)', backdropFilter: 'blur(10px)' }}
          whileHover={{ rotate: 20, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </motion.button>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex md:hidden flex-col gap-1.5 p-2 cursor-pointer bg-transparent border-0"
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="block w-6 h-0.5 rounded-full"
              style={{ background: 'var(--text)' }}
              animate={
                mobileOpen
                  ? i === 0 ? { rotate: 45, y: 7 } : i === 2 ? { rotate: -45, y: -7 } : { opacity: 0 }
                  : { rotate: 0, y: 0, opacity: 1 }
              }
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[70px] left-0 right-0 p-8 flex flex-col gap-6 md:hidden"
            style={{ background: 'var(--surface)', borderBottom: '1px solid var(--border)' }}
          >
            {NAV_ITEMS.map((item, i) => (
              <motion.button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0, transition: { delay: i * 0.06 } }}
                className="text-left text-sm font-medium tracking-wide uppercase bg-transparent border-0 cursor-pointer"
                style={{ color: 'var(--text2)' }}
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
