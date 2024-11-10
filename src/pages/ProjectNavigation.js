// ProjectNavigation.js
import React, { useState } from 'react';

const ProjectNavigation = ({ projects = [] }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Check if projects array is empty
  if (!projects.length) {
    return <div className="text-gray-500">No projects available</div>;
  }

  // Function to move to the next project
  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex < projects.length - 1 ? prevIndex + 1 : 0
    );
  };

  // Function to move to the previous project
  const handlePreviousProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : projects.length - 1
    );
  };

  return (
    <div className="flex justify-between items-center mt-6 space-x-4">
      <button
        onClick={handlePreviousProject}
        className="bg-blue-600 text-white py-2 z-50 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Previous
      </button>
      <div className="text-lg font-semibold text-gray-200">
        {projects[currentProjectIndex].name}
      </div>
      <button
        onClick={handleNextProject}
        className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Next
      </button>
    </div>
  );
};

export default ProjectNavigation;
