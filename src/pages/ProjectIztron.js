import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Hamburger from './Hamburger.js';
import Iztron1 from '../assets/Iztron/Iztron1.webp';
import Iztron2 from '../assets/Iztron/Iztron2.webp';
import Iztron3 from '../assets/Iztron/Iztron3.webp';
import Iztron4 from '../assets/Iztron/Iztron4.webp';
import Footer from './footer.js';


const ProjectIztron = () => {
  return (
    <div className= "bg-black">
      <div className="lg:w-[80%] w-full mx-auto flex flex-col items-center bg-black">
      {/* Navigation Buttons */}
      <Link to="/projects/your-hour">
      <button
    className="lg:bg-black lg:text-white lg:text-[20px]  lg:border-2 border-white py-2 px-4 rounded-md hover:bg-slate-500 transition fixed lg:right-[50px] lg:top-[350px] transform -translate-y-1/2"
  >
    &gt;
  </button>
</Link>
<Link to="/projects/puptone">
<button
    className="lg:bg-black lg:text-[20px] lg:border-2 border-white lg:text-white py-2 px-4 rounded-md hover:bg-slate-500 transition fixed right-[50px] top-1/2 transform translate-y-1/2"
  >
    &lt;
  </button>
</Link>

      {/* Hamburger Menu */}
      <Hamburger />

      {/* Project Images */}
      <img src={Iztron1} className="" alt="Iztron1" />
      <img src={Iztron2} className="" alt="Iztron2" />
      <img src={Iztron3} className="" alt="Iztron3" />
      <img src={Iztron3} className="" alt="Iztron4" />

      {/* Footer */}
      </div>
      <Footer />
    </div>
  );
};

export default ProjectIztron;
