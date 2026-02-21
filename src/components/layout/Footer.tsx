// src/components/layout/Footer.tsx
'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="px-6 md:px-24 py-10 flex flex-col md:flex-row justify-between items-center gap-4"
      style={{ background: 'var(--text)', color: 'rgba(255,255,255,0.5)' }}>
      <div>
        <p className="font-serif text-lg mb-1" style={{ color: 'rgba(255,255,255,0.9)' }}>Ghazala Rahman</p>
        <p className="text-xs">PhD Research Scholar · IIT Hyderabad</p>
      </div>
      <p className="text-xs">© 2024 Ghazala Rahman · Biotechnology, IIT Hyderabad</p>
    </footer>
  )
}
