import { useState } from 'react'
import { motion } from 'framer-motion'

export default function TCIssues() {
  const [formData, setFormData] = useState({ grade: '', admissionNo: '' })
  const [searched, setSearched] = useState(false)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSearch = (e) => {
    e.preventDefault()
    setSearched(true)
  }

  const reset = () => {
    setSearched(false)
    setFormData({ grade: '', admissionNo: '' })
  }

  return (
    <section id="tc-issues" className="py-24 bg-[#F8F8F5]">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-tag">TC Issues</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-800 mb-4">
            Transfer <span className="text-gold-500">Certificate</span>
          </h2>
          <p className="text-navy-800/50 max-w-lg mx-auto">
            Search and download your Transfer Certificate by entering your class and admission number.
          </p>
        </motion.div>

        {/* Search card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden"
        >
          {/* top bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-navy-800 via-gold-500 to-navy-800" />

          <div className="p-8 md:p-10">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 rounded-xl bg-navy-800 flex items-center justify-center">
                <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif font-bold text-navy-800 text-lg">Search TC Record</h3>
                <p className="text-navy-800/40 text-xs">Fort City School, Vizianagaram</p>
              </div>
            </div>

            {searched ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-8 gap-4"
              >
                <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center text-2xl">📄</div>
                <h4 className="font-serif font-bold text-navy-800 text-lg">Record Not Found</h4>
                <p className="text-navy-800/55 text-sm max-w-sm leading-relaxed">
                  No TC record found for Class <strong>{formData.grade}</strong> with Admission No.{' '}
                  <strong>{formData.admissionNo}</strong>. Please verify the details or contact the school office.
                </p>
                <div className="flex gap-3 mt-2">
                  <button
                    onClick={reset}
                    className="px-6 py-2.5 bg-navy-800 text-white rounded-xl text-sm font-semibold hover:bg-navy-700 transition-colors"
                  >
                    Search Again
                  </button>
                  <a
                    href="#contact"
                    className="px-6 py-2.5 border border-gray-200 text-navy-800/60 rounded-xl text-sm font-semibold hover:border-gray-300 transition-colors"
                  >
                    Contact Us
                  </a>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 items-end">
                <div className="flex-1">
                  <label className="block text-xs font-semibold text-navy-800/50 uppercase tracking-wider mb-1.5">
                    Class
                  </label>
                  <select
                    name="grade"
                    required
                    value={formData.grade}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none text-sm text-navy-800 bg-white transition-all"
                  >
                    <option value="">Select Class</option>
                    <option>Nursery</option>
                    <option>LKG</option>
                    <option>UKG</option>
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i + 1}>Class {i + 1}</option>
                    ))}
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-xs font-semibold text-navy-800/50 uppercase tracking-wider mb-1.5">
                    Admission No.
                  </label>
                  <input
                    type="text"
                    name="admissionNo"
                    required
                    value={formData.admissionNo}
                    onChange={handleChange}
                    placeholder="Enter admission number"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none text-sm text-navy-800 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="px-8 py-3 bg-navy-800 text-white rounded-xl font-bold text-sm hover:bg-navy-700 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 shrink-0"
                >
                  Search
                </button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-navy-800/35 text-xs mt-6 leading-relaxed"
        >
          For TC related queries, contact the school office at{' '}
          <a href="tel:+918922296464" className="inline-flex items-center gap-1 hover:text-blue-600 transition-colors duration-150">
            +91 (8922) 296464
            <svg className="w-3 h-3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>{' '}or email{' '}
          <a href="mailto:fortcityschool@gmail.com" className="inline-flex items-center gap-1 hover:text-blue-600 transition-colors duration-150">
            fortcityschool@gmail.com
            <svg className="w-3 h-3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
        </motion.p>

      </div>
    </section>
  )
}
