import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const generalInfo = [
  { sl: '01', info: 'Name of the School', details: 'FORT CITY SCHOOL', icon: '🏫' },
  { sl: '02', info: 'Affiliation No.', details: '130394', icon: '📋' },
  { sl: '03', info: 'School Code', details: '57143', icon: '🔢' },
  { sl: '04', info: 'Complete Address', details: 'Fort City School, Ring Road, Near Varun Motors, Opp. Komati Cheruvu, Jammu Narayanapuram, Vizianagaram – 535002', icon: '📍' },
  { sl: '05', info: 'Principal Name', details: 'Dr. (Mrs.) Roiana Khan', icon: '👩‍💼' },
  { sl: '06', info: 'Principal Qualification', details: 'Ph.D, MA (Eng.), MA (Sociology), B.Ed', icon: '🎓' },
  { sl: '07', info: 'School Email', details: 'fortcityschool@gmail.com', details2: 'principal.fortcity@gmail.com', icon: '📧' },
  { sl: '08', info: 'Contact Details', details: '8008363616', icon: '📞' },
]

const documents = [
  { sl: '01', doc: 'Copies of Affiliation / Upgradation Letter and recent extension of affiliation, if any', link: 'http://www.fortcityschool.com/20-09-23/B01.pdf', color: 'from-blue-500 to-indigo-600' },
  { sl: '02', doc: 'Copies of Societies / Trust / Company Registration / Renewal Certificate, as applicable', link: 'http://www.fortcityschool.com/PDF/04.pdf', color: 'from-violet-500 to-purple-600' },
  { sl: '03', doc: 'Copy of No Objection Certificate (NOC) issued, if applicable, by the State Govt. / UT', link: 'http://www.fortcityschool.com/PDF/05.pdf', color: 'from-emerald-500 to-teal-600' },
  { sl: '04', doc: 'Copies of Recognition Certificate under RTE Act, 2009, and its renewal, if applicable', link: 'http://www.fortcityschool.com/PDF/07.pdf', color: 'from-orange-500 to-amber-600' },
  { sl: '05', doc: 'Copy of Valid Building Safety Certificate as per the National Building Code', link: 'http://www.fortcityschool.com/PDF/09.pdf', color: 'from-rose-500 to-pink-600' },
  { sl: '06', doc: 'Copy of Valid Fire Safety Certificate issued by the Competent Authority', link: 'http://www.fortcityschool.com/2025/b06.pdf', color: 'from-red-500 to-rose-600' },
  { sl: '07', doc: 'Copy of the DEO Certificate submitted by the school for Affiliation / Upgradation / Extension of Affiliation or Self Certification by School', link: 'http://www.fortcityschool.com/PDF/20.pdf', color: 'from-cyan-500 to-blue-600' },
  { sl: '08', doc: 'Copies of Valid Water, Health and Sanitation Certificates', link: 'http://www.fortcityschool.com/PDF/15.pdf', color: 'from-lime-500 to-green-600' },
]

const academics = [
  { sl: '01', doc: 'Fee Structure of the School', link: 'http://www.fortcityschool.com/2025/c01.pdf', icon: '💰', color: 'from-blue-500 to-indigo-600' },
  { sl: '02', doc: 'Annual Academic Calendar', link: 'http://www.fortcityschool.com/2025/c02.pdf', icon: '📅', color: 'from-violet-500 to-purple-600' },
  { sl: '03', doc: 'List of School Management Committee (SMC)', link: 'http://www.fortcityschool.com/2024/c03.pdf', icon: '👥', color: 'from-emerald-500 to-teal-600' },
  { sl: '04', doc: 'List of Parents Teachers Association (PTA) Members', link: 'http://www.fortcityschool.com/2025/c04.pdf', icon: '🤝', color: 'from-orange-500 to-amber-600' },
  { sl: '05', doc: 'Last Three-Year Result of the Board Examination as per Applicability', link: 'http://www.fortcityschool.com/2025/c05.pdf', icon: '📊', color: 'from-rose-500 to-pink-600' },
]

