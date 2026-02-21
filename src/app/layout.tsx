// src/app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Ghazala Rahman | PhD Research Scholar – Biotechnology, IIT Hyderabad',
  description: 'Ghazala Rahman – PhD Research Scholar in Biotechnology at IIT Hyderabad. Research in cancer biology, mechanobiology, Caveolin-1, and zebrafish xenograft models.',
  keywords: ['Ghazala Rahman', 'PhD Biotechnology', 'IIT Hyderabad', 'Caveolin-1', 'Cancer Biology', 'Mechanobiology', 'Zebrafish'],
  openGraph: {
    title: 'Ghazala Rahman | PhD Research Scholar',
    description: 'Cancer biology & mechanobiology researcher at IIT Hyderabad',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
