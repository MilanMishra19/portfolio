import React, { useRef } from 'react'
import AnimatedHeaderSection from '../components/AnimatedHeaderSection'
import AnimatedTextLines from '../components/AnimatedTextLines';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function About() {
    useGSAP(()=>{
        gsap.to("#about",{
            scale:0.95,
            scrollTrigger:{
                trigger:"#about",
                start:"bottom 80%",
                end:"bottom 20%",
                scrub:true,
            },
            ease:"power1.inOut",
        });
        gsap.set(imgRef.current,{
            opacity:0,
        });
        gsap.to(imgRef.current,{
            opacity:100,
            duration:2,
            ease:"power4.out",
            scrollTrigger:{
                trigger:imgRef.current,
            }
        });
    });
    const imgRef = useRef(null);
    const text = `.Dedicated to deliver excellence, building scalable systems and solving real world problems through technology.`;
    const aboutText = `Hello there! I am Milan, currently pursuing Computer Engineering at IIIT Bhubaneshwar.
                       I have build AI-Driven Data Visualization systems with complex DSL compiler designs optimizing
                       query processing by 70%. Additionally I have also engineered scalable backend systems and developed end-to-end
                       applications merging functionality with impact. I approach every project with curiosity, clarity, 
                       and a problem-solver's mindset. Eager to learn new things, collaborate with great mindsets and deliver results which
                       have an impact on the society.`
    return (
        <section id='about' className="min-h-screen bg-black pt-10 overflow-hidden rounded-b-4xl">
            <AnimatedHeaderSection 
            title={'About'}
            text={text}
            textColor={'text-white'}
            withScrollTrigger={true}/>
            <div className="flex flex-col lg:flex-row text-white/50 items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:text-3xl md:text-2xl">
            <img ref={imgRef} src="/mils.jpeg" alt='main' className='rounded-3xl w-md brightness-50'/>
            <AnimatedTextLines text={aboutText} className='text-xl w-full'/>
            </div>
        </section>
    )
}

export default About
