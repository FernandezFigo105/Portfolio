// ProjectKores.js
import React from 'react';
import Hamburger from './Hamburger.js';
import Kores from '../assets/Kores/Kores1.webp';
const ProjectKores = () => {
  return (
    <div>
      <Hamburger/>
      <img src={Kores} className=" " alt="KOres1" />
      <h1>Kores Project</h1>
      <p>Details about the Kores project go here.</p>
    </div>
  );
};

export default ProjectKores;
