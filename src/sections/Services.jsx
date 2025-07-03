import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React from 'react'

gsap.registerPlugin(ScrollTrigger);
function Services() {
    useGSAP(()=>{
        gsap.to("#title-service-1",{
            xPercent:20,
            scrollTrigger:{
                target:"#title-service-1",
                scrub:true,
            }
        });
        gsap.to("#title-service-2",{
            xPercent:-30,
            scrollTrigger:{
                target:"#title-service-2",
                scrub:true,
            }
        });
        gsap.to("#title-service-3",{
            xPercent:10,
            scrollTrigger:{
                target:"#title-service-3",
                scrub:true,
            }
        });
        gsap.to("#title-service-4",{
            xPercent:-80,
            scrollTrigger:{
                target:"#title-service-4",
                scrub:true,
            }
        });
    })
    return (
        <section id='service' className="mt-20 overflow-hidden font-light leading-snug text-center mb-42 text-4xl sm:text-5xl md:text-5xl lg:text-8xl">
            <div id='title-service-1' className="">
                <p>Architecture</p>
            </div>
            <div id='title-service-2' className="flex items-center justify-center gap-3 translate-x-16">
                <p className='font-normal'>Development</p>
                <div className='w-10 h-1 md:w-32 bg-cyan-500'/>
                <p>Deployment</p>
            </div>
            <div id='title-service-3' className="flex items-center justify-center gap-3 -translate-x-48">
                <p>Data pipeline</p>
                <div className='w-10 h-1 md:w-32 bg-cyan-500'/>
                <p className='italic'>Full Stack</p>
                <div className='w-10 h-1 md:w-32 bg-cyan-500'/>
                <p>AI/ML</p>
            </div>
            <div id='title-service-4' className="translate-x-48">
                <p>Databases</p>
            </div>
        </section>
    )
}

export default Services
