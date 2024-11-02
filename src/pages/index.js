import React from 'react';
import Logo from '../chisto.png';
import About from './About';

const Home = () => {
  return (
    <div className=' bg-[#231E1F] flex flex-col items-center align-bottom pt-[20%]'>
      <div className=''>
        <h1 className='text-[#EAEAEA] text-[48.17px] '>
          Hey, I'm Christopher
        </h1>
        <h2 className='text-[#A7A7A7] text-[23.302px]'>
          Scroll to learn a bit about me
        </h2>
      <div className=''>
        <img src={Logo} className=''></img>
      </div>
      </div>
      <About/>
    </div>
  )
}

export default Home;