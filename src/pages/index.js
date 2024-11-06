import React, { useState, useRef, useEffect } from 'react';
import About from './About';
import Project from '../pages/Projects.js';
import Ellipse from '../assets/Ellipse 762.png';
import Rectangle from '../assets/Rectangle 2073.png';
import Triangle from '../assets/Triangle.png';
import Glasses from '../assets/Glasses.svg';
import Chisto from '../assets/chustopisto 3.png';
import Hamburger from './Hamburger.js';

const Home = () => {
  const [translateOnce, setTranslateOnce] = useState(false);
  const [startEllipseAnimation, setStartEllipseAnimation] = useState(false);
  const [startRectangleAnimation, setStartRectangleAnimation] = useState(false);
  const [startTriangleAnimation, setStartTriangleAnimation] = useState(false);
  const glassesRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  const GLASSES_STOP_SCROLL = 40; // Threshold scroll position for glasses to stop moving

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTranslateOnce(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (glassesRef.current) observer.observe(glassesRef.current);

    return () => {
      if (glassesRef.current) observer.unobserve(glassesRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Start shape animations sequentially with delays once glasses stop moving
      if (window.scrollY >= GLASSES_STOP_SCROLL) {
        setTimeout(() => {
          setStartEllipseAnimation(true);
        }, 1000); // 5-second delay for Ellipse

        setTimeout(() => {
          setStartRectangleAnimation(true);
        }, 1000); // 6-second delay for Rectangle

        setTimeout(() => {
          setStartTriangleAnimation(true);
        }, 1000); // 7-second delay for Triangle
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='bg-[#231E1F] flex flex-col items-center min-h-screen '>
      <Hamburger />
      <div className='flex flex-col justify-between items-center min-h-screen w-full'>
        <div className='text-center font-Figtree mt-[220px] lg:mt-[150px]'>
          <h1 className='text-[#EAEAEA] font-semibold font-figtree text-[28px] lg:text-[48.17px]'>
            Sup! <span className='font-normal'>I'm Christopher</span>
          </h1>
          <h2 className='text-[#A7A7A7] font-bonheur text-[22px] lg:text-[45px] opacity-[60%]'>
            Scroll to learn a bit about me
          </h2>
        </div>

        {/* Image layering with absolute positioning */}
        <div className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] flex-shrink-0">
          <img src={Chisto} className="absolute bottom-0 left-0 z-30 w-[90%] lg:w-[100%]" alt="Chisto" />

          <img
            src={Glasses}
            ref={glassesRef}
            className={`absolute top-[120px] lg:top-[180px] left-[70px] lg:bottom-[85px] w-[40%] lg:left-[135px] lg:w-[40%] z-40 transition-transform duration-300 ${translateOnce ? 'translate-y-5' : ''}`}
            alt="Glasses"
            style={{
              transform: `translateY(${scrollY < GLASSES_STOP_SCROLL ? scrollY * 0.4 : GLASSES_STOP_SCROLL * 0.4}px)`,
              transition: 'transform 0.3s ease',
            }}
          />

          <img
            src={Ellipse}
            className="absolute bottom-0 left-[60px] z-20 w-[60%] lg:left-[100px] lg:bottom-[0px] lg:w-[65%]"
            style={{
              transform: startEllipseAnimation
                ? `translateY(${scrollY * 0.4}px) scale(${Math.max(1 - scrollY * 0.001, 0)})`
                : 'translateY(0px) scale(1)',
              transition: 'transform 0.3s ease',
            }}
            alt="Ellipse"
          />

          <img
            src={Rectangle}
            className="absolute bottom-0 left-[-20px] lg:left-[-110px] lg:top-[280px] w-[50%] lg:w-[70%] z-10"
            style={{
              transform: startRectangleAnimation
                ? `rotate(${scrollY * 0.1}deg) scale(${Math.max(1 - scrollY * 0.001, 0)})`
                : 'rotate(0deg) scale(1)',
              transformOrigin: '100% 100%',
            }}
            alt="Rectangle"
          />

          <img
            src={Triangle}
            className="absolute bottom-0 left-[190px] lg:left-[370px] lg:top-[280px] w-[40%] lg:w-[60%] z-0"
            style={{
              transform: startTriangleAnimation
                ? `rotate(-${scrollY * 0.1}deg) scale(${Math.max(1 - scrollY * 0.001, 0)})`
                : 'rotate(0deg) scale(1)',
              transformOrigin: '0% 100%',
            }}
            alt="Triangle"
          />
        </div>
      </div>

      <About />
      <Project />
    </div>
  );
};

export default Home;
