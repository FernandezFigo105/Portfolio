import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import Hamburger from './Hamburger.js';
import Puptone1 from '../assets/Puptone/Puptone1.gif';
import Puptone2 from '../assets/Puptone/Puptone2.jpg';
import Puptone3 from '../assets/Puptone/Puptone3.gif';
import Puptone4 from '../assets/Puptone/Puptone4.jpg';
import Puptone5 from '../assets/Puptone/Puptone5.jpg';
import Puptone6 from '../assets/Puptone/Puptone6.jpg';
import Puptone7 from '../assets/Puptone/Puptone7.gif';
import Puptone8 from '../assets/Puptone/Puptone8.jpg';
import Puptone9 from '../assets/Puptone/Puptone9.jpg';
import Puptone10 from '../assets/Puptone/Puptone10.gif';
import Puptone11 from '../assets/Puptone/Puptone11.jpg';
import Footer from './footer.js';


const ProjectPupTone = () => {
  return (
    <div className='bg-black'>
      <div className="lg:w-[80%] w-full mx-auto flex flex-col items-center bg-black">
      {/* Navigation Buttons */}
      

      {/* Hamburger Menu */}
      <Hamburger />
     <Link to="/projects/iztron">
  <button
    className="hidden lg:block lg:bg-black lg:text-white lg:text-[20px] lg:border-2 border-white py-2 px-4 rounded-md hover:bg-slate-500 transition fixed lg:right-[50px] lg:top-[350px] transform -translate-y-1/2"
  >
    &gt;
  </button>
</Link>
<Link to="/projects/kores">
  <button
    className="hidden lg:block lg:bg-black lg:text-[20px] lg:border-2 border-white lg:text-white py-2 px-4 rounded-md hover:bg-slate-500 transition fixed right-[50px] top-1/2 transform translate-y-1/2"
  >
    &lt;
  </button>
</Link>



      {/* Project Images */}
      <img src={Puptone1} className="" alt="Puptone1" />
      <img src={Puptone2} className="" alt="Puptone2" />
      <img src={Puptone3} className="" alt="Puptone3" />
      <img src={Puptone4} className="" alt="Puptone4" />
      <img src={Puptone5} className="" alt="Puptone5" />
      <img src={Puptone6} className="" alt="Puptone6" />
      <img src={Puptone7} className="" alt="Puptone7" />
      <img src={Puptone8} className="" alt="Puptone8" />
      <img src={Puptone9} className="" alt="Puptone9" />
      <img src={Puptone10} className="" alt="Puptone10" />
      <img src={Puptone11} className="" alt="Puptone11" />

      {/* Footer */}
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPupTone;
