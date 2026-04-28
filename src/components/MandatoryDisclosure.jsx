import { useState } from 'react'
import { motion } from 'framer-motion'

function ContactBadge({ href, label }) {
  return (
    <a href={href} className="inline-flex items-center gap-1 w-fit hover:text-blue-600 transition-colors duration-150">
      {label}
      <svg className="w-3 h-3 opacity-30 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
  )
}

const generalInfo = [
  { sl: '01', info: 'Name of the School', details: 'FORT CITY SCHOOL' },
  { sl: '02', info: 'Affiliation No. (if applicable)', details: '130394' },
  { sl: '03', info: 'School Code (if applicable)', details: '57143' },
  { sl: '04', info: 'Complete Address with Pin Code', details: 'Fort City School, Ring Road, Near Varun Motors, Opp. Komati Cheruvu, Jammu Narayanapuram, Vizianagaram – 535002' },
  { sl: '05', info: 'Principal Name', details: 'Dr. (Mrs.) Roiana Khan' },
  { sl: '06', info: 'Principal Qualification', details: 'Ph.D, MA (Eng.), MA (Sociology), B.Ed' },
  { sl: '07', info: 'School Email Id', details: 'fortcityschool@gmail.com', details2: 'principal.fortcity@gmail.com' },
  { sl: '08', info: 'Contact Details (Landline / Mobile)', details: '8008363616' },
]

const documents = [
  { sl: '01', doc: 'Copies of Affiliation/Upgradation Letter and recent extension of affiliation, if any', link: 'http://www.fortcityschool.com/20-09-23/B01.pdf' },
  { sl: '02', doc: 'Copies of Societies/Trust/Company Registration/Renewal Certificate, as applicable', link: 'http://www.fortcityschool.com/PDF/04.pdf' },
  { sl: '03', doc: 'Copy of No Objection Certificate (NOC) issued, if applicable, by the State Govt./UT', link: 'http://www.fortcityschool.com/PDF/05.pdf' },
  { sl: '04', doc: 'Copies of Recognition Certificate under RTE Act, 2009, and its renewal, if applicable', link: 'http://www.fortcityschool.com/PDF/07.pdf' },
  { sl: '05', doc: 'Copy of Valid Building Safety Certificate as per the National Building Code', link: 'http://www.fortcityschool.com/PDF/09.pdf' },
  { sl: '06', doc: 'Copy of Valid Fire Safety Certificate issued by the Competent Authority', link: 'http://www.fortcityschool.com/2025/b06.pdf' },
  { sl: '07', doc: 'Copy of the DEO Certificate submitted by the school for Affiliation/Upgradation/Extension of Affiliation or Self Certification by School', link: 'http://www.fortcityschool.com/PDF/20.pdf' },
  { sl: '08', doc: 'Copies of Valid Water, Health and Sanitation Certificates', link: 'http://www.fortcityschool.com/PDF/15.pdf' },
]

const academics = [
  { sl: '01', doc: 'Fee Structure of the School', link: 'http://www.fortcityschool.com/2025/c01.pdf' },
  { sl: '02', doc: 'Annual Academic Calendar', link: 'http://www.fortcityschool.com/2025/c02.pdf' },
  { sl: '03', doc: 'List of School Management Committee (SMC)', link: 'http://www.fortcityschool.com/2024/c03.pdf' },
  { sl: '04', doc: 'List of Parents Teachers Association (PTA) Members', link: 'http://www.fortcityschool.com/2025/c04.pdf' },
  { sl: '05', doc: 'Last Three-Year Result of the Board Examination as per Applicability', link: 'http://www.fortcityschool.com/2025/c05.pdf' },
]

const staff = [
  { sl: '01', info: 'Principal', details: 'Dr. (Mrs.) Roiana Khan' },
  { sl: '02', info: 'Total No. of Teachers', details: '52' },
  { sl: '', info: 'PGT (Post Graduate Teachers)', details: '4' },
  { sl: '', info: 'TGT (Trained Graduate Teachers)', details: '26' },
  { sl: '', info: 'PRT (Primary Teachers)', details: '19' },
  { sl: '', info: 'PET (Physical Education Teachers)', details: '3' },
  { sl: '03', info: 'Teachers / Section Ratio', details: '1 : 1.5' },
  { sl: '04', info: 'Details of Special Educator', details: '1' },
  { sl: '05', info: 'Details of Counsellor and Wellness Teacher', details: '1' },
]

