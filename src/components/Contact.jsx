import { useState } from 'react'
import { motion } from 'framer-motion'

const infoCards = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Postal Address',
    lines: ['100ft Ring Road, Near Varun Motors,', 'Opp. Komati Cheruvu,', 'Ammavari Yavapuram Village,', 'Vizianagaram Mandal – 535002'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Contact Us',
    lines: ['+91 (8922) 296464, 296454', '+91 8008363616'],
    sublabel: 'Call Us',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email Us',
    lines: ['fortcityschool@gmail.com', 'principal.fortcity@gmail.com'],
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ access_key: 'ab8510b1-90b8-4ef0-a8b1-3569785c825f', ...formData }),
    })
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-white">

      <div className="py-20 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="section-tag">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mt-4 tracking-tight">
              Contact <span className="text-[#1E3A8A]">Us</span>
            </h2>
            <p className="text-[#475569] mt-4 max-w-lg mx-auto text-lg leading-relaxed">
              We'd love to hear from you. Reach out for admissions, queries, or just to say hello.
            </p>
          </motion.div>

          {/* 3 info cards */}
          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {infoCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center bg-[#F8FAFC] rounded-2xl p-7 border border-[#E2E8F0] hover:border-[#BFDBFE] hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1E3A8A] text-[#F59E0B] flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-widest mb-3">{card.label}</p>
                {card.sublabel && <p className="text-xs text-[#F59E0B] font-bold mb-1">{card.sublabel}</p>}
                <div className="flex flex-col items-center gap-2">
                  {card.lines.map((line) => {
                    const isPhone = line.startsWith('+91')
                    const isEmail = line.includes('@')
                    const href = isPhone ? `tel:${line.replace(/[\s()]/g, '')}` : isEmail ? `mailto:${line}` : null
                    return href ? (
                      <a key={line} href={href} className="inline-flex items-center gap-1 text-sm text-[#1E3A8A] font-medium hover:text-[#F59E0B] transition-colors">
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="text-[#475569] text-sm">{line}</p>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#F8FAFC] rounded-3xl border border-[#E2E8F0] p-8 md:p-10"
          >
            <p className="text-[#F59E0B] text-xs font-bold uppercase tracking-[0.15em] mb-6">Send Us a Message</p>

            <p className="text-[#475569] text-sm leading-relaxed mb-6">Send us a message using our Google Form — we'll get back to you shortly.</p>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {[
                { icon: '👤', label: 'Your Name' },
                { icon: '📞', label: 'Phone No' },
                { icon: '📧', label: 'Email Id' },
                { icon: '📌', label: 'Subject' },
                { icon: '💬', label: 'Message' },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-[#E2E8F0]">
                  <span className="text-lg">{f.icon}</span>
                  <span className="text-sm font-semibold text-[#475569]">{f.label}</span>
                </div>
              ))}
            </div>
            <a
              href="https://forms.gle/f5WNNLHmK18CkqVMA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#1E3A8A] text-white rounded-xl font-bold text-sm hover:bg-[#F59E0B] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              ✉️ Open Contact Form →
            </a>
            <p className="text-center text-xs text-[#94A3B8] mt-3">Opens in a new tab · Powered by Google Forms</p>
          </motion.div>
        </div>
      </div>

      {/* Map Header */}
      <div className="bg-[#1E3A8A] px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <p className="text-white font-bold text-sm">Find Us on the Map</p>
            <p className="text-white/60 text-xs mt-0.5">100ft Ring Road, Near Varun Motors, Opp. Komati Cheruvu, Ammavari Yavapuram Village, Vizianagaram – 535002</p>
          </div>
        </div>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Fort+City+School,+100ft+Ring+Road,+Near+Varun+Motors,+Opp+Komati+Cheruvu,+Ammavari+Yavapuram+Village,+Vizianagaram,+Andhra+Pradesh+535002"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 bg-[#F59E0B] text-[#1E293B] rounded-xl text-sm font-bold hover:bg-yellow-400 transition-colors shrink-0"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          Get Directions
        </a>
      </div>

      {/* Google Maps */}
      <div className="w-full h-72 md:h-96">
        <iframe
          title="Fort City School Location"
          src="https://maps.google.com/maps?q=Fort+City+School,+100ft+Ring+Road,+Near+Varun+Motors,+Opp+Komati+Cheruvu,+Ammavari+Yavapuram+Village,+Vizianagaram+Mandal,+Andhra+Pradesh+535002&output=embed&z=17"
          width="100%" height="100%" style={{ border: 0, display: 'block' }}
          allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}
