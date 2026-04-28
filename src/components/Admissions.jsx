import { useState } from 'react'
import { motion } from 'framer-motion'

function getAdmissionYear() {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const startYear = month >= 4 ? year : year - 1
  return `${startYear}–${String(startYear + 1).slice(2)}`
}

const admissionYear = getAdmissionYear()

const steps = [
  { step: '01', title: 'Enquiry', desc: 'Fill the form below or call us to express your interest.' },
  {
    step: '02',
    title: 'Book a Tour',
    desc: 'Meet our staff, explore the school, and see what makes Fort City a great place to learn.',
    hasPhone: true,
  },
  { step: '03', title: 'Assessment', desc: 'Attend the grade-appropriate entrance assessment at our campus.', note: 'In-person written test held at our campus.' },
  { step: '04', title: 'Enroll', desc: 'Complete documentation and confirm admission.' },
]

export default function Admissions() {
  const [formData, setFormData] = useState({ name: '', grade: '', phone: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ access_key: '74515972-dc29-44f9-8c1a-db992db78467', ...formData }),
    })
    setSubmitted(true)
  }

  return (
    <section id="admissions" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-tag">Admissions {admissionYear}</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mt-3 mb-4 tracking-tight">
            Begin Your Child's <span className="text-[#1E3A8A]">Journey</span>
          </h2>
          <p className="text-[#475569] max-w-xl mx-auto text-lg leading-relaxed">
            Admissions are open for Nursery to Class XII. Limited seats available —
            apply early to secure your child's future.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative mb-20">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#F59E0B] z-0" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((s, i) => {
              const colors = [
                { bg: 'from-[#1E3A8A] to-[#2563EB]', light: 'bg-blue-50 border-blue-200', badge: 'bg-[#1E3A8A] text-white', icon: '📋' },
                { bg: 'from-purple-600 to-violet-500', light: 'bg-purple-50 border-purple-200', badge: 'bg-purple-600 text-white', icon: '🏫' },
                { bg: 'from-emerald-600 to-teal-500', light: 'bg-emerald-50 border-emerald-200', badge: 'bg-emerald-600 text-white', icon: '✏️' },
                { bg: 'from-[#F59E0B] to-orange-500', light: 'bg-amber-50 border-amber-200', badge: 'bg-[#F59E0B] text-white', icon: '🎓' },
              ]
              const c = colors[i]
              return (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  onClick={s.step === '01' ? () => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' }) : undefined}
                  className={`relative rounded-2xl border ${c.light} overflow-hidden hover:shadow-xl transition-all duration-300 ${s.step === '01' ? 'cursor-pointer' : ''}`}
                >
                  {/* Top gradient bar */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${c.bg}`} />

                  <div className="p-6">
                    {/* Step number badge */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${c.bg} flex items-center justify-center shadow-md`}>
                        <span className="text-white font-black text-sm">{s.step}</span>
                      </div>
                      <span className="text-2xl">{c.icon}</span>
                    </div>

                    <h4 className="font-extrabold text-[#1E293B] text-base mb-2">{s.title}</h4>
                    <p className="text-[#64748B] text-sm leading-relaxed">{s.desc}</p>

                    {s.note && (
                      <div className="mt-4 flex items-start gap-2 bg-amber-100 rounded-xl px-3 py-2.5">
                        <span className="text-base">⚡</span>
                        <p className="text-xs font-bold text-amber-800">{s.note}</p>
                      </div>
                    )}

                    {s.hasPhone && (
                      <div className="mt-4 space-y-2 bg-white rounded-xl p-3 border border-purple-100">
                        <p className="text-[10px] text-purple-500 font-black uppercase tracking-widest mb-2">Call us to arrange a visit</p>
                        <a href="tel:+918922296464" className="flex items-center gap-2 text-sm font-semibold text-[#1E293B] hover:text-purple-600 transition-colors">
                          <span className="text-base">📞</span>
                          (8922) 296464 / 296454
                        </a>
                        <a href="tel:+918008363616" className="flex items-center gap-2 text-sm font-semibold text-[#1E293B] hover:text-purple-600 transition-colors">
                          <span className="text-base">📱</span>
                          +91 8008363616
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Form + Info */}
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 bg-white rounded-3xl shadow-lg p-5 sm:p-10 border border-[#E2E8F0]"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#1E3A8A]/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#1E3A8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-extrabold text-[#1E293B]">Enquiry Received!</h3>
                <p className="text-[#475569] max-w-sm">
                  Thank you for your interest in Fort City School. Our admissions team will contact you within 24 hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="mt-4 px-6 py-2.5 bg-[#1E3A8A] text-white rounded-xl text-sm font-bold hover:bg-[#F59E0B] transition-colors">
                  Submit Another
                </button>
              </div>
            ) : (
              <>
                <p className="text-[#F59E0B] text-xs font-bold uppercase tracking-[0.15em] mb-2">Get Started</p>
                <h3 id="enquiry-form" className="text-2xl font-extrabold text-[#1E293B] mb-6">Admission Enquiry Form</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#94A3B8] uppercase tracking-wider mb-1.5">Student Name *</label>
                      <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Full name"
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/15 outline-none text-sm text-[#1E293B] transition-all bg-white" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#94A3B8] uppercase tracking-wider mb-1.5">Grade Applying For *</label>
                      <select name="grade" required value={formData.grade} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/15 outline-none text-sm text-[#1E293B] transition-all bg-white">
                        <option value="">Select grade</option>
                        <option>Nursery</option>
                        <option>LKG / UKG</option>
                        {Array.from({ length: 12 }, (_, i) => <option key={i + 1}>Class {i + 1}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#94A3B8] uppercase tracking-wider mb-1.5">Phone Number *</label>
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/15 outline-none text-sm text-[#1E293B] transition-all bg-white" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#94A3B8] uppercase tracking-wider mb-1.5">Email Address</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="parent@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/15 outline-none text-sm text-[#1E293B] transition-all bg-white" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#94A3B8] uppercase tracking-wider mb-1.5">Message (Optional)</label>
                    <textarea name="message" rows={3} value={formData.message} onChange={handleChange} placeholder="Any questions or specific requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/15 outline-none text-sm text-[#1E293B] transition-all resize-none bg-white" />
                  </div>
                  <button type="submit"
                    className="w-full py-3.5 bg-[#1E3A8A] text-white rounded-xl font-bold text-sm hover:bg-[#F59E0B] transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5">
                    Submit Enquiry →
                  </button>
                </form>
              </>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <div className="bg-[#1E3A8A] rounded-2xl p-7 text-white">
              <p className="text-[#F59E0B] text-xs font-bold uppercase tracking-[0.15em] mb-4">Contact Admissions</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#F59E0B] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <div className="text-xs text-white/40 mb-1 font-bold">Phone</div>
                    <a href="tel:+918922296464" className="block text-sm font-semibold hover:text-[#F59E0B] transition-colors">+91 (8922) 296464 / 296454</a>
                    <a href="tel:+918008363616" className="block text-sm font-semibold hover:text-[#F59E0B] transition-colors">+91 8008363616</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#F59E0B] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <div className="text-xs text-white/40 mb-1 font-bold">Email</div>
                    <a href="mailto:fortcityschool@gmail.com" className="block text-sm font-semibold hover:text-[#F59E0B] transition-colors">fortcityschool@gmail.com</a>
                    <a href="mailto:principal.fortcity@gmail.com" className="block text-sm font-semibold text-white/60 hover:text-[#F59E0B] transition-colors">principal.fortcity@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#F59E0B] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <div className="text-xs text-white/40 mb-1 font-bold">Address</div>
                    <div className="text-sm font-medium leading-relaxed text-white/80">
                      100 Ft Ring Road, Near Varun Motors,<br />
                      Opp. Komati Cheruvu,<br />
                      Vizianagaram, AP – 535002
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F0F4FF] border border-[#BFDBFE] rounded-2xl p-7">
              <p className="text-[#1E3A8A] text-xs font-bold uppercase tracking-[0.15em] mb-3">School Timings</p>
              <div className="space-y-2 text-sm text-[#475569]">
                <div className="flex justify-between">
                  <span>Mon – Sat</span>
                  <span className="font-bold text-[#1E293B]">8:30 AM – 4:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Office Hours</span>
                  <span className="font-bold text-[#1E293B]">9:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-[#94A3B8]">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
