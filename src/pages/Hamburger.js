import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import 'tailwindcss/tailwind.css';

const HamburgerIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=' z-50 flex justify-end items-center'>
      <button
        onClick={handleToggle}
        className="fixed right-0 top-16 mr-[50px] z-50 w-[60px] h-[60px] py-[18px] bg-black rounded-[10px] flex flex-col justify-between items-center focus:outline-none"
      >
        {/* Hamburger icon */}
        <div
          className={`w-8 h-1 rounded-full bg-[#ffffff] transition-all duration-300 ${isOpen ? 'transform rotate-45 translate-y-2' : ''}`}
        />
        {!isOpen && (
          <div className="w-8 h-1 rounded-full bg-[#ffffff]  transition-all duration-300" />
        )}
        <div
          className={`w-8 h-1 rounded-full bg-[#fffdfd]  transition-all duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-3' : ''}`}
        />
      </button>

      {/* Navigation menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full font-Figtree px-[40px] py-[20px] bg-black bg-opacity-50 flex flex-col space-y-[20px] z-40 justify-center items-center">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="bg-white hover:bg-black hover:text-white text-black text-[20px] font-bold py-[10px] px-4 w-[100px] h-[50px] rounded-full cursor-pointer"
            onClick={handleToggle}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about-me"
            smooth={true}
            duration={500}
            className="bg-white hover:bg-black hover:text-white text-black text-[20px] font-bold py-[10px] px-4 w-[130px] h-[50px] rounded-full cursor-pointer"
            onClick={handleToggle}
          >
            About Me
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="bg-white hover:bg-black hover:text-white text-black text-[20px] font-bold py-[10px] px-4 w-[120px] h-[50px] rounded-full cursor-pointer"
            onClick={handleToggle}
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="resume"
            smooth={true}
            duration={500}
            className="bg-white hover:bg-black hover:text-white text-black text-[20px] font-bold py-2 px-4 w-[120px] h-[50px] rounded-full cursor-pointer"
            onClick={handleToggle}
          >
            Resume
          </ScrollLink>
        </div>
      )}
    </div>
  );
};

export default HamburgerIcon;
