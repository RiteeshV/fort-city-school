import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navGroups = [
  {
    label: 'About Us', href: '#about',
    children: [
      { label: 'About Fort City', href: '#about', icon: '🏫' },
      { label: 'Our Leadership', href: '#leadership', icon: '👤' },
      { label: 'Achievements', href: '#achievements', icon: '🏆' },
      { label: 'Facilities', href: '#facilities', icon: '🔬' },
      { label: 'Student Wellbeing', href: '#wellbeing', icon: '💚' },
    ],
  },
  {
    label: 'Academics', href: '#academics',
    children: [
      { label: 'Academic Programs', href: '#academics', icon: '📚' },
      { label: 'Programs & Streams', href: '#programs', icon: '🎓' },
    ],
  },
  {
    label: 'Admissions', href: '#admissions',
    children: [
      { label: 'Enrol Now', href: '#admissions', icon: '✏️' },
      { label: 'Careers', href: '#careers', icon: '💼' },
    ],
  },
  {
    label: 'Information', href: '#tc-issues',
    children: [
      { label: 'TC Issues', href: '#tc-issues', icon: '📄' },
      { label: 'Mandatory Disclosure', href: '#mandatory-disclosure', icon: '📋' },
      { label: 'School Calendar', href: '#school-calendar', icon: '📅' },
      { label: 'Location', href: '#contact', icon: '📍' },
    ],
  },
  { label: 'Contact', href: '#contact', children: null },
]

const LOGIN_URL = 'https://ssolive.myclassboard.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DEO7N2NALS5TB8315F76L%26redirect_uri%3Dhttps%253A%252F%252Ffortcity.myclassboard.com%252Fsso%252FCallback%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520offline_access'

function DropdownItem({ group, scrolled }) {
  const [open, setOpen] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', h)
    return () => document.removeEventListener('mousedown', h)
  }, [])

  const linkClass = 'text-white/90 hover:text-[#F59E0B]'

  if (!group.children) return (
    <a href={group.href}
      className={`relative text-sm font-semibold transition-colors duration-200 pb-0.5 group ${linkClass}`}>
      {group.label}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F59E0B] rounded-full group-hover:w-full transition-all duration-300" />
    </a>
  )

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button onClick={() => setOpen(!open)}
        className={`relative flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200 cursor-pointer pb-0.5 group ${linkClass}`}>
        {group.label}
        <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180 text-[#F59E0B]' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F59E0B] rounded-full group-hover:w-full transition-all duration-300" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 bg-white rounded-2xl shadow-[0_20px_60px_rgba(30,58,138,0.15)] border border-[#E2E8F0] overflow-hidden z-50"
          >
            {/* Dropdown top accent */}
            <div className="h-1 w-full bg-gradient-to-r from-[#1E3A8A] to-[#F59E0B]" />
            <div className="py-2">
              {group.children.map((child, idx) => (
                <a key={child.href} href={child.href} onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#475569] hover:bg-[#F0F4FF] hover:text-[#1E3A8A] transition-colors font-medium group/item">
                  <span className="text-base w-6 text-center flex-shrink-0">{child.icon}</span>
                  <span className="flex-1">{child.label}</span>
                  <svg className="w-3.5 h-3.5 text-[#1E3A8A]/0 group-hover/item:text-[#1E3A8A]/50 transition-all duration-200 -translate-x-1 group-hover/item:translate-x-0"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Top accent strip — only on white bg */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 3, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#F59E0B]"
          />
        )}
      </AnimatePresence>

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'top-[3px] py-2.5 shadow-[0_8px_32px_rgba(30,58,138,0.35)]'
            : 'top-0 py-4'
        }`}
        style={{ background: 'linear-gradient(135deg, #0F2460 0%, #1E3A8A 60%, #1a4fa8 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo + Name */}
          <a href="#hero" className="flex items-center gap-3 group flex-shrink-0">
            <div className={`relative rounded-xl overflow-hidden transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
              <img src="/fort-city-logo.jpg" alt="Fort City School"
                className="h-11 w-auto object-contain group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-black leading-tight tracking-tight text-white">Fort City School</div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#F59E0B]">Vizianagaram · CBSE</div>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navGroups.map((group) => (
              <DropdownItem key={group.label} group={group} scrolled={scrolled} />
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-bold text-white border border-white/60 bg-white/20 hover:bg-[#F59E0B] hover:border-[#F59E0B] transition-all duration-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Login
            </a>
            <a href="#admissions"
              className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-bold text-white border border-white/60 bg-white/20 hover:bg-[#F59E0B] hover:border-[#F59E0B] transition-all duration-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Apply Now
            </a>
          </div>

          {/* Hamburger */}
          <button
            className={`md:hidden flex flex-col gap-1.5 p-2 rounded-lg transition-colors ${
              scrolled ? 'text-[#1E293B] hover:bg-[#F0F4FF]' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span className={`block w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-white border-t border-[#E2E8F0] shadow-2xl overflow-hidden"
            >
              {/* Mobile accent bar */}
              <div className="h-0.5 bg-gradient-to-r from-[#1E3A8A] to-[#F59E0B]" />
              <div className="px-5 py-3 flex flex-col">
                {navGroups.map((group) => (
                  <div key={group.label} className="border-b border-[#F1F5F9] last:border-0">
                    <button
                      onClick={() => setMobileOpen(mobileOpen === group.label ? null : group.label)}
                      className="w-full flex items-center justify-between py-3.5 text-[#1E293B] text-sm font-semibold">
                      {group.label}
                      {group.children && (
                        <svg className={`w-4 h-4 text-[#1E3A8A] transition-transform duration-200 ${mobileOpen === group.label ? 'rotate-180' : ''}`}
                          fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </button>
                    <AnimatePresence>
                      {group.children && mobileOpen === group.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-3 pb-2 flex flex-col bg-[#F8FAFC] rounded-xl mb-1 overflow-hidden"
                        >
                          {group.children.map((child) => (
                            <a key={child.href} href={child.href}
                              onClick={() => { setMenuOpen(false); setMobileOpen(null) }}
                              className="flex items-center gap-3 py-2.5 px-3 text-[#475569] hover:text-[#1E3A8A] text-sm font-medium transition-colors">
                              <span>{child.icon}</span>
                              {child.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                <div className="flex flex-col gap-2 mt-4 pb-2">
                  <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-center gap-2 py-2.5 border border-[#1E3A8A]/25 text-[#1E3A8A] rounded-xl text-sm font-semibold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    Login
                  </a>
                  <a href="#admissions" onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-center gap-2 py-2.5 text-white rounded-xl text-sm font-bold"
                    style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)' }}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Apply Now
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
