import React, { useRef } from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Experience from './sections/Experience'
import ScrollToTop from './components/ScrollToTop'
import AlertModal from './components/AlertModal '

const App = () => {
  const contactRef = useRef(null);
  return (
    <main className='max-w-7xl mx-auto relative'>
        <Navbar />
        <Hero />
        {/* <AlertModal isOpen={true} message="This is the message" /> */}
        <About contactRef={contactRef} />
        <Projects />
        <Clients />
        <Experience />
        <Contact ref={contactRef} />
        <ScrollToTop />
        <Footer />
    </main>
  )
}

export default App