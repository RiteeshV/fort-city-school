import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ── Holiday / Event Data ─────────────────────────────────────────────────────
// Types: 'national' | 'state' | 'religious' | 'school'
const EVENTS = [
  // ── June 2025 ──
  { date: '2025-06-02', label: 'Academic Year Begins', type: 'school' },
  { date: '2025-06-05', label: 'World Environment Day', type: 'school' },

  // ── July 2025 ──
  { date: '2025-07-07', label: 'Term I Exams Begin', type: 'school' },
  { date: '2025-07-18', label: 'Muharram', type: 'religious' },

  // ── August 2025 ──
  { date: '2025-08-11', label: 'Raksha Bandhan', type: 'religious' },
  { date: '2025-08-15', label: 'Independence Day', type: 'national' },
  { date: '2025-08-16', label: 'Janmashtami', type: 'religious' },
  { date: '2025-08-20', label: 'Annual Sports Day', type: 'school' },

  // ── September 2025 ──
  { date: '2025-09-05', label: "Teachers' Day", type: 'school' },
  { date: '2025-09-29', label: "Milad-un-Nabi", type: 'religious' },

  // ── October 2025 ──
  { date: '2025-10-02', label: 'Gandhi Jayanti', type: 'national' },
  { date: '2025-10-02', label: 'Dussehra (Vijayadasami)', type: 'religious' },
  { date: '2025-10-20', label: 'Diwali', type: 'religious' },
  { date: '2025-10-21', label: 'Diwali Holiday', type: 'religious' },
  { date: '2025-10-31', label: 'Halloween / Term I Ends', type: 'school' },

  // ── November 2025 ──
  { date: '2025-11-01', label: 'AP Formation Day', type: 'state' },
  { date: '2025-11-05', label: 'Term II Begins', type: 'school' },
  { date: '2025-11-14', label: "Children's Day", type: 'school' },
  { date: '2025-11-15', label: 'Kartika Pournami', type: 'state' },

  // ── December 2025 ──
  { date: '2025-12-19', label: 'Annual Day / Prize Distribution', type: 'school' },
  { date: '2025-12-25', label: 'Christmas', type: 'religious' },
  { date: '2025-12-31', label: 'Winter Break Begins', type: 'school' },

  // ── January 2026 ──
  { date: '2026-01-01', label: 'New Year Day', type: 'national' },
  { date: '2026-01-05', label: 'School Reopens', type: 'school' },
  { date: '2026-01-14', label: 'Sankranti / Pongal', type: 'state' },
  { date: '2026-01-15', label: 'Sankranti Holiday', type: 'state' },
  { date: '2026-01-16', label: 'Kanuma', type: 'state' },
  { date: '2026-01-26', label: 'Republic Day', type: 'national' },

  // ── February 2026 ──
  { date: '2026-02-05', label: 'Term II Exams Begin', type: 'school' },
  { date: '2026-02-19', label: 'Maha Shivaratri', type: 'religious' },
  { date: '2026-02-28', label: 'Science & Tech Exhibition', type: 'school' },

  // ── March 2026 ──
  { date: '2026-03-06', label: 'Holi', type: 'religious' },
  { date: '2026-03-25', label: 'Ugadi (Telugu New Year)', type: 'state' },
  { date: '2026-03-30', label: 'Ram Navami', type: 'religious' },

  // ── April 2026 ──
  { date: '2026-04-03', label: 'Good Friday', type: 'religious' },
  { date: '2026-04-14', label: 'Dr. Ambedkar Jayanti', type: 'national' },
  { date: '2026-04-17', label: 'Annual Exams Begin', type: 'school' },
  { date: '2026-04-30', label: 'Annual Exams End', type: 'school' },

  // ── May 2026 ──
  { date: '2026-05-11', label: 'Results Day', type: 'school' },
  { date: '2026-05-15', label: 'Summer Break Begins', type: 'school' },
]

const TYPE_META = {
  national: { label: 'National Holiday', color: 'bg-saffron text-white', dot: 'bg-saffron', border: 'border-saffron' },
  state:    { label: 'State / Regional Holiday', color: 'bg-emerald-600 text-white', dot: 'bg-emerald-600', border: 'border-emerald-600' },
  religious:{ label: 'Religious Holiday', color: 'bg-purple-600 text-white', dot: 'bg-purple-600', border: 'border-purple-600' },
  school:   { label: 'School Event', color: 'bg-gold-500 text-navy-800', dot: 'bg-gold-500', border: 'border-gold-500' },
}

const SAFFRON = '#FF9933'

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
const DAYS   = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

function buildCalendarGrid(year, month) {
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const cells = []
  for (let i = 0; i < firstDay; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)
  return cells
}

function toKey(year, month, day) {
  return `${year}-${String(month + 1).padStart(2,'0')}-${String(day).padStart(2,'0')}`
}

