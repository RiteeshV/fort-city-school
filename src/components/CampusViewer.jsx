import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import SchoolModel from './SchoolModel'

export default function CampusViewer() {
  const [entered, setEntered] = useState(false)

  return (
    <section id="campus-3d" className="py-24 bg-gradient-to-b from-[#0F2460] to-[#1E3A8A] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-[#F59E0B] border border-[#F59E0B]/30 bg-[#F59E0B]/10 mb-4">
            🏫 Virtual Campus Tour
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4 tracking-tight">
            Explore Our Campus in <span className="text-[#F59E0B]">3D</span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-lg leading-relaxed">
            Rotate, zoom and explore Fort City School from any angle — right in your browser.
          </p>
        </motion.div>

        {/* 3D Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden border border-white/20 shadow-[0_20px_80px_rgba(0,0,0,0.5)]"
          style={{ height: '520px' }}
        >
          {/* Canvas */}
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

          {/* Controls hint overlay */}
          {!entered && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm cursor-pointer z-10"
              onClick={() => setEntered(true)}
            >
              <motion.div
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-20 h-20 rounded-full bg-white/20 border-2 border-white/50 flex items-center justify-center mb-4 backdrop-blur-md"
              >
                <span className="text-4xl">🏫</span>
              </motion.div>
              <p className="text-white font-black text-xl mb-1">Click to Explore</p>
              <p className="text-white/60 text-sm">Drag to rotate · Scroll to zoom</p>
            </motion.div>
          )}

          {/* Controls legend (shown after entering) */}
          {entered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-black/50 backdrop-blur-md rounded-2xl px-5 py-3 border border-white/20 z-10"
            >
              {[
                { icon: '🖱️', label: 'Drag to Rotate' },
                { icon: '🔍', label: 'Scroll to Zoom' },
                { icon: '✋', label: 'Right-click to Pan' },
              ].map((tip) => (
                <div key={tip.label} className="flex items-center gap-2 text-xs text-white/80 font-medium">
                  <span className="text-base">{tip.icon}</span>
                  {tip.label}
                </div>
              ))}
            </motion.div>
          )}

          {/* Corner badge */}
          <div className="absolute top-4 right-4 bg-[#F59E0B] text-white text-xs font-black px-3 py-1.5 rounded-xl shadow-lg z-10">
            🔴 LIVE 3D
          </div>
        </motion.div>

        {/* Stats below viewer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
        >
          {[
            { value: '4,800+', label: 'sq.m Playground', icon: '⚽' },
            { value: '10+', label: 'Facilities', icon: '🏗️' },
            { value: '24/7', label: 'CCTV Secured', icon: '📹' },
            { value: '100%', label: 'Safe Campus', icon: '🛡️' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 text-center hover:bg-white/15 transition-colors">
              <div className="text-3xl mb-1">{stat.icon}</div>
              <div className="text-2xl font-black text-white">{stat.value}</div>
              <div className="text-white/60 text-xs font-semibold mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
