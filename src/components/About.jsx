import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-14 items-start mb-24">
          {/* LEFT */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex flex-col gap-5">
            <div>
              <span className="section-tag">Introduction</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mt-3 leading-tight tracking-tight">
                About <span className="text-[#1E3A8A]">Fort City</span> <span className="text-[#F59E0B]">School</span>
              </h2>
            </div>
            <p className="text-[#475569] text-base leading-relaxed">
              The Fort City School believes in all-round development of children at the school stage. Various curricular and extracurricular activities are regularly conducted to bring out the latent talents in children. Fort City has always been a trendsetter in these activities.
            </p>
            <p className="text-[#475569] text-base leading-relaxed">
              Our students have excelled on various fronts — bringing laurels in Games and Sports, Cultural activities, Music, Painting, Singing and literary activities at the District, State and National levels.
            </p>
            <p className="text-[#475569] text-base leading-relaxed">
              The honor goes to the qualified teaching staff who, by their dedicated efforts, have made the students what they are today. Our modern teaching methods coupled with fine infrastructure have added impetus to this winning trend.
            </p>
            <div className="flex flex-wrap gap-6 sm:gap-8 pt-4 border-t border-[#E2E8F0] mt-2">
              {[{ num: '2011', label: 'Founded' }, { num: '12+', label: 'Years' }, { num: '227', label: 'Cents Campus' }].map(item => (
                <div key={item.label}>
                  <div className="text-2xl font-extrabold text-[#1E3A8A]">{item.num}</div>
                  <div className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mt-0.5">{item.label}</div>
                </div>
              ))}
            </div>
            <div className="flex gap-3 flex-wrap pt-2">
              <a href="#admissions" className="btn-primary">Apply for Admissions</a>
              <a href="#about" className="px-7 py-3 rounded-xl border-2 border-[#1E3A8A] text-[#1E3A8A] font-semibold text-sm hover:bg-[#F0F4FF] transition-colors">Learn More</a>
            </div>
          </motion.div>

          {/* RIGHT — photos */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative flex flex-col gap-4">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#E2E8F0]">
              <img src="/school-photos/school-building-main.jpg" alt="Fort City School Campus" className="w-full object-cover" style={{ height: '300px' }} />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-[#E2E8F0]">
              <img src="/school-photos/kids-lego-closeup.jpg" alt="Students learning" className="w-full object-contain bg-[#F8FAFC]" />
            </div>
            <div className="absolute bottom-2 right-2 sm:-bottom-4 sm:-right-4 bg-[#1E3A8A] text-white rounded-2xl px-5 py-3 shadow-xl">
              <div className="text-xl font-extrabold">CBSE</div>
              <div className="text-[10px] font-bold tracking-wider uppercase opacity-75">Affiliated</div>
            </div>
          </motion.div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="bg-[#F0F4FF] rounded-3xl p-6 sm:p-10 border border-[#BFDBFE]">
            <div className="w-12 h-12 rounded-2xl bg-[#1E3A8A] flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            <p className="text-[#1E3A8A] text-xs font-bold uppercase tracking-[0.15em] mb-3">Vision</p>
            <h3 className="text-2xl font-extrabold text-[#1E293B] leading-tight mb-4">Nurturing young minds with <span className="text-[#1E3A8A]">purpose</span></h3>
            <p className="text-[#475569] leading-relaxed text-sm">
              To nurture young minds, to focus on their holistic development and to develop their moral, ethical, human and spiritual values so that each child may develop <strong className="text-[#1E293B]">CHARACTER and CONFIDENCE</strong> with a deep rooted passion in pursuit of excellence.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="bg-[#1E3A8A] rounded-3xl p-6 sm:p-10">
            <div className="w-12 h-12 rounded-2xl bg-[#F59E0B] flex items-center justify-center mb-5">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <p className="text-[#F59E0B] text-xs font-bold uppercase tracking-[0.15em] mb-3">Mission</p>
            <h3 className="text-2xl font-extrabold text-white leading-tight mb-4">Excellence through <span className="text-[#F59E0B]">innovation</span></h3>
            <div className="space-y-3 text-white/70 leading-relaxed text-sm">
              <p>FORT CITY SCHOOL seeks to create a challenging yet conducive learning environment that inspires excellence through varied instructions that allows for individual differences and learning styles.</p>
              <p>We promote a safe, caring and supportive environment. We use innovative techniques to enhance life-long learning through technology, multiple intelligence and interdisciplinary connects.</p>
              <p>We promote Sportsmanship and School Spirit and share diverse cultural backgrounds to nurture growth and responsibility within a positive school atmosphere.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