const resultClassX = [
  { sl: '01', year: '2022–2023', registered: '86', passed: '86', percentage: '100%' },
  { sl: '02', year: '2023–2024', registered: '66', passed: '66', percentage: '100%' },
  { sl: '03', year: '2024–2025', registered: '74', passed: '74', percentage: '100%' },
]

const infrastructure = [
  { sl: '01', info: 'Total Campus Area of the School (in sq. mtr)', details: '9348.23' },
  { sl: '02', info: 'No. and Size of the Class Rooms (in sq. mtr)', details: '38 & 51' },
  { sl: '03', info: 'No. and Size of Laboratories incl. Computer Labs (in sq. mtr)', details: '6 & 79' },
  { sl: '04', info: 'Internet Facility', details: 'YES' },
  { sl: '05', info: 'No. of Girls Toilets', details: '30' },
  { sl: '06', info: 'No. of Boys Toilets', details: '30' },
  { sl: '07', info: 'Link of YouTube Video — Infrastructure Inspection', details: 'youtube', link: 'https://youtu.be/X4JK8MCAA0A' },
  { sl: '08', info: 'Laboratories', details: 'youtube', link: 'https://www.youtube.com/watch?v=DZ3T9fqoe10' },
]

function SectionHeader({ label }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-1 h-6 bg-gold-500 rounded-full" />
      <h3 className="font-serif font-bold text-navy-800 text-lg md:text-xl">{label}</h3>
    </div>
  )
}

