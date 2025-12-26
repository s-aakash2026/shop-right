import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from("#hero-text", { y: 100, opacity: 0, duration: 1, ease: "power4.out" })
        .from("#hero-sub", { y: 50, opacity: 0, duration: 0.8 }, "-=0.5")
        .from("#hero-btn", { scale: 0.8, opacity: 0, duration: 0.5 }, "-=0.3");
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} className="hero min-h-[80vh] bg-secondary pt-16" data-scroll-section>
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 id="hero-text" className="text-5xl lg:text-7xl font-bold text-primary mb-6">
            Sustainable Living,<br />Elevated.
          </h1>
          <p id="hero-sub" className="py-6 text-xl text-dark">
            Premium bamboo kitchenware for the eco-conscious home. 
            Experience nature's durability with modern design.
          </p>
          <button id="hero-btn" className="btn bg-primary text-white hover:bg-dark border-none px-8 text-lg rounded-full">
            Shop Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
