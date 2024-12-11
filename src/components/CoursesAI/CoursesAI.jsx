import React from 'react';
import { FaStar } from 'react-icons/fa';
import img1 from '../../assets/img1.png';

const PopularCourses = () => {
  const courses = [
    {
      title: 'Build Responsive Real-World Websites with HTML and CSS',
      instructor: 'Azouaoui Faycel',
      enrolledStudents: 250,
      duration: '25 hours',
      rating: 3.5,
      price: 13,
      image: img1,
    },
    {
      title: 'Build Responsive Real-World Websites with HTML and CSS',
      instructor: 'Azouaoui Faycel',
      enrolledStudents: 250,
      duration: '25 hours',
      rating: 3.5,
      price: 13,
      image: img1,
    },
    {
      title: 'Build Responsive Real-World Websites with HTML and CSS',
      instructor: 'Azouaoui Faycel',
      enrolledStudents: 250,
      duration: '25 hours',
      rating: 3.5,
      price: 13,
      image: img1,
    },
    {
      title: 'Build Responsive Real-World Websites with HTML and CSS',
      instructor: 'Azouaoui Faycel',
      enrolledStudents: 250,
      duration: '25 hours',
      rating: 3.5,
      price: 13,
      image: img1,
    },
  ];

  return (
    <div className="bg-white py-8">
      <h2 className="text-2xl font-bold mb-4 text-purple text-center">Courses Related to <span className='text-black'>“AI”</span></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-x-auto hide-scrollbar">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{course.title}</h3>
              <p className="text-gray-500 mt-1">{course.instructor}</p>
              <div className="flex items-center mt-2">
                <div className="flex items-center text-yellow-500">
                  {[...Array(Math.floor(course.rating))].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  {course.rating % 1 !== 0 && (
                    <FaStar className="text-gray-400" />
                  )}
                </div>
                <span className="text-gray-500 ml-2">
                  {course.rating.toFixed(1)}
                </span>
              </div>
              <div className="flex items-center mt-2">
                <p className="text-gray-500">
                  {course.enrolledStudents.toLocaleString()} students enrolled
                </p>
                <p className="text-gray-500 ml-4">{course.duration}</p>
              </div>
              <div className="mt-4">
                <span className="text-lg font-bold">${course.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;