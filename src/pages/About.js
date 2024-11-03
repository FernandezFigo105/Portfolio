import React, { useEffect, useRef, useState } from 'react';
import Logo from '../Frame 36758.jpg';
import './About.css';

const About = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const [imageStyle, setImageStyle] = useState({});
  const [textStyle, setTextStyle] = useState({});
  const maxImageTranslate = 250; 
  const maxTextTranslate = -250;

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current && textRef.current) {
        const imageRect = imageRef.current.getBoundingClientRect();
        const textRect = textRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate how far each element is from the viewport top
        const imageProgress = Math.min(1, Math.max(0, 1 - imageRect.top / windowHeight));
        const textProgress = Math.min(1, Math.max(0, 1 - textRect.top / windowHeight));

        // Set styles based on scroll progress only for large devices
        const isLargeDevice = window.innerWidth >= 1024; // Adjust this value based on your breakpoint
        if (isLargeDevice) {
          setImageStyle({
            transform: `translateX(${maxImageTranslate * imageProgress}px)`, // Moves image right
            opacity: 1,
          });
          setTextStyle({
            transform: `translateX(${maxTextTranslate * imageProgress}px)`, // Moves text left
            opacity: 1,
          });
        } else {
          // Reset styles for small devices
          setImageStyle({
            transform: `translateX(0px)`, // No movement
            opacity: 1,
          });
          setTextStyle({
            transform: `translateX(0px)`, // No movement
            opacity: 1,
          });
        }
      }
    };

    // Initial trigger to set positions on load
    handleScroll();

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='min-h-screen w-full bg-[#F7F7F7] flex flex-col lg:flex-row items-center z-50'>
      <div
        ref={imageRef}
        className='w-[150px] lg:w-[300px] h-auto flex justify-center my-[20px] lg:ml-[50px] lg:scroll-animate-right'
        style={imageStyle}
      >
        <img className='w-full h-auto max-w-[300px] lg:max-w-full' src={Logo} alt='Logo' />
      </div>

      <div
        ref={textRef}
        className="lg:scroll-animate-left justify-center lg:justify-end ml-auto p-4 lg:p-0 px-10 lg:mr-[50px] lg:max-w-[600px]"
        style={textStyle}
      >
        <h2 className="text-base text-[14.591px] lg:text-[21.97px] font-Figtree text-left">
          <span className="text-[#FA7772]">Hey there!</span> I'm Christopher
          Devar.<br /> A final year design student at MITSD Pune
          <br />
          Design has become my way of balancing my <br />
          creativity with my logical-analytical-overthinking side. <br />I
          enjoy working on projects that are result-driven. <br />I am hungry
          for working in prolific environments <br />
          where I can contribute and expand my skillset.
          <div>
            <span>Let's meet!</span>
          </div>
        </h2>
      </div>
    </div>
  );
};

export default About;
