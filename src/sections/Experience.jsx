import React from 'react'
import AnimatedHeaderSection from '../components/AnimatedHeaderSection'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import { experiences } from '../assets/constants';
function Experience() {
    const ExperienceCard = ({experience}) => (
        <VerticalTimelineElement contentStyle={{background:"#ffffff",color:"#000"}} contentArrowStyle={{borderRight:"7px solid #000000"}} date={experience.date} iconStyle={{background:experience.iconBg,border:"2px solid #00ffff"}}
        icon={<div className='flex justify-center items-center w-full h-full'>
            <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain'/>
        </div>}>
        <div>
            <h3 className='text-black text-[24px]'>{experience.title}</h3>
            <p className='text-[16px] font-semibold tracking-wider text-black/60' style={{margin:0}}>{experience.company_name}</p>
        </div>
        <ul className='space-y-2 mt-5 ml-5 list-disc'>
            {experience.points.map((point,index)=>(
                <li key={`experience-point.${index}`} className="text-black/40 text-[14px] pl-1 tracking-widest">
                    {point}
                </li>
            ))}
        </ul>
        </VerticalTimelineElement>
    )
    const text = `From backend logic to user-facing features, 
                  here’s how I contributed to real-world products and platforms.`
    return (
        <section id='experience' className='min-h-screen flex flex-col'>
            <AnimatedHeaderSection
            subTitle={'~Built, Led, Delivered - One project at a time'}
            title={'Professional Experience'}
            text={text}
            textColor={'text-black'}/>
            <div className="flex flex-col">
                <VerticalTimeline lineColor='#808080'>
                    {experiences.map((experience,index)=>(
                        <ExperienceCard key={index} experience={experience}/>
                    ))}
                </VerticalTimeline>
            </div>
        </section>
    )
}

export default Experience
