import { motion } from 'framer-motion'

const achievements = [
  {
    category: 'Academics',
    icon: '🎓',
    gradient: 'from-blue-500 to-indigo-600',
    bg: 'bg-blue-50 border-blue-200',
    tag: 'bg-blue-600',
    items: [
      'Outstanding results in CBSE Class X & XII Board Examinations',
      'Commendable ranks in Mathematics Olympiad at district & state level',
      'Multiple selections in NTSE (National Talent Search Examination)',
      'Consistent 100% pass rate in board examinations',
    ],
  },
  {
    category: 'Sports & Games',
    icon: '🏆',
    gradient: 'from-orange-400 to-amber-500',
    bg: 'bg-orange-50 border-orange-200',
    tag: 'bg-orange-500',
    items: [
      'District-level champions in track & field athletics',
      'State-level representation in multiple sports categories',
      'National-level participants in indoor games',
      'Inter-school tournament winners in team sports',
    ],
  },
  {
    category: 'Arts & Culture',
    icon: '🎨',
    gradient: 'from-pink-500 to-rose-500',
    bg: 'bg-pink-50 border-pink-200',
    tag: 'bg-pink-500',
    items: [
      'First prizes in district-level painting competitions',
      'Award-winning performances in cultural festivals',
      'State-level recognition in classical dance and music',
      'Literary competition winners at regional level',
    ],
  },
  {
    category: 'Recognition',
    icon: '⭐',
    gradient: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-50 border-emerald-200',
    tag: 'bg-emerald-600',
    items: [
      'Recognized as "Best State Board School in AP" by Brainfeed Magazine',
      'CBSE compliant with all mandatory public disclosures',
      'NEP 2020 aligned curriculum implementation',
      'Management by Sree Balajee Education Society',
    ],
  },
]

const badges = [
  { level: 'District Level', icon: '🥉', color: 'from-blue-400 to-indigo-500', shadow: 'shadow-blue-200' },
  { level: 'State Level', icon: '🥈', color: 'from-amber-400 to-yellow-500', shadow: 'shadow-amber-200' },
  { level: 'National Level', icon: '🥇', color: 'from-emerald-400 to-green-600', shadow: 'shadow-emerald-200' },
  { level: 'Brainfeed Award', icon: '🏅', color: 'from-rose-400 to-pink-600', shadow: 'shadow-rose-200' },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="section-tag">Achievements</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mt-3 mb-4 tracking-tight leading-tight">
              Pride of <span className="text-[#1E3A8A]">Fort City</span>
            </h2>
            <p className="text-[#475569] text-lg leading-relaxed mb-6">
              Our students consistently excel at district, state, and national levels — a testament to the school's commitment to all-round excellence.
            </p>
            {/* Achievement level badges */}
            <div className="flex flex-wrap gap-4">
              {badges.map((b, i) => (
                <motion.div
                  key={b.level}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.06, y: -3 }}
                  className={`flex flex-col items-center gap-1.5 px-5 py-3 rounded-2xl bg-gradient-to-br ${b.color} shadow-lg ${b.shadow} text-white min-w-[110px]`}
                >
                  <span className="text-3xl">{b.icon}</span>
                  <span className="text-xs font-black tracking-wide text-center leading-tight">{b.level}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-2xl border border-[#E2E8F0]" style={{ height: '280px' }}>
            <img src="/school-photos/youth-parliament.jpg" alt="Youth Parliament" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`relative rounded-2xl border ${ach.bg} overflow-hidden hover:shadow-xl transition-all duration-300`}
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${ach.gradient}`} />

              <div className="p-7">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${ach.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                    {ach.icon}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#1E293B] text-lg">{ach.category}</h3>
                    <span className={`inline-block text-white text-[10px] font-black px-2.5 py-0.5 rounded-full mt-0.5 ${ach.tag}`}>
                      {ach.items.length} achievements
                    </span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {ach.items.map((item, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 + j * 0.06 }}
                      className="flex items-start gap-3 text-sm text-[#475569]"
                    >
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${ach.gradient} flex items-center justify-center shrink-0 mt-0.5`}>
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
