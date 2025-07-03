import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Servicetwo from './sections/Servicetwo'
import About from './sections/About'
import Works from './sections/Works'
import Techstack from './sections/Techstack'
import Experience from './sections/Experience'
import Summary from './sections/Summary'
import Contact from './sections/Contact'

function App() {
  return (
    <div className='relative w-screen min-h-screen overflow-x-auto'>
      <Navbar/>
      <Hero/>
      <Services/>
      <Servicetwo/>
      <About/>
      <Techstack/>
      <Works/>
      <Experience/>
      <Summary/>
      <Contact/>
    </div>
  )
}

export default App



