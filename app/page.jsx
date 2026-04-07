import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Topics from '../components/Topics'
import Speakers from '../components/Speakers'
// import Schedule from '../components/Schedule'
import Participants from '../components/Participants'
import DataSoftware from '../components/DataSoftware'
import Registration from '../components/Registration'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Topics />
        <Speakers />
        {/* <Schedule /> */}
        <Participants />
        <DataSoftware />
        <Registration />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
