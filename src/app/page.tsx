// src/app/page.tsx
import Navbar from '@/components/layout/Navbar'
import ScrollProgress from '@/components/ui/ScrollProgress'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Education from '@/components/sections/Education'
import Research from '@/components/sections/Research'
import Skills from '@/components/sections/Skills'
import Publications from '@/components/sections/Publications'
import Patent from '@/components/sections/Patent'
import Achievements from '@/components/sections/Achievements'
import Conferences from '@/components/sections/Conferences'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Research />
        <Skills />
        <Publications />
        <Patent />
        <Achievements />
        <Conferences />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
