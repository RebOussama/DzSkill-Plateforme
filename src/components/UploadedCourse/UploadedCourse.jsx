import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategoryById, deleteCourse } from '../../redux/courseSlice'

const UploadedCourse = ({ course }) => {
  const dispatch = useDispatch();
  const { categories, loading, successMessage, errorMessage } = useSelector(state => state.courses);

  // Check if the category is already loaded from Redux
  const category = categories[course.category_id];

  // Fetch the category if it's not available
  useEffect(() => {
    if (!category) {
      dispatch(fetchCategoryById(course.category_id)); // Fetch category by ID
    }
  }, [course.category_id, category, dispatch]);

  // Handle delete course
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      dispatch(deleteCourse(course.ID)); // Dispatch delete course action
    }
  };

  return (
    <div className='w-[70%] bg-white shadow-md rounded-2xl flex min-h-[300px]'>
      <div className='md:w-[65%] w-full flex flex-col p-8 md:items-start items-center gap-3'>
        <h1 className='text-2xl font-bold'>{course.Name}</h1>
        <div className='w-full flex md:flex-row flex-col gap-2 justify-between text-gris4'>
          <p><span className='font-bold'>Category :</span> {category ? category.Name : "Loading..."}</p>
          <p><span className='font-bold'>Price : </span> {course.Pricing === "0" ? "Free" : course.Pricing}</p>
        </div>
        <div className='w-full flex md:flex-row flex-col gap-2 justify-between text-gris4'>
          <p><span className='font-bold'>Level :</span> {course.Level}</p>
          <p><span className='font-bold'>Certification : </span> Available</p>
        </div>
        <p className='text-gris4'>
          <span className='font-bold'>Course Description: </span>
          {course.Description}
        </p>
        <div className='w-full flex md:flex-row flex-col md:justify-center items-center md:gap-12 gap-4 mt-4'>
          <button className='bg-transparent hover:bg-purple text-purple font-semibold hover:text-white py-2 px-4 border border-purple hover:border-transparent rounded-2xl w-32 text-lg'>Edit & Add Lesson</button>
          <button 
            onClick={handleDelete} // Add the delete functionality here
            className='bg-transparent hover:bg-gris3 text-gris3 font-semibold hover:text-white py-2 px-4 border border-gris3 hover:border-transparent rounded-2xl w-32 text-lg'>
            Delete
          </button>
        </div>
        {successMessage && <p className="text-green-500">{successMessage}</p>}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </div>
      <div className='md:w-[35%] w-0 rounded-2xl md:block hidden'>
        <img src={course.Image} alt={course.Name} />
      </div>
    </div>
  );
};

export default UploadedCourse;
