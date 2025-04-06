import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import ProjectShowcase from './components/ProjectShowcase'
import ContactSection from './components/ContactSection'
import HeroSection from './components/HeroSection'
// import ResumePopup from './components/ResumePopup'
const App = () => {
  return (
    <div>
        
        <Navbar />
       
         <HeroSection />
        <AboutMe />
        {/* Add more components as needed */}
        <ProjectShowcase />
        {/* Add more components as needed */}
        <ContactSection />
        {/* Add more components as needed */}
        {/* Footer component */}
        <Footer />
    </div>
  )
}

export default App