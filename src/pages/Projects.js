import React from 'react';
import Kores from '../assets/1.png';
import YourHour from '../assets/2.png';
import Fridge from '../assets/3.png';
import Puptone from '../assets/4.png';

const Projects = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-[#F7F7F7] flex-col space-y-8 lg:space-y-10 lg:space-x-10">
      <h1 className="text-2xl md:text-3xl font-semibold">My Projects</h1>

      {/* Project Cards */}
      {[Kores, YourHour, Fridge, Puptone].map((image, index) => (
        <div key={index} className="relative w-full max-w-[90%] md:max-w-[700px] lg:max-w-[1110px] bg-gray-200 rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row mb-10 lg:mb-0">
          
          {/* Image Section */}
          <div className="w-full lg:w-1/2 h-[150px] sm:h-[200px] lg:h-auto">
            <img src={image} className="h-full w-full object-cover" alt="Project" />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 bg-[#231E1F] p-4 sm:p-6 lg:pl-10 lg:pr-6 lg:pt-[10px] flex items-center justify-center">
            <h2 className="text-sm sm:text-md lg:text-lg text-white text-left lg:px-[40px] font-Lexend">
              During my Kores India Ltd. internship, I contributed to designing a user-friendly, visually engaging STEM toy mobile app, allowing users to browse, buy, gift, and track Kores' latest offerings.
            </h2>
          </div>

          {/* Badge */}
          <div className="absolute top-4 left-4 sm:top-8 sm:left-8 lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2">
            <div className="w-16 h-16 sm:w-24 sm:h-24 lg:w-36 lg:h-36 bg-[#3E3E3E] rounded-full text-white flex justify-center font-Lexend items-center text-xs sm:text-sm lg:text-base text-center">
              UI/UX<br />Design
            </div>
          </div>

        </div>
      ))}
    </div>
  );
}

export default Projects;
