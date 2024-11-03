import React, { useState, useRef, useEffect } from 'react';
import About from './About';
import Project from '../pages/Projects.js';
import Ellipse from '../assets/Ellipse 762.png';
import Rectangle from '../assets/Rectangle 2073.png';
import Triangle from '../assets/Triangle.png';
import Glasses from '../assets/Glasses.svg';
import Chisto from '../assets/chustopisto 3.png';

const Home = () => {
  const [translateOnce, setTranslateOnce] = useState(false);
  const glassesRef = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTranslateOnce(true);
          observer.disconnect(); // Stop observing after the first trigger
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (glassesRef.current) observer.observe(glassesRef.current);

    return () => {
      if (glassesRef.current) observer.unobserve(glassesRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='bg-[#231E1F] flex flex-col items-center min-h-screen'>
      <div className='mt-[100px] text-center font-Figtree font-semibold'>
        <h1 className='text-[#EAEAEA] text-[28px] lg:text-[48.17px]'>
          Hey,<br /> I'm Christopher
        </h1>
        <h2 className='text-[#A7A7A7] text-[14px] lg:text-[23.302px]'>
          Scroll to learn a bit about me
        </h2>

        {/* Image layering with absolute positioning */}
        <div className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] mt-8">
          <img src={Chisto} className="absolute top-[80px] left-0 z-30 w-[90%] lg:w-[100%] lg:top-[60px]" alt="Chisto" />
          <img
            src={Glasses}
            ref={glassesRef}
            className={`absolute top-[140px] left-[70px] lg:top-[170px] w-[40%] lg:left-[140px] lg:w-[40%] z-40 transition-transform duration-300 ${hasScrolled ? 'translate-y-5' : ''}`}
            alt="Glasses"
          />
          <img
            src={Ellipse}
            className="absolute left-[60px] top-[100px] z-20 w-[50%] lg:left-[100px] lg:top-[150px] lg:w-[70%]"
            style={{
              transform: `translateY(${scrollY * 0.3}px) scale(${Math.max(1 - scrollY * 0.001, 0)})`,
              transition: 'transform 0.3s ease',
            }}
            alt="Ellipse"
          />
          <img
            src={Rectangle}
            className="absolute z-10 top-[180px] left-[-10px] lg:top-[250px] lg:left-[-100px] w-[40%] lg:w-[70%]"
            style={{
              transform: `rotate(${scrollY * 0.1}deg) scale(${Math.max(1 - scrollY * 0.001, 0)})`,
              transformOrigin: '100% 100%',
            }}
            alt="Rectangle"
          />
          <img
            src={Triangle}
            className="absolute z-0 top-[180px] left-[190px] lg:top-[250px] lg:left-[350px] lg:w-[70%] w-[30%]"
            style={{
              transform: `rotate(-${scrollY * 0.1}deg) scale(${Math.max(1 - scrollY * 0.001, 0)})`,
              transformOrigin: '0% 100%',
            }}
            alt="Triangle"
          />
        </div>
      </div>

      {/* Additional components */}
      <About />
      <Project />
    </div>
  );
};

export default Home;
