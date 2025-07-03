import React from 'react'
import Marque from '../components/Marque'

function Summary() {
    const items = ["Innovation","Precision","Perfection","Collaboration","Trust"];
    const items2 = ["Learn","Grow","Build","Achieve"]
    return (
        <section className='flex flex-col min-h-screen items-center justify-center gap-12 mt-16'>
            <Marque items={items}/>
            <div className="overflow-hidden font-extralight text-center text-4xl sm:text-5xl md:text-6xl lg:text-8xl italic">
                <p>"Every project <br/>is a <span className='font-bold'>chance</span> to push the <span className='font-bold'>boundaries</span><br/> of what <span className='text-cyan-500'>tech</span> can do."</p>
            </div>
            <Marque items={items2} className='bg-black/10 text-black'/>
        </section>
    )
}

export default Summary
