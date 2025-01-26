import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BackgroundImg from '../assets/GroupTest.png';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import UploadedCourse from '../components/UploadedCourse/UploadedCourse';
import { BsPlusCircle } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { fetchAllCourses } from '../redux/courseSlice';

const MyCourses = () => {
  const dispatch = useDispatch();
  const { loading, courses = [], errorMessage } = useSelector((state) => state.courses); // Default to an empty array

  // Get the teacher ID from localStorage
  const teacherId = localStorage.getItem("userID");

  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchAllCourses());
  }, [dispatch]);

  // Filter the courses by teacher_id
  const filteredCourses = Array.isArray(courses)
    ? courses.filter(course => course.teacher_id === parseInt(teacherId, 10))
    : [];

  const results = !searchTerm
    ? filteredCourses
    : filteredCourses.filter(course =>
        course.Name.toLowerCase().includes(searchTerm.toLowerCase())
      );
console.log(results);
  return (
    <div>
      <Navbar />

      <div
        className='flex flex-col items-center gap-8 pb-10'
        style={{
          backgroundImage: `url(${BackgroundImg})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat-y',
        }}
      >
        <h1 className='md:text-3xl text-2xl text-purple font-bold py-10'>Uploaded Courses</h1>

        <div className='flex justify-between w-[70%]'>
          <div></div>
          <div className="w-64 relative max-w-md">
            <input
              value={searchTerm}
              onChange={handleChange}
              type="text"
              placeholder="Search"
              className="w-full pl-10 py-2 border-2 rounded-lg outline-none focus:ring-2 focus:ring-[#9747FF] border-gray-300"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M21 21l-4.35-4.35M16.65 16.65a7.5 7.5 0 1 1 1.5-1.5l4.35 4.35z" />
            </svg>
          </div>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : errorMessage ? (
          <p className="text-red-500">{errorMessage}</p>
        ) : results.length > 0 ? (
          results.map((course) => (
            <UploadedCourse key={course.id} course={course} />
          ))
        ) : (
          <p>No courses found.</p>
        )}

        <div className='w-[70%] bg-white shadow-md rounded-2xl flex min-h-[300px]'>
          <div className='md:w-[65%] w-full flex flex-col p-8 items-center gap-20'>
            <h1 className='font-bold md:text-2xl text-xl'>Add a course</h1>
            <Link to='/createcourse'>
              <BsPlusCircle className='text-[#D9D9D9] hover:text-purple cursor-pointer' size={90} />
            </Link>
          </div>
          <div className='bg-[#C4C4C4] md:w-[35%] w-0 rounded-2xl md:block hidden'></div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MyCourses;
