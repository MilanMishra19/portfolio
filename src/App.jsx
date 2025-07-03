import React, { Suspense } from 'react';
import Navbar from './sections/Navbar'; // keep this static (loads immediately)

const Hero = React.lazy(() => import('./sections/Hero'));
const Services = React.lazy(() => import('./sections/Services'));
const Servicetwo = React.lazy(() => import('./sections/Servicetwo'));
const About = React.lazy(() => import('./sections/About'));
const Works = React.lazy(() => import('./sections/Works'));
const Techstack = React.lazy(() => import('./sections/Techstack'));
const Experience = React.lazy(() => import('./sections/Experience'));
const Summary = React.lazy(() => import('./sections/Summary'));
const Contact = React.lazy(() => import('./sections/Contact'));

function App() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
        <Hero />
        <Services />
        <Servicetwo />
        <About />
        <Techstack />
        <Works />
        <Experience />
        <Summary />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
