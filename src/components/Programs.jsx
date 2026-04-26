import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const programs = [
  {
    level: 'Pre-Primary',
    grades: 'Nursery – KG',
    description: 'Play-based learning that sparks curiosity and lays the foundation for lifelong love of learning.',
    highlights: ['Activity-based curriculum', 'Story-telling & arts', 'Motor skills development', 'Social & emotional growth'],
    icon: '🌱',
    gradient: 'from-emerald-400 to-teal-500',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    tag: 'text-emerald-700 bg-emerald-100',
    accent: '#10B981',
  },
  {
    level: 'Primary',
    grades: 'Class I – V',
    description: 'Building strong fundamentals through engaging, multi-sensory teaching across all subjects.',
    highlights: ['CBSE + NEP aligned', 'Maths & Language focus', 'Science exploration', 'Values education'],
    icon: '📚',
    gradient: 'from-blue-400 to-indigo-500',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    tag: 'text-blue-700 bg-blue-100',
    accent: '#3B82F6',
  },
  {
    level: 'Middle School',
    grades: 'Class VI – VIII',
    description: 'Deepening knowledge and critical thinking with project-based and collaborative learning.',
    highlights: ['Olympiad preparation', 'STEM projects', 'Art & culture', 'Sports & fitness'],
    icon: '🔭',
    gradient: 'from-violet-400 to-purple-600',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    tag: 'text-violet-700 bg-violet-100',
    accent: '#7C3AED',
  },
  {
    level: 'Secondary',
    grades: 'Class IX – X',
    description: 'Focused board examination preparation blended with holistic development and career awareness.',
    highlights: ['CBSE Board prep', 'NTSE coaching', 'Lab practicals', 'Leadership programs'],
    icon: '🎯',
    gradient: 'from-orange-400 to-rose-500',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    tag: 'text-orange-700 bg-orange-100',
    accent: '#F97316',
  },
  {
    level: 'Science Stream',
    grades: 'Class XI – XII',
    description: 'Physics, Chemistry, Biology & Maths with dedicated labs for engineering & medical aspirants.',
    highlights: ['PCM / PCB / PCMB', 'JEE / NEET orientation', 'Advanced practicals', 'Research projects'],
    icon: '⚗️',
    gradient: 'from-cyan-400 to-blue-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    tag: 'text-cyan-700 bg-cyan-100',
    accent: '#06B6D4',
  },
  {
    level: 'Commerce & Humanities',
    grades: 'Class XI – XII',
    description: 'Commerce and Humanities streams with real-world skills for future economists, artists, and leaders.',
    highlights: ['Accountancy & Economics', 'History & Political Science', 'Business Studies', 'Career counselling'],
    icon: '🌍',
    gradient: 'from-amber-400 to-yellow-500',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    tag: 'text-amber-700 bg-amber-100',
    accent: '#F59E0B',
  },
]

export default function Programs() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="section-tag">Academic Programs</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mt-3 mb-4 tracking-tight leading-tight">
              One School, <span className="text-[#1E3A8A]">Every</span> <span className="text-[#F59E0B]">Stage</span>
            </h2>
            <p className="text-[#475569] text-lg leading-relaxed">
              From Nursery to Class XII — we accompany your child through every milestone of their educational journey.
            </p>
            {/* Journey bar */}
            <div className="mt-6 flex items-center gap-1">
              {programs.map((p, i) => (
                <div key={i} className="flex items-center gap-1">
                  <div
                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${p.gradient} flex items-center justify-center text-sm shadow-md cursor-default`}
                    title={p.level}
                  >
                    {p.icon}
                  </div>
                  {i < programs.length - 1 && <div className="w-4 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200" />}
                </div>
              ))}
            </div>
            <p className="text-xs text-[#94A3B8] mt-2 font-medium">Nursery → Class XII complete pathway</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-2xl border border-[#E2E8F0]" style={{ height: '280px' }}>
            <img src="/school-photos/kids-activity.jpg" alt="Students in activity" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.level}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              className={`relative rounded-2xl border ${prog.border} ${prog.bg} overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-default`}
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${prog.gradient}`} />

              <div className="p-7">
                {/* Icon + grades */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${prog.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                    {prog.icon}
                  </div>
                  <span className={`text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full ${prog.tag}`}>
                    {prog.grades}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-[#1E293B] mb-2">{prog.level}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed mb-5">{prog.description}</p>

                <ul className="space-y-2">
                  {prog.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5 text-sm text-[#475569]">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: prog.accent + '20' }}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: prog.accent }} />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover shine effect */}
              <AnimatePresence>
                {hovered === i && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 50% 0%, ${prog.accent}08 0%, transparent 70%)` }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
