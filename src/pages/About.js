import React from 'react';
import Logo from '../Frame 36758.jpg';
import './About.css';

const About = () => {
  return (
    <div id="about-me" className='w-full bg-[#F7F7F7] flex flex-col justify-center items-center lg:flex-row lg:justify-center lg:items-center px-4 lg:px-0 pt-[10%] pb-[10%] '>
      <div className='w-[150px] lg:w-[300px] h-auto flex justify-center mt-0 lg:mt-0'>
        <img className='w-full h-auto max-w-[300px] lg:max-w-full' src={Logo} alt='Logo' />
      </div>

      <div className="text-center lg:text-left lg:max-w-[600px] w-full p-4 lg:p-0 mt-4 lg:mt-0 lg:ml-20">
        <h2 className="text-xs sm:text-sm md:text-base lg:text-[21.97px] font-Figtree leading-relaxed">
          <span className="text-[#FA7772]">Hey there!</span> I'm Christopher Devar.<br />
          A final year UX/UI design student at MITSD Pune
          <br /><br />
          Design has become my way of balancing my <br/>
          witty-creative-unorthodox side with my logical-analytical-overthinking side. 
          I enjoy working on projects that are result-driven. 
          I am hungry for working in prolific environments 
          where I can contribute and expand my skillset.
          <div className="mt-4">
            <span>Let's meet!</span>
          </div>
        </h2>
      </div>
    </div>
  );
};

export default About;