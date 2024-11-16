import React, { useState } from 'react';
import Shapes from '../assets/footershapes.png';

const Footer = () => {
  const [isCreditsVisible, setIsCreditsVisible] = useState(false);

  const toggleCredits = () => {
    setIsCreditsVisible(true); // Show the credits

    // Hide the credits after 3 seconds
    setTimeout(() => {
      setIsCreditsVisible(false); // Hide credits after 3 seconds
    }, 3000);
  };

  return (
    <div className="relative">
      <div className="relative bg-[#231E1F] text-white py-[50px] pb-[130px] lg:pb-5 overflow-hidden rounded-t-lg">
        <div className="mb-5 grid grid-cols-3 lg:grid-cols-5 lg:gap-[200px] relative z-10 lg:flex justify-center">
          {/* More Column */}
          <div className="flex flex-col m-0 p-0">
            <h3 className="font-bold text-xl mb-4">More</h3>
            <ul className="space-y-2 leading-snug text-sm lg:text-lg">
              <li>
                <a href="/" className="hover:text-gray-300">Home</a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-300">Work</a>
              </li>
              <li>
                <a href="/" className="hover:text-gray-300">About Me</a>
              </li>
              <li>
                <button 
                  onClick={toggleCredits} 
                  className=" text-[14px] lg:text-[18px] text-amber-200"
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
              <li className="leading-snug text-sm lg:text-lg">
                <a href="https://www.linkedin.com/in/christopher-ryann/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  LinkedIn
                </a>
              </li>
              <li className="leading-snug text-sm lg:text-lg">
                <a href="https://www.behance.net/christopherdevar" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  Behance
                </a>
              </li>
              <li className="leading-snug text-sm lg:text-lg">
                <a href="https://www.instagram.com/chistopisto/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
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
                <a href="mailto:christopherdevar22@gmail.com" className="hover:text-gray-300 text-sm lg:text-lg">
                  Email
                </a>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1hiM3Y_O8fcg7jaKo9Bi9A-Qf6XEySvq8/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 text-sm lg:text-lg">
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Shapes */}
        <img
          src={Shapes}
          className="absolute top-[40%] left-[40%] z-0 w-[50%] lg:left-[75%] lg:top-[10%] lg:w-[20%] pointer-events-none"
          alt="Shapes"
        />
      </div>

      {/* Credits Popup */}
      {isCreditsVisible && (
        <div className="fixed bottom-0 left-0 right-0 z-50">
          <div className="relative">
            <div className="w-full bg-gradient-to-r from-[#752728] via-[#2D578B] to-[#8B8F40] text-[15px] p-8 text-center text-white shadow-lg">
              <p>
                This website was developed with the help of my dearest friend{' '}
                <a href="https://github.com/FernandezFigo105" target="_blank" rel="noopener noreferrer" className="underline">
                  Figo Fernandez
                </a>{' '}
                Huge Thanks!! 🤝
              </p>
              <button 
                onClick={toggleCredits}
                className="absolute top-2 right-2 text-white hover:text-gray-300"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
