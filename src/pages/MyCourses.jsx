import React, { useState } from 'react'
import BackgroundImg from '../assets/GroupTest.png'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import UploadedCourse from '../components/UploadedCourse/UploadedCourse'
import { BsPlusCircle } from "react-icons/bs";
import { Link } from 'react-router-dom'
const listMyCourses = [
  { id: "1", title: "Course 1", category: "Category 1", price: "$100", level: "Beginner", certification: "available", description: "Description 1" },
  { id: "2", title: "Course 2", category: "Category 2", price: "$200", level: "Intermediate", certification: "not available", description: "Description 2" },
  { id: "3", title: "Course 3", category: "Category 3", price: "$300", level: "Advanced", certification: "available", description: "Description 3" },

]
const MyCourses = () => {
  // function search :
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  const results = !searchTerm
    ? listMyCourses
    : listMyCourses.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );
  

  return (
    <div>
      <Navbar />

      <div className='flex flex-col  items-center gap-8 pb-10 ' style={{ backgroundImage: `url(${BackgroundImg})`, backgroundPosition: 'center', backgroundRepeat: 'repeat-y' }}>
        <h1 className='md:text-3xl text-2xl text-purple font-bold py-10'>Uploaded Courses</h1>
        <div className='flex justify-between w-[70%]'>
          <div></div>
          <div className="w-64 relative  max-w-md">
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
        {results.map((course) => {
          return (
            <UploadedCourse key={course.id} course={course} />
          )
        })}
        <div className='w-[70%] bg-white shadow-md rounded-2xl flex min-h-[300px]  '>
          <div className='md:w-[65%] w-full flex flex-col p-8 items-center gap-20'>
            <h1 className='font-bold md:text-2xl text-xl'>Add a course</h1>
            <Link to='/createcourse'>
            <BsPlusCircle className='text-[#D9D9D9] hover:text-purple cursor-pointer' size={90} />
            
            </Link>

          </div>
          <div className='bg-[#C4C4C4] md:w-[35%] w-0 rounded-2xl md:block hidden'>

          </div>

        </div>

      </div>

      <Footer />
    </div>
  )
}

export default MyCourses