function Table({ headers, rows }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-navy-800 text-white">
            {headers.map((h) => (
              <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider first:rounded-tl-2xl last:rounded-tr-2xl">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            const isPrincipal = Object.values(row).some(v => String(v).toLowerCase().includes('principal'))
            const { sl, info, details, details2 } = row
            return (
              <tr
                key={i}
                className={`transition-colors duration-200 ${
                  isPrincipal
                    ? 'bg-amber-50 hover:bg-amber-100 cursor-default'
                    : i % 2 === 0
                    ? 'bg-white hover:bg-gray-50'
                    : 'bg-[#F8F8F5] hover:bg-gray-100'
                }`}
              >
                <td className={`px-4 py-3 border-b border-gray-100 ${isPrincipal ? 'text-navy-800 font-medium' : 'text-navy-800/70'}`}>{sl}</td>
                <td className={`px-4 py-3 border-b border-gray-100 ${isPrincipal ? 'text-navy-800 font-medium' : 'text-navy-800/70'}`}>{info}</td>
                <td className={`px-4 py-3 border-b border-gray-100 ${isPrincipal ? 'text-navy-800 font-medium' : 'text-navy-800/70'}`}>
                  {details2 ? (
                    <div className="flex flex-col gap-1.5">
                      <ContactBadge href={`mailto:${details}`} label={details} />
                      <span className="text-xs text-navy-800/40 font-medium">Principal:</span>
                      <ContactBadge href={`mailto:${details2}`} label={details2} />
                    </div>
                  ) : /^\d{10}$/.test(details.replace(/\s/g, '')) ? (
                    <ContactBadge href={`tel:+91${details.replace(/\s/g, '')}`} label={`+91 ${details}`} />
                  ) : details}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

function DocTable({ rows }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-navy-800 text-white">
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider w-12 rounded-tl-2xl">Sl.No.</th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">Documents / Information</th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider w-44 rounded-tr-2xl">Links of Uploaded Documents on Your School's Website</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F8F5]'}>
              <td className="px-4 py-3 text-navy-800/50 border-b border-gray-100">{row.sl}</td>
              <td className="px-4 py-3 text-navy-800/70 border-b border-gray-100">{row.doc}</td>
              <td className="px-4 py-3 border-b border-gray-100">
                <a href={row.link} target="_blank" rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:text-blue-800 hover:underline font-medium">
                  Click Here
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const sections = [
  { id: 'general', label: 'A : General Information' },
  { id: 'documents', label: 'B : Documents & Information' },
  { id: 'academics', label: 'C : Result & Academics' },
  { id: 'staff', label: 'D : Staff (Teaching)' },
  { id: 'infrastructure', label: 'E : School Infrastructure' },
]

export default function MandatoryDisclosure() {
  const [active, setActive] = useState('general')

  return (
    <section id="mandatory-disclosure" className="py-24 bg-[#F8F8F5]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-tag">CBSE Compliance</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-800 mb-4">
            Mandatory Public <span className="text-gold-500">Disclosure</span>
          </h2>
          <p className="text-navy-800/50 max-w-xl mx-auto text-sm">
            As per CBSE guidelines, the following information is disclosed for public access.
          </p>
        </motion.div>

        {/* Tab nav */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 justify-center mb-8"
        >
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 min-h-[40px] ${
                active === s.id
                  ? 'bg-navy-800 text-white shadow-md'
                  : 'bg-white border border-gray-200 text-navy-800/60 hover:border-navy-800/30 hover:text-navy-800'
              }`}
            >
              {s.label}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8"
        >

          {active === 'general' && (
            <>
              <SectionHeader label="A : General Information" />
              <Table
                headers={['Sl.No.', 'Information', 'Details']}
                rows={generalInfo}
              />
            </>
          )}

          {active === 'documents' && (
            <>
              <SectionHeader label="B : Documents and Information" />
              <DocTable rows={documents} />
              <p className="text-xs text-navy-800/35 mt-4 leading-relaxed">
                NOTE: The school needs to upload the self attested copies of above listed documents by the Chairman/Manager/Secretary and Principal. In case it is noticed at later stage that uploaded documents are not genuine then school shall be liable for action as per norms.
              </p>
            </>
          )}

          {active === 'academics' && (
            <>
              <SectionHeader label="C : Result and Academics" />
              <DocTable rows={academics} />
            </>
          )}

          {active === 'staff' && (
            <>
              <SectionHeader label="D : Staff (Teaching)" />
              <Table
                headers={['Sl.No.', 'Information', 'Details']}
                rows={staff}
              />

              <div className="mt-8">
                <SectionHeader label="Result — Class X" />
                <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-navy-800 text-white">
                        {['Sl.No.', 'Year', 'No. of Registered Students', 'No. of Students Passed', 'Pass Percentage'].map((h) => (
                          <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider first:rounded-tl-2xl last:rounded-tr-2xl">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {resultClassX.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white hover:bg-gray-50' : 'bg-[#F8F8F5] hover:bg-gray-100'}>
                          <td className="px-4 py-3 text-navy-800/70 border-b border-gray-100">{row.sl}</td>
                          <td className="px-4 py-3 text-navy-800/70 border-b border-gray-100">{row.year}</td>
                          <td className="px-4 py-3 text-navy-800/70 border-b border-gray-100">{row.registered}</td>
                          <td className="px-4 py-3 text-navy-800/70 border-b border-gray-100">{row.passed}</td>
                          <td className="px-4 py-3 text-navy-800/70 border-b border-gray-100 font-semibold text-emerald-600">{row.percentage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {active === 'infrastructure' && (
            <>
              <SectionHeader label="E : School Infrastructure" />
              <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-navy-800 text-white">
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider w-12 rounded-tl-2xl">Sl.No.</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">Information</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider rounded-tr-2xl">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {infrastructure.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F8F5]'}>
                        <td className="px-4 py-3 text-navy-800/50 border-b border-gray-100">{row.sl}</td>
                        <td className="px-4 py-3 text-navy-800/70 border-b border-gray-100">{row.info}</td>
                        <td className="px-4 py-3 border-b border-gray-100">
                          {row.link ? (
                            <a href={row.link} target="_blank" rel="noopener noreferrer"
                              className="text-xs text-blue-600 hover:text-blue-800 hover:underline font-medium">
                              Click Here
                            </a>
                          ) : (
                            <span className="text-navy-800/70">{row.details}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

        </motion.div>

      </div>
    </section>
  )
}
