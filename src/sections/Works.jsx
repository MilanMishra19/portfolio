import React, { useRef, useState } from 'react'
import AnimatedHeaderSection from '../components/AnimatedHeaderSection'
import { projects } from '../assets/constants';
import { Icon } from '@iconify/react/dist/iconify.js';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Works() {
    const [currentIndex,setCurrentIndex] = useState(null);
    const previewRef = useRef(null);
    const mouse = useRef({x:0,y:0});
    const overlayRefs = useRef([]);
    const text = `From web apps to machine learning pipelines, these works reflect my journey of turning ideas into functional, user-centric digital products.`;
    const moveX = useRef(null);
    const moveY = useRef(null);
    useGSAP(()=>{
        moveX.current = gsap.quickTo(previewRef.current,"x",{
            duration:1.5,
            ease:"power3.out"
        });
        moveY.current = gsap.quickTo(previewRef.current,"y",{
            duration:2,
            ease:"power3.out"
        });
        gsap.from("#project",{
            y:100,
            opacity:0,
            delay:0.5,
            duration:1,
            stagger:0.3,
            ease:"back.out",
            scrollTrigger:{
                trigger:"#project",
            }
        })
    })
    const handleMouseEnter = (index) => {
        if(window.innerWidth < 768 ) return;
        setCurrentIndex(index);
        const el = overlayRefs.current[index];
        if(!el) return;
        gsap.killTweensOf(el);
        gsap.fromTo(el,{
            clipPath:"polygon(0 100%, 100% 100%, 100% 100%,0 100%)",
        },{clipPath:"polygon(0 0,100% 0,100% 100%,0% 100%)", duration:0.15, ease:"power2.out"});
        gsap.to(previewRef.current,{
            opacity:1,
            scale:1,
            duration:0.3,
            ease:"power2.out",
        });
    };
    const handleMouseLeave = (index) => {
        if(window.innerWidth < 768 ) return;
        setCurrentIndex(index);
        const el = overlayRefs.current[index];
        if(!el) return;
        gsap.killTweensOf(el);
        gsap.to(el,{
            clipPath:"polygon(0 100%, 100% 100%, 100% 100%,0 100%)",
            duration:0.2,
            ease:"power2.in"
        })
        gsap.to(previewRef.current,{
            opacity:0,
            scale:0.95,
            duration:0.3,
            ease:"power2.out",
        });
    };
    const handleMouseMove = (e) => {
        if(window.innerWidth < 768) return;
        mouse.current.x = e.clientX + 24;
        mouse.current.y = e.clientY + 24;
        moveX.current(mouse.current.x);
        moveY.current(mouse.current.y);
    }
    return (
        <section id='work' className='min-h-screen flex flex-col'>
            <AnimatedHeaderSection 
            subTitle={'~Some of my featured works~'}
            title={'Work'}
            text={text}
            textColor={'text-black'}
            withScrollTrigger={true}/>
            <div className="relative flex flex-col font-light" onMouseMove={handleMouseMove}>
                {projects.map((project,index)=>(
                    <div id='project' key={project.id} className="relative flex flex-col gap-1 py-5 cursor-pointer group md:gap-0" onMouseEnter={()=>handleMouseEnter(index)} onMouseLeave={()=>handleMouseLeave(index)}>
                        <div ref={(el)=>(overlayRefs.current[index]=el)} className='absolute inset-0 hidden md:block bg-black duration-200 -z-10 clip-path'/>

                        <div className="flex justify-between px-10 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white">
                            <h2 className='lg:text-3xl text-2xl leading-none'>{project.name}</h2>
                            <Icon icon="tabler:arrow-up-right" className='md:size-6 size-5' />
                        </div>
                        <div className='w-full h-0.5 bg-black/80'/>
                        <div className="flex px-10 text-xs leading-loose uppercase transition-all duration-500 md:text-sm gap-x-5 md:group-hover:px-12">
                            {project.frameworks.map((framework)=>(
                                <p key={framework.id} className="text-black transition-colors md:group-hover:text-white duration-500">{framework.name}</p>
                            ))}
                        </div>
                        <div className="relative flex items-center px-10 md:hidden h-[400px] justify-center">
                            <img src={project.bgImage} alt={`${project.name}-bg-img`} className='object-cover w-full rounded-md h-full brightness-50'/>
                            <img src={project.image} alt={`${project.name}-img`} className='absolute bg-center px-14 rounded-xl'/>
                        </div>
                    </div>
                ))}
                <div ref={previewRef} className="fixed -top-2/6 left-0 z-50 overflow-hidden border-8 border-black pointer-events-none w-[560px] md:block hidden opacity-0">
                    {currentIndex !== null && (
                        <img src={projects[currentIndex].image} alt='preview' className='object-cover w-full h-full'/>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Works
