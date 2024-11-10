import React from 'react';
import { useNavigate } from 'react-router-dom';
import Kores from '../assets/1.png';
import YourHour from '../assets/2.png';
import Fridge from '../assets/3.png';
import Puptone from '../assets/4.png';
import Iztron from '../assets/5.png'
import Footer  from './footer.js';

const Projects = () => {
  const navigate = useNavigate();

  const projectData = [
    {
      image: Kores,
      description: "During my Kores India Ltd. internship, I contributed to designing a user-friendly, visually engaging STEM toy mobile app, allowing users to browse, buy, gift, and track Kores' latest offerings.",
      badge: "UX/UI Design",
      link: "/projects/kores",
    },
    {
      image: Puptone,
      description: "This project seeks to facilitate better communication between dog owners and their pets, fostering understanding of canine behaviour and promoting effective communication methods.",
      badge: "Tangible Interaction Design  ",
      link: "/projects/puptone",
    },
    {
      image: Iztron,
      description: "This project focuses on leveraging data-driven design to develop an iron tailored for middle-income groups, aiming to improve user experience by making design decisions based on insights from user data",
      badge: "Product Design ",
      link: "/projects/iztron",
    },
    {
      image: YourHour,
      description: "I evaluated and redesigned the YourHour app under material.io (Google) guidelines, enhancing its visual appeal & overall user experience.",
      badge: "UI Design",
      link: "/projects/your-hour",
    },
    {
      image: Fridge,
      description: "Developed mobile and fridge-touchscreen interfaces for a smart fridge app designed to streamline grocery management. Features include real-time inventory tracking and integrated shopping options for enhanced efficiency.",
      badge: "UI/UX Design",
      link: "https://www.behance.net/gallery/196786321/Smart-Fridge-Touchscreen-App-design",
    },
   
    
  ];

  const handleCardClick = (link) => {
    if (link.startsWith("http")) {
      // Open external links in a new tab
      window.open(link, "_blank");
    } else {
      // Use navigate for internal routes
      navigate(link);
    }
  };

  return (
    <div id="projects" className="flex items-center justify-center w-full min-h-screen  bg-[#F7F7F7] flex-col space-y-8 lg:space-y-10 lg:space-x-10 lg:pb-10 pt-[70px]">
      <h1 className="text-2xl md:text-3xl font-semibold font-Figtree">My Projects</h1>

      {projectData.map((project, index) => (
  <div
    key={index}
    className={`relative w-full max-w-[90%] md:max-w-[700px] lg:max-w-[1110px] bg-gray-200 rounded-lg hover:shadow-xl overflow-hidden flex flex-col lg:flex-row cursor-pointer ${
      index === projectData.length - 1 ? 'mb-8 md:mb-10 lg:mb-0' : ''
    }`}
    onClick={() => handleCardClick(project.link)}
  >
    <div className="w-full lg:w-1/2 h-[150px] sm:h-[200px] lg:h-auto">
      <img src={project.image} className="h-full w-full object-cover" alt="Project" />
    </div>

    <div className="w-full lg:w-1/2 bg-[#231E1F] p-4 sm:p-6 lg:pl-10 lg:pr-6 lg:pt-[10px] flex items-center justify-center">
      <h2 className="text-sm sm:text-md lg:text-lg text-white text-left lg:px-[40px] font-Lexend">
        {project.description}
      </h2>
    </div>

    {project.badge && (
      <div className="hidden lg:block absolute top-4 left-4 sm:top-8 sm:left-8 lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2">
        <div className="w-16 h-16 sm:w-24 sm:h-24 lg:w-36 lg:p-[10px] lg:h-36 bg-[#3E3E3E] rounded-full text-white flex justify-center font-Lexend items-center text-xs sm:text-sm lg:text-base text-center">
          {project.badge.split(' ').map((word, wordIndex) => (
            <React.Fragment key={wordIndex}>
              {word}
              {(wordIndex === 0 || wordIndex === 1) && <br />}
            </React.Fragment>
          ))}
        </div>
      </div>
    )}
  </div>
))}

<div className="block sm:hidden h-[10px]"></div>

    </div>
  );
};

export default Projects;
