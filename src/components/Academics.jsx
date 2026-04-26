import { motion } from 'framer-motion'

export default function Academics() {
  return (
    <section id="academics" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
          <span className="section-tag">Academics</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mt-3 mb-4 tracking-tight">
            Excellence in <span className="text-[#1E3A8A]">Education</span>
          </h2>
          <p className="text-[#475569] max-w-2xl mx-auto text-lg leading-relaxed">
            A comprehensive CBSE curriculum from Nursery to Class XII, with strong emphasis on academic and holistic development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="md:col-span-2 flex flex-col justify-center space-y-5 text-[#475569] leading-relaxed">
            <p>The Fort City School believes in all-round development of children. Various curricular and extracurricular activities are regularly conducted to bring out the latent talent in children.</p>
            <p>Our students have excelled on various fronts — bringing laurels in Games and Sports, Cultural activities, Music, Painting, Singing and literary activities at District, State and National levels.</p>
            <p>This excellence is evident in academics too, with students securing commendable ranks in Maths Olympiad, NTSE and Annual Public Examinations.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-[#E2E8F0]" style={{ height: '220px' }}>
              <img src="/school-photos/stem-project.jpg" alt="STEM project" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg border border-[#E2E8F0] mt-8" style={{ height: '220px' }}>
              <img src="/school-photos/students-building.jpg" alt="Students building" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="rounded-3xl overflow-hidden shadow-xl mb-8 relative" style={{ height: '220px' }}>
          <img src="/school-photos/classroom.jpg" alt="Classroom" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/85 to-transparent flex items-center px-5 sm:px-10">
            <div>
              <p className="text-[#F59E0B] text-xs font-bold uppercase tracking-[0.15em] mb-2">Our Learning Spaces</p>
              <h3 className="text-2xl font-extrabold text-white">Learning happens everywhere.</h3>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="rounded-2xl bg-[#1E3A8A] p-5 flex flex-wrap gap-5 justify-center items-center">
          {['Nursery', 'LKG / UKG', 'Class I – V', 'Class VI – X', 'Class XI – XII'].map((level) => (
            <div key={level} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
              <span className="text-sm font-semibold text-white/80">{level}</span>
            </div>
          ))}
          <div className="w-full text-center md:w-auto md:ml-auto text-[#F59E0B] text-sm font-bold mt-2 md:mt-0">English Medium · Co-Educational</div>
        </motion.div>
      </div>
    </section>
  )
}
