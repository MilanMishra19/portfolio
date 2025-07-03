import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

gsap.registerPlugin(ScrollTrigger);
function Techstack() {
    useGSAP(() => {
  gsap.to("#title-tech-1", {
    xPercent: 20,
    scrollTrigger: {
      trigger: "#title-tech-1",
      start: "top 80%",
      scrub: true,
    },
  });
  gsap.to("#title-tech-2", {
    xPercent: -50,
    scrollTrigger: {
      trigger: "#title-tech-2",
      start: "top 80%",
      scrub: true,
    },
  });
  gsap.to("#title-tech-3", {
    xPercent: 100,
    scrollTrigger: {
      trigger: "#title-tech-3",
      start: "top 80%",
      scrub: true,
    },
  });
  gsap.to("#title-tech-4", {
    xPercent: -40,
    scrollTrigger: {
      trigger: "#title-tech-4",
      start: "top 80%",
      scrub: true,
    },
  });
}, []);

    return (
        <section id='tech' className="mt-20 overflow-hidden font-light leading-snug text-center mb-42 text-2xl sm:text-3xl md:text-3xl lg:text-5xl">
            <div id='title-tech-1' className="">
                <p>Tech Stack</p>
            </div>
            <div id='title-tech-2' className="flex items-center justify-center gap-3 translate-x-16">
                <p className='font-normal'>{"{"}Python{"}"}</p>
                <div className='w-5 h-1 md:w-16 bg-cyan-500'/>
                <p className='font-normal'>C/C++</p>
                <div className='w-5 h-1 md:w-16 bg-cyan-500'/>
                <p>Javascript</p>
                <div className='w-5 h-1 md:w-16 bg-cyan-500'/>
                <p>Typescript</p>
            </div>
            <div id='title-tech-3' className="flex items-center justify-center gap-3 -translate-x-48">
                <p className='font-normal'>Nextjs</p>
                <div className='w-5 h-1 md:w-16 bg-cyan-500'/>
                <p className='italic'>{"<"}Reactjs{">"}</p>
                <div className='w-5 h-1 md:w-16 bg-cyan-500'/>
                <p>Node.js</p>
                <div className='w-5 h-1 md:w-16 bg-cyan-500'/>
                <p className='font-normal'>Express.js</p>
                <div className='w-5 h-1 md:w-16 bg-cyan-500'/>
                <p>Pandas/NumPy</p>
            </div>
            <div id='title-tech-4' className="flex items-center justify-center -translate-x-48">
                <p>MongoDB</p>
                <div className='w-5 h-1 md:w-16 bg-cyan-500'/>
                <p>PostgreSQL</p>
                <div className='w-5 h-1 md:w-16 bg-cyan-500'/>
                <p>SQLite</p>
                <div className='w-5 h-1 md:w-16 bg-cyan-500'/>
                <p>MySQL</p>
            </div>
        </section>
    )
}

export default Techstack;