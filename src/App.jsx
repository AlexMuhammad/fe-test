import './App.css'
import Footer from './components/molecules/Footer'
import Navbar from './components/molecules/Navbar'
import { CoreSection, HeroSection, SliderSection, SpecialitySection } from './components/molecules/Sections'

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <SliderSection />
      <CoreSection />
      <SpecialitySection />
      <Footer />
    </>
  )
}

export default App
