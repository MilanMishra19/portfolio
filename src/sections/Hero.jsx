import { useRef } from "react"
import AnimatedTextLines from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
function Hero() {
  const contextRef = useRef(null);
  const headerRef = useRef(null);
  const aboutText = `Versatile and detail-oriented engineer with hands-on experience in
                     building scalable web applications, end-to-end functionalities, and
                     architecting complex data pipelines.`;
  useGSAP(()=>{
    const tl = gsap.timeline();
    tl.from(contextRef.current,{
        y:"50vh",
        duration:1,
        ease:"circ.out"
    });
    tl.from(headerRef.current,{
        opacity:0,
        y:"200",
        duration:1,
        ease:"circ.out"
    },"<+0.2");
  },[]);
  return (
    <section id="home" className="flex flex-col justify-end min-h-screen bg-white text-black">
      <div
        ref={contextRef}
        className="w-full"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      >
        {/* New container for centralizing content and applying padding */}
        <div className="mx-auto px-4 sm:px-8 md:px-16 max-w-7xl"> {/* Added this wrapper div */}
          <div
            ref={headerRef}
            className="flex flex-col justify-center gap-12 pt-16 sm:gap-16"
          >
            <p className="text-sm font-light tracking-[0.5rem] uppercase">
              404 page not found
            </p>

            <h1 className="flex flex-col flex-wrap gap-6 uppercase text-4xl font-medium sm:text-[126px] leading-tight sm:leading-[8rem] lg:leading-[10rem] md:block">
              Milan Mishra
            </h1>
          </div>

          <div className="relative text-black">
            <div className="absolute inset-x-0 border-t-2" />
            <div className="py-10 pt-10 sm:py-20 text-end">
              <AnimatedTextLines className="font-light uppercase text-sm lg:text-xl" text={aboutText}/>
            </div>
          </div>
        </div> {/* End of new wrapper div */}
      </div>
    </section>
  );
}

export default Hero;