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
  const [chistoOpacity, setChistoOpacity] = useState(1);
  const glassesRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  const GLASSES_STOP_SCROLL = 40;
  const FADE_START = 100;
  const FADE_END = 300;
  const IMG_FADE_START= 300;
  const IMG_FADE_END=500; // Updated for faster fade

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
      const scrollPos = window.scrollY;
      setScrollY(scrollPos);

      if (scrollPos >= FADE_START && scrollPos <= FADE_END) {
        setChistoOpacity(1 - (scrollPos - FADE_START) / (FADE_END - FADE_START));
      } else if (scrollPos > FADE_END) {
        setChistoOpacity(0);
      } else {
        setChistoOpacity(1);
      }

      if (scrollPos >= FADE_START) {
        setStartEllipseAnimation(true);
        setStartRectangleAnimation(true);
        setStartTriangleAnimation(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='bg-[#231E1F] flex flex-col items-center min-h-screen'>
      <Hamburger />
      <div 
        className='flex flex-col justify-between items-center min-h-screen w-full'
        style={{
          transform: `translateY(${scrollY < FADE_START ? 0 : scrollY * 0.3}px)`,
          transition: 'transform 0.3s ease',
        }}
      >
        {/* Sticky text container */}
        <div
          className='text-center font-Figtree mt-[220px] lg:mt-[150px] sticky top-0'
          style={{
            opacity: scrollY >= FADE_START ? Math.max(1 - (scrollY - FADE_START) / (FADE_END - FADE_START), 0) : 1,
            transition: 'opacity 0.2s ease', // Updated for faster fade
          }}
        >
          <h1 className='text-[#EAEAEA] font-semibold font-figtree text-[28px] lg:text-[48.17px]'>
            Sup! <span className='font-normal'>I'm Christopher</span>
          </h1>
          <h2 className='text-[#A7A7A7] font-bonheur text-[22px] lg:text-[45px] opacity-[60%]'>
            Scroll to learn a bit about me
          </h2>
        </div>

        <div className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[300px] flex-shrink-0">
          <img
            src={Chisto}
            className="absolute bottom-0 left-0 z-30 w-[90%] lg:w-[100%]"
            alt="Chisto"
            style={{
              transform: `translateY(${scrollY < IMG_FADE_START ? 0 : scrollY * 0.1}px)`,
              opacity: scrollY >= IMG_FADE_START ? Math.max(1 - (scrollY - IMG_FADE_START) / (IMG_FADE_END - IMG_FADE_START), 0) : 1,
              transition: 'transform 0.3s ease, opacity 0.3s ease',
            }}
          />

          {chistoOpacity > 0 && (
            <>
<img
  src={Glasses}
  ref={glassesRef}
  className={`absolute top-[120px] lg:top-[-10px] left-[70px] lg:bottom-[85px] w-[40%] lg:left-[135px] lg:w-[40%] z-40 transition-transform duration-300 ${
    translateOnce ? 'translate-y-5' : ''
  }`}
  alt="Glasses"
  style={{
    transform: `translateY(${scrollY < GLASSES_STOP_SCROLL ? scrollY * 0.2 : scrollY * 0.1}px)`,
    opacity: scrollY >= IMG_FADE_START 
      ? Math.max(1 - (scrollY - IMG_FADE_START) / (IMG_FADE_END + 200 - IMG_FADE_START), 0) 
      : 1, // Extended fade range
    transition: 'transform 0.3s ease, opacity 0.6s ease', // Slower opacity transition
  }}
/>


              <img
                src={Ellipse}
                className="absolute bottom-0 left-[60px] z-20 w-[60%] lg:left-[100px] lg:bottom-[0px] lg:w-[65%]"
                style={{
                  opacity: scrollY < FADE_START ? 1 : 0,
                  transform: startEllipseAnimation
                    ? `translateY(${scrollY * 0.4}px) scale(${Math.max(1 - scrollY * 0.002, 0)}) rotate(${scrollY * 0.1}deg)`
                    : 'translateY(0px) scale(1) rotate(0deg)',
                  transition: 'transform 0.3s ease, opacity 0.3s ease',
                }}
                alt="Ellipse"
              />

              <img
                src={Rectangle}
                className="absolute bottom-0 left-[-20px] lg:left-[-110px] lg:top-[80px] w-[50%] lg:w-[70%] z-10"
                style={{
                  opacity: scrollY < FADE_START ? 1 : 0,
                  transform: startRectangleAnimation
                    ? `rotate(${scrollY * 0.3}deg) scale(${Math.max(1 - scrollY * 0.002, 0)})`
                    : 'rotate(0deg) scale(1)',
                  transformOrigin: '100% 100%',
                  transition: 'transform 0.3s ease, opacity 0.3s ease',
                }}
                alt="Rectangle"
              />

              <img
                src={Triangle}
                className="absolute bottom-0 left-[190px] lg:left-[370px] lg:top-[80px] w-[40%] lg:w-[60%] z-0"
                style={{
                  opacity: scrollY < FADE_START ? 1 : 0,
                  transform: startTriangleAnimation
                    ? `rotate(-${scrollY * 0.3}deg) scale(${Math.max(1 - scrollY * 0.002, 0)})`
                    : 'rotate(0deg) scale(1)',
                  transformOrigin: '0% 100%',
                  transition: 'transform 0.3s ease, opacity 0.3s ease',
                }}
                alt="Triangle"
              />
            </>
          )}
        </div>
      </div>

      <About />
      <Project />
    </div>
  );
};

export default Home;
