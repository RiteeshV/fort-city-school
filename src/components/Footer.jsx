import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// ── Inline CSS ───────────────────────────────────────────────────────────────
const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap');

.fcs-footer-wrap {
  font-family: 'Plus Jakarta Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
}

@keyframes fcs-breathe {
  0%   { transform: translate(-50%, -50%) scale(1);   opacity: 0.5; }
  100% { transform: translate(-50%, -50%) scale(1.12); opacity: 0.9; }
}
@keyframes fcs-marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
@keyframes fcs-heartbeat {
  0%,100%       { transform: scale(1);   filter: drop-shadow(0 0 4px #F59E0B88); }
  15%,45%       { transform: scale(1.3); filter: drop-shadow(0 0 10px #F59E0Bcc); }
  30%           { transform: scale(1); }
}

.fcs-breathe   { animation: fcs-breathe   8s ease-in-out infinite alternate; }
.fcs-marquee   { animation: fcs-marquee  40s linear infinite; }
.fcs-heartbeat { animation: fcs-heartbeat 2s cubic-bezier(0.25,1,0.5,1) infinite; }

.fcs-bg-grid {
  background-size: 60px 60px;
  background-image:
    linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
}

.fcs-aurora {
  background: radial-gradient(
    circle at 50% 50%,
    rgba(245,158,11,0.10)  0%,
    rgba(30,58,138,0.20)   45%,
    transparent           70%
  );
}

.fcs-pill {
  background: linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%);
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 10px 30px -10px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.08);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
}
.fcs-pill:hover {
  background: linear-gradient(145deg, rgba(245,158,11,0.14) 0%, rgba(245,158,11,0.05) 100%);
  border-color: rgba(245,158,11,0.4);
  box-shadow: 0 20px 40px -10px rgba(245,158,11,0.2), inset 0 1px 1px rgba(245,158,11,0.15);
  color: #F59E0B;
}

.fcs-bg-text {
  font-size: 22vw;
  line-height: 0.75;
  font-weight: 900;
  letter-spacing: -0.04em;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255,255,255,0.04);
  background: linear-gradient(180deg, rgba(255,255,255,0.07) 0%, transparent 60%);
  -webkit-background-clip: text;
  background-clip: text;
  white-space: nowrap;
}

.fcs-text-glow {
  background: linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.4) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 24px rgba(255,255,255,0.12));
}

