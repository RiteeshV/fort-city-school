import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const perks = [
  { icon: '🌱', title: 'Grow With Us', desc: 'Continuous professional development and training.' },
  { icon: '🤝', title: 'Great Culture', desc: 'Supportive, collaborative and respectful team.' },
  { icon: '🏫', title: 'Modern Campus', desc: 'Smart classrooms, labs and sports facilities.' },
  { icon: '⭐', title: 'Make an Impact', desc: 'Shape the next generation of change-makers.' },
]

const roles = ['Subject Teachers', 'PE Teacher', 'Computer Science Teacher', 'Administrative Staff', 'Lab Assistants']

// Animated SVG checkmark
function AnimatedCheck() {
  return (
    <motion.svg
      viewBox="0 0 80 80"
      className="w-20 h-20"
      initial="hidden"
      animate="visible"
    >
      <motion.circle
        cx="40" cy="40" r="36"
        fill="none"
        stroke="#16a34a"
        strokeWidth="4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />
      <motion.path
        d="M24 40 L35 51 L56 29"
        fill="none"
        stroke="#16a34a"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
      />
    </motion.svg>
  )
}

// Floating confetti dots
function Confetti() {
  const dots = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    color: ['#f59e0b', '#3b82f6', '#10b981', '#8b5cf6', '#ef4444'][i % 5],
    size: 6 + Math.random() * 8,
    delay: Math.random() * 0.4,
  }))
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
      {dots.map((d) => (
        <motion.div
          key={d.id}
          style={{ left: `${d.x}%`, width: d.size, height: d.size, backgroundColor: d.color, borderRadius: '50%', position: 'absolute', top: -10 }}
          initial={{ y: -20, opacity: 1, rotate: 0 }}
          animate={{ y: 380, opacity: 0, rotate: 360 * (Math.random() > 0.5 ? 1 : -1) }}
          transition={{ duration: 1.4 + Math.random() * 0.8, delay: d.delay, ease: 'easeIn' }}
        />
      ))}
    </div>
  )
}

