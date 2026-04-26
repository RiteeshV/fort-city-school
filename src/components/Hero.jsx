import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion, AnimatePresence } from 'framer-motion'
import SchoolModel from './SchoolModel'

const CYCLING_WORDS = ['Excellence', 'Character', 'Leaders', 'Futures', 'Confidence']

function ElegantShape({ className = '', delay = 0, width = 400, height = 100, rotate = 0, gradient = 'from-white/[0.08]' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -150, rotate: rotate - 15 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ duration: 2.4, delay, ease: [0.23, 0.86, 0.39, 0.96], opacity: { duration: 1.2 } }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        style={{ width, height }}
      >
        <div className={`absolute inset-0 rounded-full bg-gradient-to-r to-transparent ${gradient} backdrop-blur-[2px] border-2 border-white/[0.12] shadow-[0_8px_32px_0_rgba(255,255,255,0.06)] after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_70%)]`} />
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setWordIndex(i => (i + 1) % CYCLING_WORDS.length), 2200)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">

      {/* 3D Canvas */}
      <div className="absolute inset-0">
        <Canvas
          shadows
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: false }}
          style={{ background: 'linear-gradient(180deg, #0a1428 0%, #1A2E5A 50%, #2e4a7a 100%)' }}
        >
          <Suspense fallback={null}>
            <SchoolModel />
          </Suspense>
        </Canvas>
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0 z-[5] overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8704A]/[0.04] via-transparent to-[#0a1428]/[0.08] blur-3xl" />
        <ElegantShape delay={0.3}  width={580} height={130} rotate={12}   gradient="from-[#E8704A]/[0.13]"  className="left-[-8%]  top-[18%]" />
        <ElegantShape delay={0.5}  width={480} height={110} rotate={-14}  gradient="from-[#f0956f]/[0.11]"  className="right-[-4%] top-[68%]" />
        <ElegantShape delay={0.4}  width={280} height={70}  rotate={-8}   gradient="from-[#E8704A]/[0.10]"  className="left-[6%]  bottom-[12%]" />
        <ElegantShape delay={0.6}  width={190} height={55}  rotate={20}   gradient="from-[#E8704A]/[0.09]"  className="right-[18%] top-[12%]" />
        <ElegantShape delay={0.7}  width={140} height={38}  rotate={-22}  gradient="from-white/[0.06]"      className="left-[22%] top-[8%]" />
        <ElegantShape delay={0.55} width={340} height={85}  rotate={6}    gradient="from-white/[0.06]"      className="right-[2%] top-[35%]" />
      </div>

      {/* Dark overlay behind text for readability */}
      <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 75% at 50% 45%, rgba(5,15,40,0.72) 0%, rgba(5,15,40,0.45) 60%, transparent 100%)' }} />
      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a1428]/80 to-transparent z-10 pointer-events-none" />

      {/* Main content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 pointer-events-none">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.23, 0.86, 0.39, 0.96] }}
          className="mb-6"
        >
          <img
            src="/fort-city-logo.jpg"
            alt="Fort City School"
            className="h-20 sm:h-28 md:h-36 w-auto object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8704A] opacity-80" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E8704A]" />
            </span>
            <span className="text-white text-xs tracking-widest font-bold uppercase drop-shadow-md">
              CBSE Affiliated · Est. 2011 · Vizianagaram, AP
            </span>
          </div>
        </motion.div>

        {/* School name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 1 }}
          className="mb-5"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight tracking-tight drop-shadow-2xl">
            <span style={{
              backgroundImage: 'linear-gradient(to bottom, #ffffff 0%, rgba(255,255,255,0.82) 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Fort City
            </span>
            <br />
            <span style={{
              backgroundImage: 'linear-gradient(to right, #E8704A, #f0956f 45%, #ffffff 75%, #E8704A 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              filter: 'drop-shadow(0 0 24px rgba(232,112,74,0.4))',
            }}>
              School
            </span>
          </h1>
        </motion.div>

        {/* Cycling tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8 }}
          className="flex items-center justify-center gap-2 text-lg sm:text-xl md:text-2xl font-semibold text-white tracking-wide mb-2 drop-shadow-lg"
          style={{ minHeight: '2.2rem' }}
        >
          <span>Building</span>
          <span className="relative inline-block overflow-hidden" style={{ minWidth: '9rem' }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                className="absolute left-0 right-0 text-center font-black"
                style={{ color: '#E8704A' }}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -28 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                {CYCLING_WORDS[wordIndex]}.
              </motion.span>
            </AnimatePresence>
            <span className="invisible font-black">
              {CYCLING_WORDS.reduce((a, b) => (a.length > b.length ? a : b))}.
            </span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05, duration: 0.7 }}
          className="text-white/90 text-sm mb-10 max-w-md tracking-wide font-medium drop-shadow-md"
        >
          Nursery to Class XII · Science · Commerce · Humanities
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.8 }}
          className="flex flex-wrap gap-4 justify-center pointer-events-auto"
        >
          <motion.a
            href="#admissions"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="px-8 py-3.5 rounded-xl font-black text-sm text-white shadow-xl"
            style={{ background: '#E8704A' }}
          >
            Apply for Admissions
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="px-8 py-3.5 bg-white/20 border border-white/40 text-white rounded-xl font-bold text-sm hover:bg-white/30 transition-all duration-200 backdrop-blur-sm shadow-lg"
          >
            Explore Campus
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0 }}
        className="absolute bottom-6 right-8 z-20"
      >
        <a href="#about" className="flex flex-col items-center gap-1 text-white/70 hover:text-white transition-colors text-xs tracking-widest">
          SCROLL
          <svg className="w-3 h-3 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </motion.div>
    </section>
  )
}
