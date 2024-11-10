import React, { useEffect } from 'react';
import Shapes from '../assets/footershapes.png';

const Footer = () => {
  const handleCreditsClick = () => {
    const credits = document.getElementById("credits");
    if (credits) {
      // Append credits below the footer
      credits.style.display = "block";  // Show credits
      setTimeout(() => {
        credits.style.display = "none";  // Hide credits after 5 seconds
      }, 5000); // Hide after 5 seconds
    }
  };

  // Handle DOM manipulation after the component mounts
  useEffect(() => {
    const credits = document.getElementById("credits");
    if (credits) {
      credits.style.display = "none"; // Ensure credits are hidden initially
    }
  }, []);

  return (
    <div>
      <div className="relative  bg-[#231E1F]  text-white py-[50px] pb-[130px] lg:pb-5 overflow-hidden rounded-t-lg">
        <div className="mb-5 grid grid-cols-3 lg:grid-cols-5 lg:gap-[200px] relative z-10 lg:flex justify-center">
          {/* More Column */}
          <div className="flex flex-col m-0 p-0">
            <h3 className="font-bold text-xl mb-4">More</h3>
            <ul className="space-y-2 leading-snug text-sm lg:text-lg ">
              <li>
                <a href="#home" className="hover:text-gray-300">Home</a>
              </li>
              <li>
                <a href="#work" className="hover:text-gray-300">Work</a>
              </li>
              <li>
                <a href="#about-me" className="hover:text-gray-300">About Me</a>
              </li>
              <li>
                <button
                  onClick={handleCreditsClick}
                  className="hover:text-gray-300"
                >
                  Credits
                </button>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="flex flex-col m-0 p-0">
            <h3 className="font-bold text-xl mb-4">Social</h3>
            <ul className="space-y-2 m-0 p-0">
              <li className='leading-snug text-sm lg:text-lg'>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  LinkedIn
                </a>
              </li>
              <li className='leading-snug text-sm lg:text-lg'>
                <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  Behance
                </a>
              </li>
              <li className='leading-snug text-sm lg:text-lg'>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col m-0 p-0">
            <h3 className="font-bold text-xl mb-4">Contact</h3>
            <ul className="space-y-2 m-0 p-0">
              <li>
                <a href="mailto:example@example.com" className="hover:text-gray-300">
                  Email
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1-JcgllZm4F_8H83t2woEIefnwZVFfGB7/view" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Shapes */}
        <img
          src={Shapes}
          className="absolute top-[40%] left-[40%] z-0 w-[50%] lg:left-[75%] lg:top-[30%] lg:w-[20%] pointer-events-none"
          alt="Shapes"
        />
      </div>

      {/* Credits Message - Initially hidden, will appear below the footer */}
      <div id="credits" className="w-full bg-gradient-to-r from-[#752728] via-[#2D578B] to-[#8B8F40] py-8 text-center z-10 text-white" style={{ display: 'none' }}>
        <p>This website was developed with the help of my dearest friend <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='underline'>Figo Fernandez</a> Huge Thanks!! 🤝</p>
      </div>
    </div>
  );
};

export default Footer;