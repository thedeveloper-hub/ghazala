# Ghazala Rahman – Academic Portfolio

A production-ready, animated academic portfolio for Ghazala Rahman, PhD Research Scholar in Biotechnology at IIT Hyderabad.

## ✨ Features

- **Framer Motion** – extensive animations across every section
- **Next.js 14** App Router with TypeScript
- **Tailwind CSS** for styling
- **Dark Mode** with smooth animated transition (next-themes)
- **Scroll Progress Bar** with spring physics
- **Animated Navbar** – hide/show on scroll + active underline
- **Parallax Hero** with floating research keywords & DNA helix
- **Timeline animations** for Education & Research
- **Staggered card grids** for Skills, Achievements, Conferences
- **Animated skill bars** on scroll
- **Glassmorphism cards** with hover glow effects
- **Mobile-first responsive** design
- **SEO meta tags**
- **Static export ready** for Vercel

## 🗂 Project Structure

```
ghazala-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with SEO metadata
│   │   ├── page.tsx          # Main page assembling all sections
│   │   ├── providers.tsx     # ThemeProvider wrapper
│   │   └── globals.css       # Global styles + CSS variables
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx    # Animated navbar with scroll behavior
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx      # Parallax hero + floating keywords
│   │   │   ├── About.tsx     # Profile card + research focus
│   │   │   ├── Education.tsx # Animated timeline
│   │   │   ├── Research.tsx  # Research timeline
│   │   │   ├── Skills.tsx    # Skill cards with animated bars
│   │   │   ├── Publications.tsx
│   │   │   ├── Patent.tsx
│   │   │   ├── Achievements.tsx
│   │   │   ├── Conferences.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── ScrollProgress.tsx  # Spring-animated scroll bar
│   │       └── SectionWrapper.tsx  # Reusable section with stagger
│   ├── hooks/
│   │   └── useAnimations.ts  # useNavbarScroll, useScrollReveal, useParallax, useCountUp, useActiveSection
│   └── lib/
│       ├── data.ts           # All profile data (single source of truth)
│       └── motionVariants.ts # Centralized Framer Motion variants
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

## 🚀 Setup Instructions

### 1. Prerequisites
- Node.js 18+ installed
- npm or yarn

### 2. Install dependencies
```bash
cd ghazala-portfolio
npm install
```

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 4. Build for production
```bash
npm run build
```

### 5. Static export (for manual hosting)
The project is configured with `output: 'export'` in `next.config.js`. After `npm run build`, the static files will be in the `out/` directory.

## ☁️ Deploy to Vercel

### Option A: CLI (recommended)
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option B: GitHub Integration
1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Done! Your site is live.

### Vercel Settings (auto-detected)
- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: `.next` (or `out` for static export)
- Install Command: `npm install`

## 🎨 Customization

### Update Profile Data
Edit `src/lib/data.ts` — all profile information is centralized here.

### Modify Colors
Edit CSS variables in `src/app/globals.css` under `:root` (light mode) and `.dark`.

### Add/Modify Animations
Edit `src/lib/motionVariants.ts` for centralized Framer Motion variants.

### Add New Sections
1. Create component in `src/components/sections/`
2. Import and add to `src/app/page.tsx`

## 📦 Key Dependencies

| Package | Purpose |
|---------|---------|
| `next@14` | Framework |
| `framer-motion@11` | All animations |
| `next-themes` | Dark mode |
| `tailwindcss` | Styling |
| `typescript` | Type safety |