export default function Careers() {
  const [formData, setFormData] = useState({ title: 'Mr', name: '', email: '', mobile: '', qualification: '', field: '', experience: '', whyHire: '', resume: null })
  const [submitted, setSubmitted] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
  const handleFile = (e) => setFormData({ ...formData, resume: e.target.files[0] })

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ access_key: 'c177abd5-7d1d-45b3-aed1-78908163ce58', ...formData }),
    })
    setSubmitted(true)
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 2200)
  }

  const resetForm = () => {
    setSubmitted(false)
    setFormData({ title: 'Mr', name: '', email: '', mobile: '', qualification: '', field: '', experience: '', whyHire: '', resume: null })
  }

  return (
    <section id="careers" className="relative overflow-hidden">

      {/* ── Hero banner ── */}
      <div className="relative bg-navy-900 py-28 px-6 overflow-hidden">
        {/* animated gradient orbs */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 right-0 w-[520px] h-[520px] rounded-full bg-gold-500 -translate-y-1/2 translate-x-1/3 pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-500 translate-y-1/2 -translate-x-1/3 pointer-events-none"
        />

        {/* floating tag words */}
        {['Innovation', 'Leadership', 'Excellence', 'Inspire', 'Educate', 'Empower'].map((word, i) => (
          <motion.span
            key={word}
            className="absolute text-white/5 font-serif font-bold text-2xl md:text-4xl pointer-events-none select-none"
            style={{ top: `${10 + (i * 14) % 80}%`, left: `${(i * 17) % 85}%` }}
            animate={{ y: [0, -12, 0], opacity: [0.04, 0.08, 0.04] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.7 }}
          >
            {word}
          </motion.span>
        ))}

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold-500/20 border border-gold-500/30 rounded-full text-gold-400 text-xs font-semibold tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              We're Hiring
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 leading-tight">
              Educate for an<br />
              <span className="text-gold-400">Evolving World.</span>
            </h2>
            <p className="text-white/55 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
              Join a forward-thinking team preparing students not just for exams — but for
              life in a rapidly changing world.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setShowForm(true)}
                className="px-10 py-4 bg-gold-500 text-navy-800 rounded-2xl font-bold text-base hover:bg-gold-400 transition-all duration-200 hover:shadow-2xl hover:-translate-y-1"
              >
                Apply Now →
              </button>
              <a
                href="#about"
                className="px-10 py-4 bg-white/10 border border-white/20 text-white rounded-2xl font-semibold text-base hover:bg-white/15 transition-all duration-200 backdrop-blur-sm"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Perks grid ── */}
      <div className="bg-[#F8F8F5] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {perks.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="text-3xl mb-3">{p.icon}</div>
                <h4 className="font-bold text-navy-800 mb-1 text-sm">{p.title}</h4>
                <p className="text-navy-800/50 text-xs leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Role chips */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <p className="text-navy-800/40 text-xs uppercase tracking-widest mb-4 font-semibold">Current Openings — click to apply</p>
            <div className="flex flex-wrap justify-center gap-2">
              {roles.map((role) => (
                <button
                  key={role}
                  onClick={() => { setFormData(f => ({ ...f, field: role })); setShowForm(true) }}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-navy-800/70 text-sm font-medium hover:border-gold-500 hover:text-gold-600 hover:bg-gold-500/5 transition-all duration-200"
                >
                  {role}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Application modal ── */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm"
            onClick={() => setShowForm(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 40 }}
              transition={{ type: 'spring', damping: 22, stiffness: 260 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[92vh] flex flex-col overflow-hidden relative"
            >
              <div className="h-1.5 w-full bg-gradient-to-r from-navy-800 via-gold-500 to-navy-800 shrink-0" />

              <div className="overflow-y-auto p-8 md:p-10">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="relative flex flex-col items-center justify-center py-10 text-center gap-5"
                    >
                      {showConfetti && <Confetti />}
                      <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', damping: 14, stiffness: 200 }}
                      >
                        <AnimatedCheck />
                      </motion.div>
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="text-2xl font-serif font-bold text-navy-800"
                      >
                        Application Submitted!
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.85 }}
                        className="text-navy-800/60 max-w-sm text-sm leading-relaxed"
                      >
                        Thank you for wanting to be part of the Fort City School family.
                        We will carefully review your application and get in touch with you soon.
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="flex gap-3 mt-2"
                      >
                        <button onClick={resetForm} className="px-5 py-2.5 bg-navy-800 text-white rounded-xl text-sm font-semibold hover:bg-navy-700 transition-colors">
                          Apply Again
                        </button>
                        <button onClick={() => { setShowForm(false); resetForm() }} className="px-5 py-2.5 border border-gray-200 text-navy-800/60 rounded-xl text-sm font-semibold hover:border-gray-300 transition-colors">
                          Close
                        </button>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className="text-xl font-serif font-bold text-navy-800">Job Application</h3>
                          <p className="text-navy-800/40 text-sm">Fort City School, Vizianagaram</p>
                        </div>
                        <button onClick={() => setShowForm(false)}
                          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-navy-800/40 hover:bg-gray-200 transition-colors text-xl leading-none">
                          ×
                        </button>
                      </div>

                      <p className="text-navy-800/60 text-sm leading-relaxed mb-6">Fill in our Google Form to apply. Your application is saved instantly and our team will review it shortly.</p>

                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {[
                          { icon: '👤', label: 'Full Name' },
                          { icon: '📧', label: 'Email' },
                          { icon: '📱', label: 'Mobile No' },
                          { icon: '🎓', label: 'Qualification' },
                          { icon: '💼', label: 'Field Applying For' },
                          { icon: '⏳', label: 'Work Experience' },
                          { icon: '✍️', label: 'Why Hire You' },
                        ].map((f) => (
                          <div key={f.label} className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2.5 border border-gray-100">
                            <span className="text-base">{f.icon}</span>
                            <span className="text-xs font-semibold text-navy-800/70">{f.label}</span>
                          </div>
                        ))}
                      </div>

                      <a
                        href="https://forms.gle/iLizyYvhqfMUNPyf7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-3.5 bg-navy-800 text-white rounded-xl font-bold text-sm hover:bg-gold-500 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
                      >
                        📋 Open Application Form →
                      </a>
                      <p className="text-center text-xs text-navy-800/30 mt-3">Opens in a new tab · Powered by Google Forms</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
