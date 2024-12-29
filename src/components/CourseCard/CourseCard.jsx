import React from 'react'
import CourseImg from '../../assets/CourseContent.png'
import { MdOutlineStarPurple500, } from "react-icons/md";
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div>
      <Link to={`/courses/${course.id}`}>
        <div className="card w-80 h-96 p-1 border-[2px] bg-white rounded-xl shadow-md cursor-pointer">
          <img src={CourseImg} alt="" className='w-full h-1/2' />
          <div className='flex flex-col gap-1 px-6 py-3 text-[#666666]'>
            <h1 className='text-lg text-black font-bold'>{course.Title}</h1>
            <p>{course.Instructor}</p>
            <p className='flex justify-between'><span>{course.Student_Enrolled} students enrolled</span><span>{course.Duration} hours</span></p>
            <div className='flex flex-row justify-around w-full pt-4 text-black text-lg  '>
              <div className='flex items-center gap-1   '>
                <MdOutlineStarPurple500 color='#FFD700' />
                <span>{course.Rating}</span>/5

              </div>
              <div className='font-bold '>{course.Price == 0 ? "Free" : `${course.Price}$`}</div>
            </div>
          </div>


        </div>

      </Link>

    </div>
  )
}

export default CourseCard