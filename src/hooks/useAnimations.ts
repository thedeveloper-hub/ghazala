// src/hooks/useAnimations.ts
'use client'

import { useEffect, useRef, useState } from 'react'
import { useScroll, useTransform, MotionValue } from 'framer-motion'

// ─── useScrollReveal ────────────────────────────────────────────
export function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

// ─── useNavbarScroll ────────────────────────────────────────────
export function useNavbarScroll() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const lastScrollRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY
      setIsScrolled(current > 50)
      if (current > lastScrollRef.current + 5 && current > 300) {
        setIsHidden(true)
      } else if (current < lastScrollRef.current || current < 100) {
        setIsHidden(false)
      }
      lastScrollRef.current = current
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { isScrolled, isHidden }
}

// ─── useScrollProgress ──────────────────────────────────────────
export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return progress
}

// ─── useParallax ────────────────────────────────────────────────
export function useParallax(speed = 0.15): MotionValue<string> {
  const { scrollY } = useScroll()
  return useTransform(scrollY, (y) => `translateY(${y * speed}px)`)
}

// ─── useActiveSection ───────────────────────────────────────────
export function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const offset = 150
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.offsetTop - offset
        const bottom = top + el.offsetHeight
        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds])

  return active
}

// ─── useCountUp ─────────────────────────────────────────────────
export function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime: number
    const step = (time: number) => {
      if (!startTime) startTime = time
      const progress = Math.min((time - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])

  return count
}
