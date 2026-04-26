import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const principal = {
  name: 'Dr. (Mrs.) Roiana Khan',
  role: 'Principal',
  initials: 'RK',
  photo: '/photos/principal.jpg',
  message: [
    "It gives me elation & honour to be a member of the family of FCS. A school is always a 'world in miniature' where one receives training for life. Lessons in life take place everywhere: so, whether they are in the classroom or on the sports field, our pupils begin to learn lessons of life — to accept defeat and failure with grace, rejoice at victory and triumph, to respect themselves and to value the needs of each other.",
    "The learners are like seeds of talent. The educators are the gardeners, who nurture the skills and weed out the weaknesses lurking within. It needs the right and fertile medium for them to sprout and flourish. The outcome is a green and bountiful park of a whole generation of future citizens.",
    "We will take your children under our feathers and nurture them and their dreams by taking them through a journey of self-discovery, self-exploration and self-realisation. In this way, you will be able to achieve your aspirations and become what India demands from you.",
    "At FCS, we aspire to encourage children to believe in themselves... to reach for the stars... to reach greater heights — and they can, if they believe in their abilities to do so.",
    "We all aspire that education will be for you a source of joy, pleasure and certainly a cause for your pride.",
    "Wishing you a fruitful year!",
  ],
}

const leaders = [
  {
    name: 'Mr. K.A.P Raju (Siva)',
    role: 'Chairman',
    initials: 'KR',
    photo: '/photos/chairman.jpg',
    message: [
      'In our school wherein our children understand and acquire newer learning skills, using well directed educational programmes. Our curriculum design is assisted by advanced educational technologies also. We are trying our best to provide positive catalytic impulses to our children to stretch inherent learning competencies through self-discovery processes.',
      'We see children as the builders of newer INDIA in the emerging world. That is why we have envisioned an edifying system, which amalgamates the aspirations of the present generation without compromising on Indian value system and traditions. It is our consistent endeavor to shape our children to become successful global citizens.',
    ],
  },
  {
    name: 'Mr. S.V.S. Sitarama Raju (Chanti)',
    role: 'Vice - Chairman',
    initials: 'SVS',
    photo: '/photos/vice-chairman.jpg',
    message: [
      'Fort City School is one of the most reputed educational institutions of Vizianagaram. Our vision is to Educate, Enlighten and Empower young minds.',
      'BOLD|"Success come to those who work hard and stay with those, who didn\'t reset the laurels of the past".',
      "Today's World is changing at an accelerated phase and we are at the verge of a pause and reframe the entire system of education. Our school is well facilitated to prepare the future of our nation in all spheres of their life leading them to reach of the altitudes of their successful careers. Holistic education is our main moto where we focus on the all-round development of our students. We endorse all the skills to face the challenges of the reality with an effective building of their confidence and problem-solving skills.",
      'We the Fort City Managements works at the implementation of well-balanced curriculum which fully prepares our students to face the challenges of life and procure the potential to attain all the required 21st Century skills.',
      "We are entitled with an effective team of dedicated faculty to carry the aspiration of our students fulfilling their zeal's and nurturing their creativity by imparting various curricular, co-curricular activities, strategies and dynamics.",
      'I congratulate the entire team of our school for their dedication in striving for the progress of our student.',
    ],
  },
  {
    name: 'Mr. Ashok',
    role: 'Managing Director',
    initials: 'MA',
    photo: '/photos/managing-director.jpg',
    message: [
      'Every child is like a seed which has the potential to grow , if it is nourished with love and care under the right guidance. In the current challenging times it is essential that children should not only excel in academics but should also develop courtesy, discipline, smart personality, social sensitivity and be imbibed with the traditional values and culture of our country. Childhood is the best time to lay the foundation of the core values essential for the overall development of the future citizen of tomorrow.',
      'Fort City school is a friendly school where each and every student is understood, valued and attended too. Our students are provided with the state of the art facilities like well-equipped science laboratory, computer laboratory and audio visual room. Equal attention is given to the development of the children both academically and in extra curricular activities like different sports, yoga, cultural activities, etc.',
      'Year by year the efforts of all our staff and students have taken the school forward in terms of excellence. The school has progressed in leaps and bounds. Today we stand as one of the noted educational landmarks in the heart of our town. We offer our students a stress free learning environment which encourages creativity and critical thinking.',
      'At Fort City School we are dedicated to exhaustive quality learning and are utterly committed to a continuous process of improvement for the benefit of the students. We are always open to refreshing views and suggestions which can add more value to the students of our school.',
    ],
  },
  {
    name: 'Mr. Madhu',
    role: 'Admin. Director',
    initials: 'MM',
    photo: '/photos/admin-director.jpg',
    message: [
      'Education is not just about the subjects that are learnt and taught in school. Becoming educated is not restricted to being in school and then in college, gathering certificates and feeling proud of oneself. It is a lifelong exercise.',
      'The thirst for knowledge is not restricted to the child. It is also essential for a parent and a teacher to keep adding to their own knowledge bank by keeping their eyes and ears open and by reading as much as possible and ensuring that children develop these habits as well.',
      "Besides all of the above, that add to children becoming truly educated, schools and teachers must ensure that children have a society of enriching experiences. Surprisingly, these experiences develop a child's creativity and imagination and lead to something that is often thought to be more important than knowledge. Creativity and imagination make children grow up to be productive adults who then arrive as citizens of the world ready to make their own great contribution to the mankind.",
    ],
  },
  {
    name: 'Ms. Neelima Sagi',
    role: 'Director',
    initials: 'NS',
    photo: '/photos/director.jpg',
    message: [
      'Education is not just about the subjects that are learnt and taught in school. Becoming educated is not restricted to being in school and then in college, gathering certificates and feeling proud of oneself. It is a lifelong exercise.',
      'Children are like sot clay. They can mould into persons of excellence by their teachers. As responsible educators we have to exemplary to our students if we want them to be asserts to the Society and Nation.',
      'Our Mission is to mould a generation who can serve and succeed not only in their respective careers but also in serving humanity and develop empathy and sensitivity towards the world at large. I am proud of our history. Our values and high academic standards achieved by our students here at Fort City School. Let us continue an atmosphere where apart from academic excellence children may grow with a true spirit of tolerance and respect of all human beings especially elders, sensitivity to their culture and courage to face the challenges of life.',
      'Dear students, staff members and parents, come and join hands together and translate the dream of Ideal Educational Institution of our endeavour which leads you into the world of realistic impact of holistic education.',
    ],
  },
]

