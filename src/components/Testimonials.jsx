import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const REVIEWS = [
  {
    name: 'Srinivasa Rao P.',
    role: 'Parent · Class X',
    initials: 'SR',
    stars: 5,
    text: "Fort City has completely transformed my daughter's approach to learning. The CBSE curriculum is well-structured and teachers are incredibly dedicated. Best decision we made.",
  },
  {
    name: 'Padmavathi K.',
    role: 'Parent · Class VII',
    initials: 'PK',
    stars: 5,
    text: "My son has been here since Class 1 and his overall development — academic and personal — has been exceptional. The school truly nurtures each child individually.",
  },
  {
    name: 'Ramakrishna M.',
    role: 'Parent · Class XII',
    initials: 'RM',
    stars: 5,
    text: "The facilities here are outstanding. Smart classrooms, science labs, and sports infrastructure are better than most schools in Andhra Pradesh. My son is ready for anything.",
  },
  {
    name: 'Lakshmi Devi B.',
    role: 'Parent · Class IV',
    initials: 'LB',
    stars: 5,
    text: "Teachers are very attentive and caring. My daughter participates in every cultural event confidently now. Fort City truly builds character — not just marks.",
  },
  {
    name: 'Venkata Subrahmanyam N.',
    role: 'Parent · Class IX',
    initials: 'VN',
    stars: 5,
    text: "The admission process was smooth and transparent. Principal and staff are always approachable. Highly recommend Fort City to every parent in Vizianagaram.",
  },
  {
    name: 'Annapurna T.',
    role: 'Alumni · Class XII, 2023',
    initials: 'AT',
    stars: 5,
    text: "As an alumna, I can say Fort City gave me the confidence and knowledge to crack JEE Mains. The faculty's support was unwavering right till the last exam.",
  },
]

function StarRow({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < count ? 'fill-[#F59E0B] text-[#F59E0B]' : 'fill-gray-200 text-gray-200'}`} />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-tag">What Parents Say</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mt-3 mb-4 tracking-tight">
            Trusted by <span className="text-[#1E3A8A]">Families</span> Across Vizianagaram
          </h2>

          {/* Rating summary */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex -space-x-2">
              {REVIEWS.slice(0, 5).map((r, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-[#1E3A8A]/10 border-2 border-white flex items-center justify-center flex-shrink-0 shadow">
                  <span className="text-[#1E3A8A] text-[10px] font-black">{r.initials}</span>
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />)}
                </div>
                <span className="font-bold text-[#1E293B]">4.9 / 5.0</span>
              </div>
              <p className="text-[#475569] text-sm">from <strong className="text-[#1E293B]">500+</strong> verified parent reviews</p>
            </div>
          </div>
        </motion.div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              className="bg-white rounded-2xl p-6 border border-[#E2E8F0] hover:border-[#BFDBFE] hover:shadow-xl transition-all duration-300 flex flex-col gap-4"
            >
              <StarRow count={review.stars} />
              <p className="text-[#475569] text-sm leading-relaxed flex-1">"{review.text}"</p>
              <div className="flex items-center gap-3 pt-3 border-t border-[#E2E8F0]">
                <div className="w-10 h-10 rounded-full bg-[#1E3A8A]/10 border border-[#1E3A8A]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#1E3A8A] text-xs font-black">{review.initials}</span>
                </div>
                <div>
                  <p className="text-[#1E293B] font-bold text-sm leading-tight">{review.name}</p>
                  <p className="text-[#64748B] text-xs">{review.role}</p>
                </div>
                <div className="ml-auto flex items-center gap-1 bg-green-50 text-green-600 text-[10px] font-bold px-2 py-1 rounded-full border border-green-100">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Verified
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#admissions"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white shadow-xl bg-[#1E3A8A] hover:bg-[#F59E0B] transition-colors duration-200"
          >
            Join Our School Family
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
