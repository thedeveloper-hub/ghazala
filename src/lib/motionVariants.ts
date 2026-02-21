// src/lib/motionVariants.ts
// Centralized Framer Motion variants for consistent animations

import { Variants } from 'framer-motion'

// ─── Fade & Slide ────────────────────────────────────────────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  },
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

// ─── Staggered Container ────────────────────────────────────────
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
}

// ─── Hero ───────────────────────────────────────────────────────
export const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  },
}

// ─── Cards ──────────────────────────────────────────────────────
export const cardHover = {
  rest: { y: 0, boxShadow: '0 4px 20px rgba(0,0,0,0.04)', borderColor: 'var(--border)' },
  hover: {
    y: -6,
    boxShadow: '0 16px 50px rgba(42,95,143,0.15)',
    borderColor: '#2a5f8f',
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  },
}

export const scaleOnHover = {
  rest: { scale: 1 },
  hover: { scale: 1.04, transition: { duration: 0.25 } },
}

// ─── Timeline ───────────────────────────────────────────────────
export const timelineItem: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
}

// ─── Skill Bar ──────────────────────────────────────────────────
export const skillBar = (width: number = 1): Variants => ({
  hidden: { scaleX: 0 },
  visible: {
    scaleX: width,
    transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1], delay: 0.3 },
  },
})

// ─── Page Transition ────────────────────────────────────────────
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 15 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.3 },
  },
}

// ─── Blob / Background ──────────────────────────────────────────
export const blobAnimation = (delay: number = 0) => ({
  animate: {
    scale: [1, 1.08, 0.97, 1],
    x: [0, 20, -15, 0],
    y: [0, -30, 15, 0],
    transition: {
      duration: 8,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
})

// ─── Underline Hover ────────────────────────────────────────────
export const underlineHover = {
  rest: { scaleX: 0, originX: 0 },
  hover: {
    scaleX: 1,
    originX: 0,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  },
}

// ─── Navbar ─────────────────────────────────────────────────────
export const navbarVariants: Variants = {
  visible: { y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
  hidden: { y: -100, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
}

// ─── Floating Keyword ───────────────────────────────────────────
export const floatingKeyword = (delay: number, duration: number): Variants => ({
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: [0, 0.12, 0.12, 0],
    y: -120,
    transition: {
      duration,
      delay,
      ease: 'linear',
      times: [0, 0.1, 0.9, 1],
    },
  },
})

// ─── Glow Pulse ─────────────────────────────────────────────────
export const glowPulse: Variants = {
  animate: {
    textShadow: [
      '0 0 20px rgba(42,95,143,0.1)',
      '0 0 50px rgba(42,95,143,0.25)',
      '0 0 20px rgba(42,95,143,0.1)',
    ],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
}

// ─── Achievement Card Bar ────────────────────────────────────────
export const slideInBar: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
}