const staff = [
  { sl: '01', info: 'Principal', details: 'Dr. (Mrs.) Roiana Khan', highlight: true },
  { sl: '02', info: 'Total No. of Teachers', details: '52', highlight: false },
  { sl: '', info: 'PGT (Post Graduate Teachers)', details: '4', sub: true },
  { sl: '', info: 'TGT (Trained Graduate Teachers)', details: '26', sub: true },
  { sl: '', info: 'PRT (Primary Teachers)', details: '19', sub: true },
  { sl: '', info: 'PET (Physical Education Teachers)', details: '3', sub: true },
  { sl: '03', info: 'Teachers / Section Ratio', details: '1 : 1.5', highlight: false },
  { sl: '04', info: 'Details of Special Educator', details: '1', highlight: false },
  { sl: '05', info: 'Details of Counsellor and Wellness Teacher', details: '1', highlight: false },
]

const resultClassX = [
  { sl: '01', year: '2022–2023', registered: '86', passed: '86', percentage: '100%' },
  { sl: '02', year: '2023–2024', registered: '66', passed: '66', percentage: '100%' },
  { sl: '03', year: '2024–2025', registered: '74', passed: '74', percentage: '100%' },
]

const infrastructure = [
  { sl: '01', info: 'Total Campus Area (in sq. mtr)', details: '9,348.23', icon: '🏗️' },
  { sl: '02', info: 'No. and Size of Class Rooms (in sq. mtr)', details: '38 rooms · 51 sq.mtr each', icon: '🏛️' },
  { sl: '03', info: 'No. and Size of Laboratories incl. Computer Labs (in sq. mtr)', details: '6 labs · 79 sq.mtr each', icon: '🔬' },
  { sl: '04', info: 'Internet Facility', details: 'YES', icon: '🌐', highlight: true },
  { sl: '05', info: 'No. of Girls Toilets', details: '30', icon: '🚻' },
  { sl: '06', info: 'No. of Boys Toilets', details: '30', icon: '🚹' },
  { sl: '07', info: 'Infrastructure Inspection (YouTube)', details: null, link: 'https://youtu.be/X4JK8MCAA0A', icon: '▶️' },
  { sl: '08', info: 'Laboratories Tour (YouTube)', details: null, link: 'https://www.youtube.com/watch?v=DZ3T9fqoe10', icon: '▶️' },
]

