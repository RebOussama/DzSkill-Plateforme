import React from 'react'
import img from '../../assets/img2.png'
const UploadedCourse = ({ course }) => {
  return (
    <div className='w-[70%] bg-white shadow-md rounded-2xl flex min-h-[300px]  '>
      <div className='md:w-[65%] w-full flex flex-col p-8 md:items-start items-center gap-3'>
        <h1 className='text-2xl font-bold'>{course.title}</h1>
        <div className='w-full flex md:flex-row flex-col gap-2  justify-between  text-gris4'>
          <p><span className='font-bold'>Category :</span> {course.category}</p>
          <p><span className='font-bold'>Price : </span> {course.price=="0"?"Free":course.price} </p>
        </div>
        <div className='w-full flex md:flex-row flex-col gap-2  justify-between   text-gris4'>
          <p><span className='font-bold'>Level :</span> {course.level} </p>
          <p><span className='font-bold'>Certification : </span> {course.certification} </p>
        </div>
        <p className='text-gris4'>
          <span className='font-bold'>Course Description: </span>
          {course.description}      
        </p>
        <div className='w-full flex md:flex-row flex-col md:justify-center items-center md:gap-12 gap-4 mt-4'>
          <button className='bg-transparent hover:bg-purple text-purple font-semibold hover:text-white py-2 px-4 border border-purple hover:border-transparent rounded-2xl w-32 text-lg'>Edit </button>
          <button className='bg-transparent hover:bg-gris3 text-gris3 font-semibold hover:text-white py-2 px-4 border border-gris3 hover:border-transparent rounded-2xl w-32 text-lg'>Delete</button>

        </div>



      </div>
      <div className='md:w-[35%] w-0 rounded-2xl md:block hidden'>
        <img src={img} alt="" />
      </div>
    </div>
  )
}

export default UploadedCourse