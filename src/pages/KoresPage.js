// KoresPage.js
import React from 'react';


const projects = [
  { name: 'ProjectKores' },
  { name: 'ProjectPuptone' },
  { name: 'ProjectIztron' },
  { name: 'ProjectYourHour' },
  { name: 'ProjectFridge' },
  // Add more projects as needed
];

const KoresPage = () => {
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center">
      <ProjectNavigation projects={projects} />
    </div>
  );
};

export default KoresPage;