const sections = [
  { id: 'general', label: 'A : General Info', icon: '🏫', color: 'from-blue-500 to-indigo-600', light: 'bg-blue-50 border-blue-200 text-blue-700' },
  { id: 'documents', label: 'B : Documents', icon: '📄', color: 'from-violet-500 to-purple-600', light: 'bg-violet-50 border-violet-200 text-violet-700' },
  { id: 'academics', label: 'C : Academics', icon: '📚', color: 'from-emerald-500 to-teal-600', light: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
  { id: 'staff', label: 'D : Staff', icon: '👩‍🏫', color: 'from-orange-500 to-amber-500', light: 'bg-orange-50 border-orange-200 text-orange-700' },
  { id: 'infrastructure', label: 'E : Infrastructure', icon: '🏗️', color: 'from-rose-500 to-pink-600', light: 'bg-rose-50 border-rose-200 text-rose-700' },
]

export default function MandatoryDisclosure() {
  const [active, setActive] = useState('general')
  const activeSection = sections.find(s => s.id === active)

  return (
    <section id="mandatory-disclosure" className="py-24 bg-gradient-to-b from-[#F0F4FF] to-[#F8F8F5]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1E3A8A]/10 border border-[#1E3A8A]/20 rounded-full text-[#1E3A8A] text-xs font-bold tracking-widest uppercase mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A] animate-pulse" />
            CBSE Compliance
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1E293B] mb-4">
            Mandatory Public <span className="text-[#F59E0B]">Disclosure</span>
          </h2>
          <p className="text-[#64748B] max-w-xl mx-auto text-sm leading-relaxed">
            As per CBSE guidelines, the following information is disclosed for public access and transparency.
          </p>
        </motion.div>

        {/* Tab nav */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-8"
        >
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all duration-200 border ${
                active === s.id
                  ? `bg-gradient-to-r ${s.color} text-white shadow-lg scale-105 border-transparent`
                  : 'bg-white border-gray-200 text-[#64748B] hover:border-gray-300 hover:shadow-md'
              }`}
            >
              <span>{s.icon}</span>
              <span className="hidden sm:inline">{s.label}</span>
              <span className="sm:hidden">{s.label.split(':')[0].trim()}</span>
            </button>
          ))}
        </motion.div>

        {/* Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden"
          >
            {/* Section title bar */}
            <div className={`bg-gradient-to-r ${activeSection.color} px-6 md:px-8 py-5 flex items-center gap-3`}>
              <span className="text-2xl">{activeSection.icon}</span>
              <div>
                <h3 className="text-white font-bold text-lg leading-tight">{activeSection.label.split(':')[1]?.trim()}</h3>
                <p className="text-white/70 text-xs">Fort City School — CBSE Affiliation No. 130394</p>
              </div>
            </div>

            <div className="p-6 md:p-8">

              {/* ── A: General Info ── */}
              {active === 'general' && (
                <div className="grid sm:grid-cols-2 gap-4">
                  {generalInfo.map((row, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex gap-4 bg-[#F8FAFC] rounded-2xl p-4 border border-[#E2E8F0] hover:border-[#BFDBFE] hover:shadow-md transition-all duration-200"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] flex items-center justify-center text-lg shrink-0 shadow">
                        {row.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-black text-[#94A3B8] uppercase tracking-widest mb-1">{row.sl}. {row.info}</p>
                        {row.details2 ? (
                          <div className="flex flex-col gap-1">
                            <a href={`mailto:${row.details}`} className="text-sm font-semibold text-[#1E3A8A] hover:text-[#F59E0B] transition-colors truncate">{row.details}</a>
                            <a href={`mailto:${row.details2}`} className="text-sm font-semibold text-[#1E3A8A] hover:text-[#F59E0B] transition-colors truncate">{row.details2}</a>
                          </div>
                        ) : /^\d{10}$/.test((row.details || '').replace(/\s/g, '')) ? (
                          <a href={`tel:+91${row.details.replace(/\s/g, '')}`} className="text-sm font-semibold text-[#1E3A8A] hover:text-[#F59E0B] transition-colors">+91 {row.details}</a>
                        ) : (
                          <p className="text-sm font-semibold text-[#1E293B] leading-snug">{row.details}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* ── B: Documents ── */}
              {active === 'documents' && (
                <>
                  <div className="grid sm:grid-cols-2 gap-4 mb-5">
                    {documents.map((row, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-4 bg-[#F8FAFC] rounded-2xl p-4 border border-[#E2E8F0] hover:shadow-md transition-all duration-200"
                      >
                        <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${row.color} flex items-center justify-center text-white font-black text-xs shrink-0 shadow`}>
                          {row.sl}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-[#475569] leading-relaxed mb-2">{row.doc}</p>
                          <a
                            href={row.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r ${row.color} text-white text-xs font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200`}
                          >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            View Document
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 flex gap-3">
                    <span className="text-lg shrink-0">⚠️</span>
                    <p className="text-xs text-amber-800 leading-relaxed font-medium">
                      NOTE: The school needs to upload the self attested copies of above listed documents by the Chairman / Manager / Secretary and Principal. In case it is noticed at later stage that uploaded documents are not genuine then school shall be liable for action as per norms.
                    </p>
                  </div>
                </>
              )}

              {/* ── C: Academics ── */}
              {active === 'academics' && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {academics.map((row, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.07 }}
                      className="relative rounded-2xl border border-[#E2E8F0] overflow-hidden hover:shadow-xl transition-all duration-300 group"
                    >
                      <div className={`h-1.5 w-full bg-gradient-to-r ${row.color}`} />
                      <div className="p-5">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${row.color} flex items-center justify-center text-2xl shadow-md mb-4`}>
                          {row.icon}
                        </div>
                        <p className="text-[10px] font-black text-[#94A3B8] uppercase tracking-widest mb-1">Document {row.sl}</p>
                        <p className="text-sm font-semibold text-[#1E293B] leading-snug mb-4">{row.doc}</p>
                        <a
                          href={row.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r ${row.color} text-white text-xs font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200`}
                        >
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          View PDF
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* ── D: Staff ── */}
              {active === 'staff' && (
                <>
                  {/* Staff summary cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                    {[
                      { label: 'Total Teachers', value: '52', color: 'from-blue-500 to-indigo-600', icon: '👩‍🏫' },
                      { label: 'PGT', value: '4', color: 'from-violet-500 to-purple-600', icon: '🎓' },
                      { label: 'TGT', value: '26', color: 'from-emerald-500 to-teal-600', icon: '📖' },
                      { label: 'PRT', value: '19', color: 'from-orange-500 to-amber-500', icon: '✏️' },
                    ].map((card, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.08 }}
                        className={`bg-gradient-to-br ${card.color} rounded-2xl p-4 text-white text-center shadow-lg`}
                      >
                        <div className="text-2xl mb-1">{card.icon}</div>
                        <div className="text-2xl font-black">{card.value}</div>
                        <div className="text-xs font-semibold opacity-80 mt-0.5">{card.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Staff table */}
                  <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-8">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white">
                          <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider rounded-tl-2xl w-14">Sl.</th>
                          <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">Information</th>
                          <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider rounded-tr-2xl">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        {staff.map((row, i) => (
                          <tr key={i} className={`transition-colors duration-150 ${
                            row.highlight ? 'bg-amber-50 hover:bg-amber-100' : row.sub ? 'bg-blue-50/40 hover:bg-blue-50' : i % 2 === 0 ? 'bg-white hover:bg-gray-50' : 'bg-[#F8FAFC] hover:bg-gray-50'
                          }`}>
                            <td className="px-4 py-3 text-[#94A3B8] text-xs font-bold border-b border-gray-100">{row.sl}</td>
                            <td className={`px-4 py-3 border-b border-gray-100 ${row.sub ? 'pl-8 text-[#64748B] text-xs' : 'text-[#1E293B] font-medium text-sm'}`}>
                              {row.sub && <span className="text-[#CBD5E1] mr-2">└</span>}
                              {row.info}
                            </td>
                            <td className={`px-4 py-3 border-b border-gray-100 font-bold ${row.highlight ? 'text-[#1E3A8A]' : row.sub ? 'text-[#1E3A8A] text-sm' : 'text-[#1E293B]'}`}>
                              {row.details}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Result Class X */}
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-lg shadow">🏆</div>
                      <div>
                        <h4 className="font-extrabold text-[#1E293B] text-base">Class X Board Results</h4>
                        <p className="text-emerald-600 text-xs font-bold">100% Pass Rate — 3 Years Consecutive</p>
                      </div>
                    </div>
                    <div className="overflow-x-auto rounded-xl border border-emerald-200">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
                            {['Sl.', 'Academic Year', 'Registered', 'Passed', 'Pass %'].map((h, i) => (
                              <th key={h} className={`px-4 py-3 text-left text-xs font-bold uppercase tracking-wider ${i === 0 ? 'rounded-tl-xl' : ''} ${i === 4 ? 'rounded-tr-xl' : ''}`}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {resultClassX.map((row, i) => (
                            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-emerald-50/50'}>
                              <td className="px-4 py-3 text-[#94A3B8] text-xs font-bold border-b border-emerald-100">{row.sl}</td>
                              <td className="px-4 py-3 text-[#1E293B] font-semibold border-b border-emerald-100">{row.year}</td>
                              <td className="px-4 py-3 text-[#475569] border-b border-emerald-100">{row.registered}</td>
                              <td className="px-4 py-3 text-[#475569] border-b border-emerald-100">{row.passed}</td>
                              <td className="px-4 py-3 border-b border-emerald-100">
                                <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-500 text-white text-xs font-black rounded-full">
                                  ✓ {row.percentage}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              )}

              {/* ── E: Infrastructure ── */}
              {active === 'infrastructure' && (
                <div className="grid sm:grid-cols-2 gap-4">
                  {infrastructure.map((row, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className="flex gap-4 bg-[#F8FAFC] rounded-2xl p-4 border border-[#E2E8F0] hover:border-rose-200 hover:shadow-md transition-all duration-200"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center text-lg shrink-0 shadow">
                        {row.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-black text-[#94A3B8] uppercase tracking-widest mb-1">{row.sl}. {row.info}</p>
                        {row.link ? (
                          <a
                            href={row.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-rose-500 to-pink-600 text-white text-xs font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 mt-1"
                          >
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.896 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.104 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"/></svg>
                            Watch Video
                          </a>
                        ) : row.highlight ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-500 text-white text-xs font-black rounded-full mt-1">✓ {row.details}</span>
                        ) : (
                          <p className="text-sm font-bold text-[#1E293B]">{row.details}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