function EventPill({ event }) {
  const meta = TYPE_META[event.type]
  return (
    <span className={`inline-flex items-center gap-1 text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${meta.color} truncate max-w-full`}>
      {event.label}
    </span>
  )
}

function Legend() {
  return (
    <div className="flex flex-wrap gap-3 justify-center mt-4">
      {Object.entries(TYPE_META).map(([type, meta]) => (
        <div key={type} className="flex items-center gap-1.5 text-xs text-navy-700">
          <span className={`w-2.5 h-2.5 rounded-full ${meta.dot}`} />
          {meta.label}
        </div>
      ))}
    </div>
  )
}

export default function SchoolCalendar() {
  const today = new Date()
  const [year, setYear]   = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())
  const [selected, setSelected] = useState(null)

  const eventsByDate = EVENTS.reduce((acc, e) => {
    acc[e.date] = acc[e.date] ? [...acc[e.date], e] : [e]
    return acc
  }, {})

  const cells = buildCalendarGrid(year, month)

  function prevMonth() {
    if (month === 0) { setYear(y => y - 1); setMonth(11) }
    else setMonth(m => m - 1)
    setSelected(null)
  }
  function nextMonth() {
    if (month === 11) { setYear(y => y + 1); setMonth(0) }
    else setMonth(m => m + 1)
    setSelected(null)
  }

  const selectedKey    = selected ? toKey(year, month, selected) : null
  const selectedEvents = selectedKey ? (eventsByDate[selectedKey] || []) : []

  // Upcoming events in the current month from today
  const upcomingThisMonth = EVENTS
    .filter(e => {
      const d = new Date(e.date)
      return d >= today && d.getFullYear() === year && d.getMonth() === month
    })
    .slice(0, 5)

  return (
    <section id="school-calendar" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-gold-100 text-gold-700 rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
            Academic Year 2025–26
          </span>
          <h2 className="text-4xl font-bold text-navy-800 mb-3">School Calendar</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Indian national holidays, AP state &amp; regional observances, and Fort City School events — all in one place.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ── Calendar Grid ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
          >
            {/* Month nav */}
            <div className="flex items-center justify-between px-6 py-4 bg-navy-800">
              <button
                onClick={prevMonth}
                className="p-2 rounded-lg hover:bg-white/10 text-white transition-colors"
                aria-label="Previous month"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {MONTHS[month]} {year}
                </h3>
                <button
                  onClick={() => { setYear(today.getFullYear()); setMonth(today.getMonth()); setSelected(today.getDate()) }}
                  className="px-2.5 py-1 rounded-md bg-white/10 hover:bg-gold-500 hover:text-navy-800 text-white text-xs font-bold tracking-wide transition-all duration-200"
                >
                  Today
                </button>
              </div>
              <button
                onClick={nextMonth}
                className="p-2 rounded-lg hover:bg-white/10 text-white transition-colors"
                aria-label="Next month"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 border-b border-gray-100">
              {DAYS.map(d => (
                <div key={d} className={`py-2 text-center text-xs font-bold uppercase tracking-wide ${d === 'Sun' ? 'text-red-500' : 'text-gray-400'}`}>
                  {d}
                </div>
              ))}
            </div>

            {/* Cells */}
            <div className="grid grid-cols-7">
              {cells.map((day, idx) => {
                if (!day) return <div key={`empty-${idx}`} className="border-r border-b border-gray-50 min-h-[44px] sm:min-h-[72px]" />
                const key = toKey(year, month, day)
                const dayEvents = eventsByDate[key] || []
                const isToday = today.getDate() === day && today.getMonth() === month && today.getFullYear() === year
                const isSunday = new Date(year, month, day).getDay() === 0
                const isSelected = selected === day
                const hasHoliday = dayEvents.some(e => e.type === 'national' || e.type === 'state' || e.type === 'religious')

                return (
                  <button
                    key={key}
                    onClick={() => setSelected(isSelected ? null : day)}
                    className={`relative border-r border-b border-gray-50 min-h-[44px] sm:min-h-[72px] p-1 sm:p-1.5 text-left transition-all duration-150 hover:bg-blue-50 group
                      ${isSelected ? 'bg-navy-800/5 ring-2 ring-inset ring-navy-600' : ''}
                      ${hasHoliday && !isSelected ? 'bg-orange-50/40' : ''}
                    `}
                  >
                    <span className={`inline-flex items-center justify-center w-5 h-5 sm:w-7 sm:h-7 rounded-full text-xs sm:text-sm font-semibold mb-0.5 sm:mb-1
                      ${isToday ? 'bg-navy-800 text-white' : isSunday ? 'text-red-500' : 'text-gray-700'}
                    `}>
                      {day}
                    </span>
                    <div className="flex flex-col gap-0.5 overflow-hidden">
                      {dayEvents.slice(0, 2).map((e, i) => (
                        <span
                          key={i}
                          className={`w-1.5 h-1.5 rounded-full self-start ${TYPE_META[e.type].dot}`}
                          title={e.label}
                        />
                      ))}
                      {dayEvents.length > 2 && (
                        <span className="text-[9px] text-gray-400 font-medium">+{dayEvents.length - 2}</span>
                      )}
                    </div>
                    {/* Tooltip on hover */}
                    {dayEvents.length > 0 && (
                      <div className="absolute z-20 bottom-full left-0 mb-1 hidden sm:group-hover:flex flex-col gap-1 bg-navy-800 text-white text-xs rounded-lg px-2 py-2 shadow-xl min-w-[160px] pointer-events-none">
                        {dayEvents.map((e, i) => (
                          <span key={i} className={`flex items-center gap-1.5`}>
                            <span className={`w-2 h-2 rounded-full flex-shrink-0 ${TYPE_META[e.type].dot}`} />
                            {e.label}
                          </span>
                        ))}
                      </div>
                    )}
                  </button>
                )
              })}
            </div>

            <Legend />
            <p className="text-center text-xs text-gray-400 py-3">
              Click any date to view details · Hover for quick preview
            </p>
          </motion.div>

          {/* ── Side Panel ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-6"
          >

            {/* Selected day detail */}
            <AnimatePresence mode="wait">
              {selected && (
                <motion.div
                  key={selectedKey}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5"
                >
                  <h4 className="font-bold text-navy-800 text-lg mb-1">
                    {selected} {MONTHS[month]} {year}
                  </h4>
                  {selectedEvents.length > 0 ? (
                    <div className="flex flex-col gap-2 mt-3">
                      {selectedEvents.map((e, i) => (
                        <div key={i} className={`flex items-start gap-2 p-3 rounded-xl border-l-4 bg-gray-50 ${TYPE_META[e.type].border}`}>
                          <div>
                            <p className="font-semibold text-navy-800 text-sm">{e.label}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{TYPE_META[e.type].label}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-400 text-sm mt-2">No events on this day.</p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Upcoming events */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 flex-1">
              <h4 className="font-bold text-navy-800 text-base mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                Upcoming in {MONTHS[month]}
              </h4>
              {upcomingThisMonth.length > 0 ? (
                <div className="flex flex-col gap-3">
                  {upcomingThisMonth.map((e, i) => {
                    const d = new Date(e.date)
                    const meta = TYPE_META[e.type]
                    return (
                      <div key={i} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-navy-800/5 flex flex-col items-center justify-center">
                          <span className="text-xs font-bold text-navy-800 leading-none">{d.getDate()}</span>
                          <span className="text-[9px] text-gray-400 uppercase">{MONTHS[d.getMonth()].slice(0,3)}</span>
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-navy-800 truncate">{e.label}</p>
                          <span className={`inline-block text-[10px] font-bold px-1.5 py-0.5 rounded-full mt-0.5 ${meta.color}`}>
                            {meta.label}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              ) : (
                <p className="text-gray-400 text-sm">No upcoming events this month.</p>
              )}
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'National Holidays', count: EVENTS.filter(e => e.type === 'national').length, dot: 'bg-saffron' },
                { label: 'State Holidays', count: EVENTS.filter(e => e.type === 'state').length, dot: 'bg-emerald-600' },
                { label: 'Religious Days', count: EVENTS.filter(e => e.type === 'religious').length, dot: 'bg-purple-600' },
                { label: 'School Events', count: EVENTS.filter(e => e.type === 'school').length, dot: 'bg-gold-500' },
              ].map(s => (
                <div key={s.label} className="bg-white rounded-xl shadow border border-gray-100 p-3 flex flex-col gap-1">
                  <span className={`w-2.5 h-2.5 rounded-full ${s.dot}`} />
                  <span className="text-2xl font-bold text-navy-800">{s.count}</span>
                  <span className="text-xs text-gray-500 leading-tight">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Annual events list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14"
        >
          <h3 className="text-2xl font-bold text-navy-800 mb-6 text-center">Full Year Holiday List</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {EVENTS.map((e, i) => {
              const d = new Date(e.date)
              const meta = TYPE_META[e.type]
              return (
                <div key={i} className={`flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow`}>
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex flex-col items-center justify-center border-2 ${meta.border} bg-white`}>
                    <span className="text-sm font-black text-navy-800 leading-none">{d.getDate()}</span>
                    <span className="text-[10px] text-gray-500 uppercase font-semibold">{MONTHS[d.getMonth()].slice(0,3)}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-navy-800 truncate">{e.label}</p>
                    <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mt-0.5 ${meta.color}`}>
                      {meta.label}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