.fcs-gold-glow {
  background: linear-gradient(180deg, #F59E0B 0%, #fbbf24 60%, rgba(245,158,11,0.5) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 20px rgba(245,158,11,0.35));
}
`

// ── Magnetic button (pure JS, no TS) ────────────────────────────────────────
function MagneticPill({ as: Tag = 'a', children, className = '', ...props }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      gsap.to(el, { x: x * 0.35, y: y * 0.35, rotationX: -y * 0.12, rotationY: x * 0.12, scale: 1.04, ease: 'power2.out', duration: 0.4 })
    }
    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, rotationX: 0, rotationY: 0, scale: 1, ease: 'elastic.out(1,0.3)', duration: 1.2 })
    }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave) }
  }, [])

  return <Tag ref={ref} className={`cursor-pointer ${className}`} {...props}>{children}</Tag>
}

// ── Marquee strip ────────────────────────────────────────────────────────────
function MarqueeItem() {
  return (
    <div className="flex items-center space-x-10 px-6 text-white/40 font-bold uppercase tracking-[0.25em] text-xs">
      <span>Academic Excellence</span><span className="text-[#F59E0B]">✦</span>
      <span>CBSE Affiliated</span><span className="text-[#F59E0B]">✦</span>
      <span>Nursery to Class XII</span><span className="text-[#F59E0B]">✦</span>
      <span>Vizianagaram, AP</span><span className="text-[#F59E0B]">✦</span>
      <span>Est. 2011</span><span className="text-[#F59E0B]">✦</span>
      <span>Building Character</span><span className="text-[#F59E0B]">✦</span>
      <span>NEP 2020 Compliant</span><span className="text-[#F59E0B]">✦</span>
    </div>
  )
}

// ── Main footer ──────────────────────────────────────────────────────────────
export default function Footer() {
  const wrapperRef   = useRef(null)
  const bgTextRef    = useRef(null)
  const headingRef   = useRef(null)
  const pillsRef     = useRef(null)

  useEffect(() => {
    if (!wrapperRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(bgTextRef.current,
        { y: '12vh', scale: 0.85, opacity: 0 },
        { y: '0vh', scale: 1, opacity: 1, ease: 'power1.out',
          scrollTrigger: { trigger: wrapperRef.current, start: 'top 80%', end: 'bottom bottom', scrub: 1.2 } }
      )
      gsap.fromTo([headingRef.current, pillsRef.current],
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.18, ease: 'power3.out',
          scrollTrigger: { trigger: wrapperRef.current, start: 'top 45%', end: 'bottom bottom', scrub: 1.2 } }
      )
    }, wrapperRef)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      {/* Curtain-reveal wrapper — clips the fixed footer to this scroll region */}
      <div
        ref={wrapperRef}
        className="relative h-screen w-full"
        style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
      >
        <footer className="fcs-footer-wrap fixed bottom-0 left-0 flex h-screen w-full flex-col justify-between overflow-hidden bg-[#0A0A0A]">

          {/* Ambient aurora glow */}
          <div className="fcs-aurora fcs-breathe absolute left-1/2 top-1/2 h-[65vh] w-[80vw] rounded-[50%] blur-[90px] pointer-events-none z-0" />

          {/* Grid */}
          <div className="fcs-bg-grid absolute inset-0 z-0 pointer-events-none" />

          {/* Giant background text */}
          <div ref={bgTextRef} className="fcs-bg-text absolute -bottom-[4vh] left-1/2 -translate-x-1/2 z-0 pointer-events-none select-none overflow-hidden w-full text-center">
            FORT CITY
          </div>

          {/* ── Diagonal marquee strip ── */}
          <div className="absolute top-10 left-0 w-full overflow-hidden border-y border-white/[0.08] bg-[#0A0A0A]/60 backdrop-blur-md py-3.5 z-10 -rotate-1 scale-105 shadow-2xl">
            <div className="fcs-marquee flex w-max">
              <MarqueeItem /><MarqueeItem />
            </div>
          </div>

          {/* ── Centre content ── */}
          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 mt-16 w-full max-w-5xl mx-auto">

            {/* Main heading */}
            <h2
              ref={headingRef}
              className="text-3xl sm:text-5xl md:text-8xl font-black fcs-text-glow tracking-tighter mb-3 text-center leading-none"
            >
              Shape Your
            </h2>
            <h2 className="text-3xl sm:text-5xl md:text-8xl font-black fcs-gold-glow tracking-tighter mb-8 text-center leading-none">
              Future Here.
            </h2>

            {/* Pills */}
            <div ref={pillsRef} className="flex flex-col items-center gap-5 w-full">

              {/* Primary CTAs */}
              <div className="flex flex-wrap justify-center gap-4">
                <MagneticPill
                  href="#admissions"
                  className="fcs-pill px-10 py-4 rounded-full text-white font-bold text-sm md:text-base flex items-center gap-3"
                >
                  <svg className="w-5 h-5 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Apply for Admissions
                </MagneticPill>

                <MagneticPill
                  href="#contact"
                  className="fcs-pill px-10 py-4 rounded-full text-white font-bold text-sm md:text-base flex items-center gap-3"
                >
                  <svg className="w-5 h-5 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Us
                </MagneticPill>

                <MagneticPill
                  as="a"
                  href="https://ssolive.myclassboard.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DEO7N2NALS5TB8315F76L%26redirect_uri%3Dhttps%253A%252F%252Ffortcity.myclassboard.com%252Fsso%252FCallback%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520offline_access"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fcs-pill px-10 py-4 rounded-full text-white font-bold text-sm md:text-base flex items-center gap-3"
                >
                  <svg className="w-5 h-5 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Student / Parent Login
                </MagneticPill>
              </div>

              {/* Secondary nav links */}
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-1">
                {[
                  ['About', '#about'],
                  ['Academics', '#academics'],
                  ['Facilities', '#facilities'],
                  ['School Calendar', '#school-calendar'],
                  ['TC Issues', '#tc-issues'],
                  ['Mandatory Disclosure', '#mandatory-disclosure'],
                ].map(([label, href]) => (
                  <MagneticPill key={href} href={href}
                    className="fcs-pill px-5 py-2.5 rounded-full text-white/50 hover:text-gold-400 font-medium text-xs md:text-sm transition-colors"
                  >
                    {label}
                  </MagneticPill>
                ))}
              </div>
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div className="relative z-20 w-full pb-6 pt-2 px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-3">

            {/* Copyright */}
            <div className="text-white/25 text-[10px] md:text-xs font-semibold tracking-widest uppercase order-2 md:order-1">
              © 2026 Fort City School · Managed by Sree Balajee Education Society
            </div>

            {/* Made with love badge */}
            <div className="fcs-pill px-5 py-2.5 rounded-full flex items-center gap-2 order-1 md:order-2 cursor-default">
              <span className="text-white/30 text-[10px] md:text-xs font-bold uppercase tracking-widest">Crafted with</span>
              <span className="fcs-heartbeat text-sm text-[#F59E0B]">♥</span>
              <span className="text-white/30 text-[10px] md:text-xs font-bold uppercase tracking-widest">for</span>
              <span className="text-white font-black text-xs md:text-sm ml-1">Vizianagaram</span>
            </div>

            {/* CBSE info */}
            <div className="flex items-center gap-3 order-3 text-white/20 text-[10px] md:text-xs font-semibold tracking-widest uppercase">
              <span>CBSE Aff. 130394</span>
              <span className="text-white/10">|</span>
              <span>NEP 2020</span>
            </div>

            {/* Back to top */}
            <MagneticPill
              as="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fcs-pill w-11 h-11 rounded-full flex items-center justify-center text-white/40 hover:text-gold-400 group order-4"
            >
              <svg className="w-4 h-4 group-hover:-translate-y-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </MagneticPill>

          </div>
        </footer>
      </div>
    </>
  )
}
