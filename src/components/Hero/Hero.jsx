import React from 'react';
import heroimg from '../../assets/HEROIMG.png';
import bubbles from '../../assets/Group32.png';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden z-[-1]">
      {/* Bubbles background image */}
      <img 
        src={bubbles } 
        alt="Decorative bubbles" 
        className="absolute top-0 left-0 w-1/2 h-auto object-contain z-0"
        //absolute top-0 left-0 w-1/2 h-auto object-contain
      />
      
      {/* Main container with no max width to allow image to extend */}
      <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
        {/* Left Content Column - Contained */}
        <div className="px-4 sm:px-6 lg:px-8 py-20 flex flex-col justify-center max-w-2xl ml-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Making Learning Easy, Anytime, Anywhere
          </h1>
          <p className="text-lg text-gray-600">
            Empower your growth with engaging courses and resources—all from the comfort of your own space.
          </p>
        </div>

        {/* Right Image Column - Edge to edge */}
        <div className="relative h-full flex items-center">
          <img 
            src={heroimg} 
            alt="Student with books" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;