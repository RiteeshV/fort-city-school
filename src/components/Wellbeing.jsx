import { motion } from 'framer-motion'

const supports = [
  { title: 'Inclusive Teachers', text: 'Teachers who help students feel welcome, valued and included every day.', icon: '🤝', color: 'from-blue-500 to-indigo-600', light: 'bg-blue-50 border-blue-100', tag: 'bg-blue-100 text-blue-700' },
  { title: 'Counselling Support', text: 'Access to school counsellors, psychologists and specialist staff.', icon: '💬', color: 'from-purple-500 to-violet-600', light: 'bg-purple-50 border-purple-100', tag: 'bg-purple-100 text-purple-700' },
  { title: 'Wellbeing Programs', text: 'Programs that support health, social skills, attendance and positive behaviour.', icon: '🌱', color: 'from-emerald-500 to-teal-600', light: 'bg-emerald-50 border-emerald-100', tag: 'bg-emerald-100 text-emerald-700' },
  { title: 'Transition Help', text: 'Help for students who are new or changing year levels.', icon: '🎯', color: 'from-orange-500 to-amber-500', light: 'bg-orange-50 border-orange-100', tag: 'bg-orange-100 text-orange-700' },
  { title: 'Positive Behaviour', text: 'Clear expectations for behaviour and respectful relationships.', icon: '⭐', color: 'from-yellow-500 to-orange-400', light: 'bg-yellow-50 border-yellow-100', tag: 'bg-yellow-100 text-yellow-700' },
  { title: 'Family Partnerships', text: 'Staff who get to know each child and work closely with families.', icon: '👨‍👩‍👧', color: 'from-rose-500 to-pink-500', light: 'bg-rose-50 border-rose-100', tag: 'bg-rose-100 text-rose-700' },
  { title: 'Health Care Plans', text: 'Developing personalised health care plans for students in need.', icon: '❤️‍🩹', color: 'from-red-500 to-rose-600', light: 'bg-red-50 border-red-100', tag: 'bg-red-100 text-red-700' },
  { title: 'Open Communication', text: 'Transparent communication about wellbeing, progress and support.', icon: '📣', color: 'from-cyan-500 to-sky-600', light: 'bg-cyan-50 border-cyan-100', tag: 'bg-cyan-100 text-cyan-700' },
]

export default function Wellbeing() {
  return (
    <section id="wellbeing" className="py-24 bg-gradient-to-b from-[#F8FAFC] to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="section-tag">Student Wellbeing</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mt-3 mb-5 leading-tight tracking-tight">
              Supporting every <span className="text-[#1E3A8A]">student's</span>{' '}
              <span className="text-[#F59E0B]">wellbeing</span>
            </h2>
            <p className="text-[#475569] text-lg leading-relaxed mb-6">
              Supporting each student's mental, emotional, social and physical wellbeing is a core part of everyday school life at Fort City.
            </p>
            <div className="flex gap-3 flex-wrap">
              <span className="px-4 py-2 bg-[#1E3A8A] text-white rounded-full text-sm font-semibold">Holistic Growth</span>
              <span className="px-4 py-2 bg-[#F59E0B]/10 text-[#B45309] border border-[#F59E0B]/30 rounded-full text-sm font-semibold">Every Child Matters</span>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-2xl border border-[#E2E8F0]">
            <img src="/school-photos/yoga-wellness.jpg" alt="Student wellness activities" className="w-full object-cover" style={{ height: '320px' }} />
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {supports.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`relative rounded-2xl p-6 border ${item.light} hover:shadow-xl transition-all duration-300 cursor-default overflow-hidden group`}
            >
              {/* top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} rounded-t-2xl`} />

              {/* icon circle */}
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>

              <h4 className="font-extrabold text-[#1E293B] text-sm mb-2 leading-snug">{item.title}</h4>
              <p className="text-sm leading-relaxed text-[#64748B]">{item.text}</p>

              {/* bottom tag */}
              <div className={`absolute bottom-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full ${item.tag} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                Learn more →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
