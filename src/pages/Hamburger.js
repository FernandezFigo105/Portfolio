import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const HamburgerIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      onClick={handleToggle}
      className="fixed z-50 w-12 h-12 p-3 bg-white rounded-[10px] flex flex-col justify-between items-center focus:outline-none"
    >
      <div
        className={`w-8 h-1 rounded-full bg-black transition-all duration-300 ${isOpen ? 'transform rotate-45 translate-y-2' : ''}`}
      />
      {!isOpen && (
        <div
          className="w-8 h-1 rounded-full bg-black transition-all duration-300"
        />
      )}
      <div
        className={`w-8 h-1 rounded-full bg-black transition-all duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-3' : ''}`}
      />
    </button>
  );
};

export default HamburgerIcon;
