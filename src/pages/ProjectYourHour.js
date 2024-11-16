import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Hamburger from './Hamburger.js';
import YourHour0 from '../assets/YourHour/YourHour1.webp';
import YourHour1 from '../assets/YourHour/YourHour2.webp';
import YourHour2 from '../assets/YourHour/YourHour3.webp';
import YourHour3 from '../assets/YourHour/YourHour4.webp';

import Footer from './footer.js';

const ProjectYourHour = () => {
  return (
    <div className="bg-black">
      <div className="lg:w-[80%] w-full mx-auto flex flex-col items-center bg-black">
      {/* Navigation Buttons */}
      <Link to="https://www.behance.net/gallery/196786321/Smart-Fridge-Touchscreen-App-design" target="_blank" rel="noopener noreferrer">
  <button
    className="hidden lg:block lg:bg-black lg:text-white lg:text-[20px] lg:border-2 border-white py-2 px-4 rounded-md hover:bg-slate-500 transition fixed lg:right-[50px] lg:top-[350px] transform -translate-y-1/2"
  >
    &gt;
  </button>
</Link>
<Link to="/projects/iztron">
  <button
    className="hidden lg:block lg:bg-black lg:text-[20px] lg:border-2 border-white lg:text-white py-2 px-4 rounded-md hover:bg-slate-500 transition fixed right-[50px] top-1/2 transform translate-y-1/2"
  >
    &lt;
  </button>
</Link>

      {/* Hamburger Menu */}
      <Hamburger />

      {/* Project Images */}
      <img src={YourHour0} className="" alt="YourHour0" />
      <img src={YourHour1} className="" alt="YourHour1" />
      <img src={YourHour2} className="" alt="YourHour2" />
      <img src={YourHour3} className="" alt="YourHour3" />

      {/* Footer */}
      </div>
      <Footer />
    </div>
  );
};

export default ProjectYourHour;
