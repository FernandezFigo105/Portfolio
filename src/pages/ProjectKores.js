// ProjectKores.js
import React from 'react';
import { Link } from 'react-router-dom'; // Don't forget to import Link
import Hamburger from './Hamburger.js';
import Kores1 from '../assets/Kores/Kores1.webp';
import Kores2 from '../assets/Kores/Kores2.jpg';
import Kores3 from '../assets/Kores/Kores3.jpg';
import Kores4 from '../assets/Kores/Kores4.jpg';
import Footer from './footer.js';


const ProjectKores = () => {
  return (
    <div className='bg-black'>
      <div className="lg:w-[80%] w-full mx-auto flex flex-col items-center bg-black">
        {/* Corrected Link and Button */}
        <Link to="/projects/puptone">
  <button
    className="lg:bg-black lg:text-white lg:text-[20px]  lg:border-2 border-white py-2 px-4 rounded-md hover:bg-slate-500 transition fixed lg:right-[50px] lg:top-[650px] transform -translate-y-1/2"
  >
    &gt;
  </button>
</Link>


        <Hamburger />
        <img src={Kores1} className="" alt="Kores1" />
        <img src={Kores2} className="" alt="Kores2" />
        <img src={Kores3} className="" alt="Kores3" />
        <img src={Kores4} className="" alt="Kores4" />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectKores;
