import React from 'react';

const CourseStats = () => {
  return (
    <div className="bg-white py-20">
      <div className="mx-auto text-center">
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-purple2 to-white p-8">
            <h2 className=" text-[22px] sm:text-5xl font-bold text-purple">500+</h2>
            <p className="text-2xl font-bold text-gris4">Courses</p>
          </div>
          <div className="bg-gradient-to-r from-white via-purple2 to-white p-8">
            <h2 className="text-[22px] sm:text-5xl font-bold text-purple">60+</h2>
            <p className="text-2xl font-bold text-gris4">Instructors</p>
          </div>
          <div className="bg-gradient-to-r from-white to-purple2 p-8">
            <h2 className="text-[22px] sm:text-5xl font-bold text-purple">2500+</h2>
            <p className="text-2xl font-bold text-gris4">Student</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseStats;