import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Academics from './components/Academics'
import Programs from './components/Programs'
import Facilities from './components/Facilities'
import CampusViewer from './components/CampusViewer'
import Achievements from './components/Achievements'
import Testimonials from './components/Testimonials'
import Wellbeing from './components/Wellbeing'
import Leadership from './components/Leadership'
import Admissions from './components/Admissions'
import Careers from './components/Careers'
import Contact from './components/Contact'
import TCIssues from './components/TCIssues'
import MandatoryDisclosure from './components/MandatoryDisclosure'
import SchoolCalendar from './components/SchoolCalendar'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Wellbeing />
      <Academics />
      <Programs />
      <Facilities />
      <CampusViewer />
      <Achievements />
      <Testimonials />
      <Leadership />
      <Admissions />
      <Careers />
      <TCIssues />
      <MandatoryDisclosure />
      <SchoolCalendar />
      <Contact />
      <Footer />
    </div>
  )
}
