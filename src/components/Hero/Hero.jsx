import React from 'react';
import heroimg from '../../assets/HEROIMG.png';
import bubbles from '../../assets/Group32.png';

const HeroSection = () => {
  return (
    <div className=" bg-white relative overflow-hidden z-[-10]">
      {/* Decorative Bubbles Background */}
      <img
        src={bubbles}
        alt="Decorative background with colorful bubbles"
        className="absolute top-0 left-0 object-contain z-0"
      />

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full relative z-10">
        {/* Left Content */}
        <div className="flex flex-col px-10 sm:px-8 lg:px-16 py-10 max-w-2xl mx-auto lg:mx-0">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Making Learning Easy, Anytime, Anywhere
          </h1>
          <p className="text-2xl text-gray-600 leading-relaxed">
            Empower your growth with engaging courses and resources—all from the comfort of your own space.
          </p>
        </div>

        {/* Right Image */}
        <div className="hidden sm:flex items-center justify-end flex-1">
  <img
    src={heroimg}
    alt="Student holding books and learning materials"
    className="max-h-[600px] w-auto object-contain"
  />
</div>

      </div>
    </div>
  );
};

export default HeroSection;
