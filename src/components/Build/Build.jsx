import React from 'react';
import { HiArrowLongLeft } from "react-icons/hi2";
import img from '../../assets/img7.png';

const Build = () => {
  return (
    <div className="container mx-auto px-14 py-4 max-w-6xl">
      <div className="flex items-center mb-6">
        <button 
          className="flex items-center text-gris3 "
          onClick={() => window.history.back()}
        >
          <HiArrowLongLeft className="w-12 h-12 mr-2" />
        </button>
        <h1 className="text-2xl md:text-3xl font-bold text-black leading-tight">
            Build Responsive Real-World Websites with HTML and CSS
        </h1>
      </div>
      
      <div className="space-y-6">

        
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img 
            src={img} 
            alt="HTML and CSS development" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Build;