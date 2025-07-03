import { useRef } from 'react'
import AnimatedHeaderSection from '../components/AnimatedHeaderSection';
import {  motion,useInView } from 'framer-motion';
import { media } from '../assets/constants';
import { Icon } from '@iconify/react/dist/iconify.js';

function Contact() {
    const contactRef = useRef();
    const isInView = useInView(contactRef,{margin:'-100px'})
    const text = `Open to collaborate and turn your thoughts
                  into code!`
    return (
        <section className='rounded-4xl min-h-screen bg-black'>
            <AnimatedHeaderSection
            subTitle={'~ dont just scroll - say hello! ~'}
            title={'contact'}
            textColor={'text-white'}
            text={text}/>
            <div ref={contactRef} id='contact' className="h-full max-w-[1366px] gap-12 mx-auto px-12 flex items-center justify-center">
                <div className="text-container text-white flex-1 flex flex-col gap-10 pb-5">
                    <h1 className='text-4xl font-bold leading-20 uppercase tracking-widest font-mono'>Let's build something <span className='tracking-widest lowercase text-cyan-500'>Impactful</span> together!</h1>
                    <div className="item">
                        <h1 className='font-bold text-md tracking-widest uppercase'>E-Mail</h1>
                        <span className='font-normal text-white/40'>mishramilan683@gmail.com</span>
                    </div>
                    <div className="item flex flex-col gap-6 mt-4">
                        <h1 className='font-bold text-md tracking-widest uppercase'>Socials</h1>
                         <div className="flex flex-row gap-6">
                        {media.map((social,index)=>(
                            <a key={index} href={social.url} target='_blank' rel='noopener noreferrer' className='cursor-pointer'>
                                <Icon icon={social.icon} className='w-10 h-10'/>
                            </a>
                        ))}
                        </div>
                    </div>
                    <div className="item flex flex-col gap-5">
                        <h1 className='font-bold text-md tracking-widest uppercase'>Blogs</h1>
                        <a href='https://dev.to/milan_mishra_554c5e235edb' target='_blank' rel='noopener noreferrer' className='cursor-pointer'>
                        <Icon icon='material-symbols:logo-dev' className='w-10 h-10'/>
                        </a>
                    </div>
                </div>
                <div className="form-container flex-1 text-white flex flex-col gap-5 relative">
                    <motion.div className="phone absolute mx-auto overflow-x-hidden" initial={{opacity:1}} whileInView={{opacity:0}} transition={{delay:2,duration:1}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
                        <motion.path stroke='#00ffff' initial={{pathLength:0}} animate={isInView && {pathLength:1}} transition={{ duration: 3, ease: "easeInOut" }} fill="none" d="M413.72 19.395v98.64l-46.116 46.117l-34.198-34.2l-6.607 6.61l-141.52 141.516l113.513 113.51l-52.775 52.773l.002 50.31h18.687v-42.568l47.3-47.3l21.4 21.4l148.122-148.124l-60.165-60.164l67.447-67.45V19.395h-18.687v123.33L408.148 204.7l-27.332-27.333l51.59-51.59V19.395zM19.36 30.303V48.99h186.607l44.254 44.254a29.6 29.6 0 0 0-4.032 14.947c0 16.422 13.312 29.736 29.732 29.736s29.732-13.314 29.732-29.735s-13.312-29.73-29.732-29.73c-4.143 0-8.088.85-11.672 2.382l-50.54-50.54zm0 55.478v18.69l131.126.003l44.254 44.254a29.6 29.6 0 0 0-4.035 14.947c0 16.42 13.312 29.732 29.732 29.732s29.733-13.312 29.733-29.732s-13.312-29.733-29.732-29.733c-4.144 0-8.088.85-11.672 2.382l-50.54-50.54H19.362zm83.386 55.482l-83.385.002v18.69l75.646-.003l44.254 44.26a29.6 29.6 0 0 0-4.033 14.946c0 16.42 13.312 29.733 29.732 29.733s29.73-13.313 29.73-29.734s-13.31-29.734-29.73-29.734c-4.145 0-8.09.85-11.675 2.383zm230.66 15.12L455.1 278.08L333.406 399.77L211.71 278.08l121.696-121.695zm-1.254 27.388l-94.574 94.574l95.012 95.015l13.215-13.214l-81.797-81.8l81.36-81.362zm-312.79 21.558v51.207l160.13 160.13v78.005h18.69V384.146L19.362 205.328zm346.51 8.397L352.66 226.94l51.48 51.482l-51.77 51.77l13.218 13.214l64.982-64.984l-64.695-64.697zm-29.93 33.16c-17.45 0-31.592 14.147-31.592 31.594c0 17.445 14.143 31.59 31.59 31.59c17.45 0 31.593-14.145 31.593-31.59c0-17.45-14.143-31.595-31.592-31.595zM19.36 295.35v51.207l94.886 94.88v53.233h18.688v-85.75L19.362 295.35zm427.378 73.154c-16.42 0-29.732 13.312-29.732 29.732s13.312 29.735 29.732 29.735c3.994 0 7.802-.794 11.28-2.222l36.62 36.615v-26.427l-22.402-22.4a29.6 29.6 0 0 0 4.237-15.3c0-16.42-13.314-29.732-29.735-29.732zM19.36 386.19v51.21l31.294 31.29l-.002 25.982H69.34l.006-58.496zm371.902 37.796c-16.42 0-29.733 13.312-29.733 29.733s13.31 29.73 29.732 29.73c3.513 0 6.882-.612 10.01-1.73l12.955 12.95h26.43l-24.58-24.578a29.6 29.6 0 0 0 4.917-16.373c0-16.422-13.312-29.734-29.732-29.734z"/>
                        </svg>
                    </motion.div>
                    <motion.form className='flex flex-col gap-5 pb-5' initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:3,duration:1}}>
                        <input className='p-5 pr-5 bg-transparent border-b-2 border-b-white' type='text' required placeholder='Enter your name'/>
                        <input className='p-5 bg-transparent border-b-2 border-b-white' type="email" required placeholder='Enter your email'/>
                        <textarea className='border-b-2 p-7 bg-transparent border-b-white' rows={8} placeholder="Hi,I'm Milan,..."/>
                        <button className='p-5 bg-white hover:bg-white/40 rounded-full cursor-pointer'>
                            <a>
                                <h1 className='text-black tracking-widest uppercase text-md text-bold'>Submit</h1>
                            </a>
                        </button>
                    </motion.form>
                </div>
            </div>
            <div className="h-10 w-full px-10 md:px-16 rounded-md bg-white">
                <p className='text-center text-black/40 tracking-widest uppercase w-full'>All rights reserved @ 2025</p>
            </div>
        </section>
    )
}

export default Contact