const avatarColors = [
  'from-[#1E3A8A] to-[#1e4aba]',
  'from-[#1E293B] to-[#334155]',
  'from-[#1E3A8A] to-[#1e4aba]',
  'from-[#1E293B] to-[#334155]',
  'from-[#1E3A8A] to-[#1e4aba]',
]

function Avatar({ person, index, size = 'card' }) {
  const large = size === 'large'
  return person.photo ? (
    <img
      src={person.photo}
      alt={person.name}
      className={`w-full h-full object-cover ${large ? 'object-top' : ''}`}
      onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
    />
  ) : (
    <div className={`w-full h-full bg-gradient-to-br ${avatarColors[index]} flex items-center justify-center`}>
      <span className={`font-black text-white ${large ? 'text-6xl' : 'text-4xl'}`}>{person.initials}</span>
    </div>
  )
}

export default function Leadership() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="leadership" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-tag">Leadership</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E293B] mt-3 mb-4 tracking-tight">
            Guided by <span className="text-[#1E3A8A]">Visionaries</span>
          </h2>
          <p className="text-[#475569] max-w-xl mx-auto text-lg leading-relaxed">
            Our leadership team brings decades of educational expertise and a deep
            commitment to student success.
          </p>
        </motion.div>

        {/* Principal's Desk */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row gap-0 rounded-3xl overflow-hidden shadow-xl border border-[#E2E8F0] mb-16 group cursor-default"
        >
          <div className="md:w-5/12 w-full aspect-[3/4] md:aspect-auto min-h-[420px] relative overflow-hidden">
            <div className="w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105">
              <Avatar person={principal} index={4} size="large" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-5 left-6">
              <p className="text-white font-bold text-lg leading-tight">{principal.name}</p>
              <p className="text-[#F59E0B] text-xs font-bold tracking-widest uppercase mt-0.5">{principal.role}</p>
            </div>
          </div>

          <div className="md:w-7/12 bg-white p-6 md:p-12 flex flex-col justify-start overflow-y-auto max-h-[500px] md:max-h-[600px]">
            <p className="text-[#F59E0B] text-xs font-bold uppercase tracking-[0.15em] mb-2">Message from the Desk</p>
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#1E293B] mb-6">
              Principal's Desk
            </h3>
            <div className="space-y-4">
              {principal.message.map((para, i) => (
                <p key={i} className="text-[#475569] text-sm md:text-base leading-relaxed">{para}</p>
              ))}
            </div>
            <p className="mt-6 text-[#94A3B8] text-xs font-medium border-t border-[#E2E8F0] pt-4">
              — {principal.name}, Fort City School, Vizianagaram
            </p>
          </div>
        </motion.div>

        {/* Team Cards */}
        <div className="flex flex-wrap justify-center gap-5">
          {leaders.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(30,58,138,0.12)' }}
              onClick={() => setSelected({ person, index: i })}
              className="cursor-pointer w-52 rounded-2xl border border-[#E2E8F0] bg-white shadow-md overflow-hidden group"
            >
              <div className="relative w-full aspect-square overflow-hidden">
                <div className="w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105">
                  <Avatar person={person} index={i} />
                </div>
                <div className="absolute inset-0 bg-[#1E3A8A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex items-center justify-center">
                  <span className="text-white text-xs font-bold tracking-wider bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    View Message
                  </span>
                </div>
              </div>
              <div className="p-4 text-center">
                <p className="font-bold text-[#1E293B] text-sm leading-snug">{person.name}</p>
                <p className="text-[#F59E0B] text-xs font-bold mt-1 tracking-wide uppercase">{person.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Management */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 rounded-3xl overflow-hidden shadow-lg border border-[#E2E8F0]"
        >
          <div className="h-1.5 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#F59E0B]" />
          <div className="bg-white p-8 flex flex-col md:flex-row items-center gap-8">
            {/* Emblem */}
            <div className="shrink-0 flex flex-col items-center gap-2">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] flex items-center justify-center shadow-xl">
                <svg viewBox="0 0 64 64" className="w-14 h-14" fill="none">
                  <path d="M32 4 L56 16 L56 36 C56 50 44 60 32 62 C20 60 8 50 8 36 L8 16 Z" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
                  <path d="M32 12 L50 21 L50 35 C50 45 42 53 32 55 C22 53 14 45 14 35 L14 21 Z" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
                  <text x="32" y="38" textAnchor="middle" fill="white" fontSize="22" fontWeight="bold" fontFamily="serif">S</text>
                  <path d="M22 44 L42 44" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-[10px] font-black text-[#1E3A8A] uppercase tracking-widest text-center">Est. Society</span>
            </div>

            {/* Content */}
            <div className="flex-1">
              <p className="text-[#F59E0B] text-xs font-bold uppercase tracking-[0.15em] mb-1">Under the Aegis of</p>
              <h3 className="font-extrabold text-[#1E293B] text-2xl mb-1">Sree Balajee Education Society</h3>
              <p className="text-[#475569] text-sm leading-relaxed mb-5 max-w-2xl">
                Fort City School is managed by Sree Balajee Education Society, a dedicated educational
                trust committed to providing quality education to students in Vizianagaram and the
                surrounding regions of Andhra Pradesh.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'CBSE Affiliated', icon: '🎓' },
                  { label: 'NEP 2020 Aligned', icon: '📘' },
                  { label: 'Affiliation ID: 130394', icon: '🪪' },
                  { label: 'Co-Educational', icon: '👫' },
                  { label: 'English Medium', icon: '🌐' },
                ].map((tag) => (
                  <span key={tag.label} className="flex items-center gap-1.5 px-3 py-1.5 bg-[#F0F4FF] text-[#1E3A8A] rounded-lg text-xs font-semibold border border-[#BFDBFE]">
                    <span>{tag.icon}</span> {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              transition={{ type: 'spring', damping: 20, stiffness: 260 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-3xl w-full overflow-hidden max-h-[92vh] flex flex-col"
            >
              <div className="h-1.5 w-full bg-[#1E3A8A] shrink-0" />
              <div className="flex flex-col md:flex-row overflow-hidden flex-1 min-h-0">
                <div className="md:w-5/12 w-full aspect-[4/3] md:aspect-auto md:min-h-[260px] relative overflow-hidden shrink-0">
                  <Avatar person={selected.person} index={selected.index} size="large" />
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-5 left-5">
                    <p className="text-white font-bold text-base leading-tight">{selected.person.name}</p>
                    <p className="text-[#F59E0B] text-xs font-bold tracking-widest uppercase mt-0.5">{selected.person.role}</p>
                  </div>
                </div>
                <div className="md:w-7/12 bg-[#F8FAFC] p-5 sm:p-7 flex flex-col overflow-y-auto">
                  <div className="space-y-3 flex-1">
                    {selected.person.message.map((para, idx) => {
                      const isBold = para.startsWith('BOLD|')
                      const text = isBold ? para.slice(5) : para
                      return (
                        <p key={idx} className={`text-sm leading-relaxed ${isBold ? 'font-bold text-[#1E293B]' : 'text-[#475569]'}`}>{text}</p>
                      )
                    })}
                  </div>
                  <div className="mt-6 flex justify-center shrink-0">
                    <button
                      onClick={() => setSelected(null)}
                      className="relative flex items-center gap-2 px-8 py-2.5 rounded-xl text-sm font-bold text-white overflow-hidden group"
                      style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)' }}
                    >
                      <span className="absolute inset-0 bg-[#F59E0B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="relative z-10">Close</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
