import React from 'react'
import AnimatedHeaderSection from '../components/AnimatedHeaderSection'
import { servicesData } from "../assets/constants";
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Servicetwo() {
    const text = `Building scalable sytems for your needs and requirements.
                  From complex data pipelines, to full-stack apps.`
    const serviceRefs = useRef([]);
    const isDesktop = useMediaQuery({minWidth:"48rem"});
    useGSAP(()=>{
        serviceRefs.current.forEach((el)=>{
            if(!el) return;
            gsap.from(el,{
                y:200,
                scrollTrigger:{
                    trigger:el,
                    start:"top 80%",
                },
                duration:1,
                ease:"circ.out"
            });
        });
    },[]);
    return (
        <section id="services" className="min-h-screen bg-black rounded-t-4xl relative">
            <AnimatedHeaderSection
            subTitle={"~Empowering Ideas, Engineering Excellence~"}
            text={text}
            title={"Services"}
            textColor={"text-white"}
            withScrollTrigger={true}
            />
            {servicesData.map((service,index)=>(
            <div
  key={index}
  ref={(el) => (serviceRefs.current[index] = el)}
  className="sticky px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/40"
  style={
    isDesktop
      ? {
          top: `${index * 5}em`,
          marginBottom: `${(servicesData.length - index - 1) * 5}em`,
        }
      : { top: 0 }
  }
>
                <div className="flex items-center justify-between gap-4 font-light">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-4xl lg:text-5xl">{service.title}</h2>
                        <p className="text-xl tracking-widest lg:text-2xl leading-relaxed text-pretty text-white/50">{service.description}</p>
                        <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
                        {service.items.map((item,itemIndex)=>(
                            <div key={`item-${index}-${itemIndex}`} className="">
                                <h3 className="flex">
                                    <span className="mr-12 text-lg text-white/30">{itemIndex+1}</span>
                                    {item.title}
                                </h3>
                                {itemIndex < service.items.length -1 && (
                                <div className="w-full h-px my-2 bg-white/30"/>
                                )}
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
          ))}
        </section>
    )
}

export default Servicetwo;
