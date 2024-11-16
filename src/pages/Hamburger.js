import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // For navigation to different pages
import { Link as ScrollLink } from 'react-scroll'; // For smooth scrolling to sections
import { useLocation } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const HamburgerIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Check if we're on specific pages (e.g., '/projects' and '/about')
  const isAboutMeButtonDisabled = location.pathname === '/projects/kores' || location.pathname === '/projects/your-hour'|| location.pathname === '/projects/puptone'|| location.pathname === '/projects/iztron'; // Example: disable on '/projects' and '/contact'
  const isProjectsButtonDisabled = location.pathname === '/projects/kores' || location.pathname === '/projects/your-hour'|| location.pathname === '/projects/puptone'|| location.pathname === '/projects/iztron'; // Example: disable on '/about' and '/contact'

  return (
    <div className="z-50 flex justify-end items-center">
      <button
        onClick={handleToggle}
        className="fixed right-2 top-4 md:right-4 md:top-8 lg:right-0 lg:top-16 lg:mr-[50px] z-50 w-10 h-10 mr-[8px] md:w-12 md:h-12 lg:w-[60px] lg:h-[60px] py-2.5 md:py-3  lg:py-[18px] bg-black rounded-md md:rounded-lg lg:rounded-[10px] flex flex-col justify-between items-center focus:outline-none shadow-2xl"
      >
        {/* Hamburger icon */}
        <div
          className={`w-5 h-0.5 md:w-6 md:h-[3.5px] lg:w-6 lg:h-[3.5px] rounded-full bg-white transition-all duration-300 ${isOpen ? 'transform rotate-45 translate-y-2.5 lg:translate-y-3' : ''
            }`}
        />
        {!isOpen && (
          <div className="w-5 h-0.5 md:w-6 md:h-[3.5px] lg:w-6 lg:h-[3.5px] rounded-full bg-white transition-all duration-300" />
        )}
        <div
          className={`w-5 h-0.5 md:w-6 md:h-[3.5px] lg:w-6 lg:h-[3.5px] rounded-full bg-white transition-all duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-2 lg:-translate-y-2' : ''
            }`}
        />
      </button>

      {/* Navigation menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full font-Figtree px-6 py-10 md:px-8 md:py-12 lg:px-[40px] lg:py-[20px] bg-black bg-opacity-50 flex flex-col space-y-6 md:space-y-8 lg:space-y-[20px] z-40 justify-center items-center">
          {/* Home Link */}
          <Link
            to="/"
            className="bg-white hover:bg-black hover:text-white text-black text-lg md:text-xl lg:text-[20px] font-bold py-2 px-4 md:py-3 md:px-5 lg:py-[10px] lg:px-4 w-24 md:w-28 lg:w-[100px] h-10 md:h-12 lg:h-[50px] rounded-full cursor-pointer text-center"
            onClick={handleToggle}
          >
            Home
          </Link>

          {/* About Me Link */}
          <ScrollLink
            to="about-me"
            smooth={true}
            duration={500}
            className={`bg-white hover:bg-black hover:text-white text-black text-lg md:text-xl lg:text-[20px] font-bold py-2 px-4 md:py-3 md:px-5 lg:py-[10px] lg:px-4 w-32 md:w-36 lg:w-[130px] h-10 md:h-12 lg:h-[50px] rounded-full cursor-pointer text-center ${isAboutMeButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleToggle}
            aria-disabled={isAboutMeButtonDisabled}
          >
            About Me
          </ScrollLink>

          {/* Projects Link */}
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className={`bg-white hover:bg-black hover:text-white text-black text-lg md:text-xl lg:text-[20px] font-bold py-2 px-4 md:py-3 md:px-5 lg:py-[10px] lg:px-4 w-30 md:w-34 lg:w-[120px] h-10 md:h-12 lg:h-[50px] rounded-full cursor-pointer text-center ${isProjectsButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleToggle}
            aria-disabled={isProjectsButtonDisabled}
          >
            Projects
          </ScrollLink>

          {/* Resume Link */}
          <Link
            to="https://drive.google.com/file/d/1hiM3Y_O8fcg7jaKo9Bi9A-Qf6XEySvq8/view?usp=sharing"
            target="_blank"
            className="bg-white hover:bg-black hover:text-white text-black text-lg md:text-xl lg:text-[20px] font-bold py-2 px-4 md:py-3 md:px-5 lg:py-[10px] lg:px-4 w-24 md:w-28 lg:w-[100px] h-10 md:h-12 lg:h-[50px] rounded-full cursor-pointer text-center"
            onClick={handleToggle}
          >
            Resume
          </Link>
        </div>
      )}
    </div>
  );
};

export default HamburgerIcon;
