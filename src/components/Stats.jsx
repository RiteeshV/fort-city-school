import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function CountUp({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef()
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    let start = 0
    const inc = end / (duration / 16)
    const t = setInterval(() => {
      start += inc
      if (start >= end) { setCount(end); clearInterval(t) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(t)
  }, [inView, end, duration])
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

const stats = [
  { value: 2011, suffix: '', label: 'Year Founded', icon: '🏫' },
  { value: 38, suffix: '+', label: 'Classrooms', icon: '📚' },
  { value: 3000, suffix: '+', label: 'Library Books', icon: '📖' },
  { value: 6, suffix: '', label: 'Science Labs', icon: '🔬' },
  { value: 12, suffix: '+', label: 'Years of Excellence', icon: '🏆' },
  { value: 227, suffix: ' cents', label: 'Campus Area', icon: '🌳' },
]

export default function Stats() {
  return (
    <section id="legacy" className="py-24 bg-[#1E3A8A] relative overflow-hidden">
      {/* subtle pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white/80 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border border-white/20">Why Fort City School</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            A Legacy of <span className="text-[#F59E0B]">Excellence</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-lg leading-relaxed">
            Since 2011, shaping young minds with academic rigor, character development, and holistic growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/15 hover:bg-white/15 hover:-translate-y-1 transition-all duration-300">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-extrabold text-[#F59E0B]"><CountUp end={stat.value} suffix={stat.suffix} /></div>
              <div className="text-white/60 text-xs mt-1 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
