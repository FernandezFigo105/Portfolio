import React from 'react';
import Logo from '../Frame 36758.jpg';

const About = () => {
  return (
    <div className='min-h-screen bg-[#F7F7F7] flex flex-row items-center '>
      <div className='ml-[300px]'>
        <img src={Logo} className='w-[400px] h-[320px] '></img>
      </div>
      <div className=' w-full px-[0px]'>
        <h2 className=' text-[21.97px] pr-[500px] ml-[50px] text-left'>
        <span className='text-[#FA7772]'>Hey there!</span> I'm Christopher DevarA final year design student at MITSD Pune
        Design has become my way of balancing my creativity with my logical-analytical-overthinking side. I enjoy working on projects that are result-driven. I am hungry for working in prolific environments where I can contribute and expand my skillset. 
        <div><span className=' '>Let's meet!</span></div>
        </h2>
      </div>
    </div>
  )
}

export default About;