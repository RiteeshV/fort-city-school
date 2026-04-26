import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const facilities = [
  { name: 'Physics Lab', desc: 'Modern apparatus for hands-on experiments and demonstrations.', icon: '⚡', color: 'from-yellow-400 to-orange-500', bg: 'bg-yellow-50 border-yellow-200', tag: 'bg-yellow-100 text-yellow-800' },
  { name: 'Chemistry Lab', desc: 'Safe and well-stocked lab with all required chemicals and safety equipment.', icon: '🧪', color: 'from-green-400 to-emerald-600', bg: 'bg-green-50 border-green-200', tag: 'bg-green-100 text-green-800' },
  { name: 'Biology Lab', desc: 'Microscopes, specimens, and models for immersive biology learning.', icon: '🔬', color: 'from-teal-400 to-cyan-600', bg: 'bg-teal-50 border-teal-200', tag: 'bg-teal-100 text-teal-800' },
  { name: 'Maths Lab', desc: 'Tactile learning tools and puzzles that make abstract concepts concrete.', icon: '📐', color: 'from-blue-400 to-indigo-600', bg: 'bg-blue-50 border-blue-200', tag: 'bg-blue-100 text-blue-800' },
  { name: 'Computer Lab', desc: 'Modern computers with internet access and programming curricula.', icon: '💻', color: 'from-violet-400 to-purple-600', bg: 'bg-violet-50 border-violet-200', tag: 'bg-violet-100 text-violet-800' },
  { name: 'Library', desc: '3,000+ books, 15 periodicals, 4 newspapers and 4 magazines.', icon: '📖', color: 'from-amber-400 to-orange-500', bg: 'bg-amber-50 border-amber-200', tag: 'bg-amber-100 text-amber-800' },
  { name: 'Dance Room', desc: 'Spacious studio for classical, folk and contemporary dance forms.', icon: '💃', color: 'from-pink-400 to-rose-500', bg: 'bg-pink-50 border-pink-200', tag: 'bg-pink-100 text-pink-800' },
  { name: 'Audio-Visual Room', desc: 'Projector-equipped room for multimedia learning and presentations.', icon: '🎬', color: 'from-slate-500 to-gray-700', bg: 'bg-slate-50 border-slate-200', tag: 'bg-slate-100 text-slate-800' },
  { name: 'Playground', desc: '4,800+ sq.m of open playground for sports and outdoor activities.', icon: '⚽', color: 'from-lime-400 to-green-600', bg: 'bg-lime-50 border-lime-200', tag: 'bg-lime-100 text-lime-800' },
  { name: 'Medical Room', desc: 'First-aid equipped health room with regular medical check-up facilities.', icon: '🏥', color: 'from-red-400 to-rose-600', bg: 'bg-red-50 border-red-200', tag: 'bg-red-100 text-red-800' },
]

export default function Facilities() {
  const [active, setActive] = useState(null)

  return (
    <section id="facilities" className="py-24 bg-gradient-to-b from-[#F8FAFC] to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-14">
          <span className="section-tag">Campus Facilities</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mt-3 mb-4 tracking-tight">
            World-Class <span className="text-[#1E3A8A]">Infrastructure</span>
          </h2>
          <p className="text-[#475569] max-w-2xl mx-auto text-lg leading-relaxed">
            Our campus is thoughtfully designed to support every dimension of learning — academic, artistic, physical, and emotional.
          </p>
        </motion.div>

        {/* Library banner */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="rounded-3xl overflow-hidden shadow-xl mb-12 relative" style={{ height: '240px' }}>
          <img src="/school-photos/reading-day.jpg" alt="Library" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/90 via-[#1E3A8A]/60 to-transparent flex items-center px-10">
            <div>
              <p className="text-[#F59E0B] text-xs font-bold uppercase tracking-[0.15em] mb-2">📖 Our Library</p>
              <h3 className="text-3xl font-black text-white mb-1">3,000+ books.</h3>
              <p className="text-white/80 font-semibold">Infinite knowledge.</p>
            </div>
          </div>
        </motion.div>

        {/* Facilities grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {facilities.map((fac, i) => (
            <motion.div
              key={fac.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => setActive(active === i ? null : i)}
              className={`group relative rounded-2xl border p-5 ${fac.bg} hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden`}
            >
              {/* Top bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${fac.color} rounded-t-2xl`} />

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${fac.color} flex items-center justify-center text-2xl shadow-md mb-3 group-hover:scale-110 transition-transform duration-300`}>
                {fac.icon}
              </div>

              <h4 className="font-extrabold text-[#1E293B] text-sm mb-1.5">{fac.name}</h4>

              <AnimatePresence>
                {active === i ? (
                  <motion.p
                    key="desc"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-[#64748B] text-xs leading-relaxed"
                  >
                    {fac.desc}
                  </motion.p>
                ) : (
                  <motion.p
                    key="tap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full w-fit ${fac.tag}`}
                  >
                    Tap to learn more
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Sports + Safety */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-xl border border-[#E2E8F0]" style={{ height: '280px' }}>
            <img src="/school-photos/sports-skating.jpg" alt="Sports activities" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="rounded-3xl p-10 flex flex-col justify-center"
            style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #1e4aba 100%)' }}>
            <p className="text-[#F59E0B] text-xs font-bold uppercase tracking-[0.15em] mb-3">🛡️ Safety First</p>
            <h3 className="text-2xl font-extrabold text-white mb-4 leading-tight">Your child's safety is our highest priority.</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">Our campus features 24/7 CCTV surveillance, guarded entrances, ID verification, regular safety drills, and first-aid readiness at all times.</p>
            <div className="flex flex-wrap gap-2">
              {[
                { label: '24/7 CCTV', icon: '📹' },
                { label: 'Guarded Entry', icon: '🔒' },
                { label: 'ID Verification', icon: '🪪' },
                { label: 'Fire Safety', icon: '🔥' },
                { label: 'First Aid', icon: '🏥' },
                { label: 'Safety Drills', icon: '🚨' },
              ].map((item) => (
                <span key={item.label} className="flex items-center gap-1.5 px-3 py-1.5 bg-white/15 text-white rounded-xl text-xs font-semibold border border-white/20 hover:bg-white/25 transition-colors">
                  <span>{item.icon}</span> {item.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
