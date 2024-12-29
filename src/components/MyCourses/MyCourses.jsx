import React, { useState, useEffect } from 'react';
import img from './../../assets/img10.png';

const MyCourses = () => {
  const [filter, setFilter] = useState('all');
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/courses/');
      if (!response.ok) {
        throw new Error('Failed to fetch courses');
      }
      const data = await response.json();
      setCourses(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredCourses = courses.filter((course) => {
    if (filter === 'all') return true;
    if (filter === 'to-start') return course.status === 'to_start';
    if (filter === 'in-progress') return course.status === 'in_progress';
    if (filter === 'completed') return course.status === 'completed';
    return false;
  });

  if (loading) {
    return <div className="text-center p-4">Loading courses...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 p-4">Error: {error}</div>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-purple mb-8">My courses</h1>
      <hr className="border border-{#D8D8D8}" />
      
      <div className="flex justify-center gap-4 mb-8 mt-4">
        <button 
          onClick={() => setFilter('to-start')}
          className={`px-6 py-2 rounded-xl font-bold ${
            filter === 'to-start' 
              ? 'bg-purple text-white' 
              : 'border-2 border-purple text-purple'
          }`}
        >
          To start
        </button>
        <button 
          onClick={() => setFilter('in-progress')}
          className={`px-6 py-2 rounded-xl font-bold ${
            filter === 'in-progress' 
              ? 'bg-purple text-white' 
              : 'border-2 border-purple text-purple'
          }`}
        >
          In progress
        </button>
        <button 
          onClick={() => setFilter('completed')}
          className={`px-6 py-2 rounded-xl font-bold ${
            filter === 'completed' 
              ? 'bg-purple text-white' 
              : 'border-2 border-purple text-purple'
          }`}
        >
          Completed
        </button>
      </div>

      {filteredCourses.map((course, index) => (
        <div key={course.id || index} className="mb-4 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 flex gap-6">
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-4 text-black inline-block px-4 py-2">
                {course.title}
              </h2>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <span className="text-gris4 font-bold">Category: </span>
                  <span className="text-gris4 text-sm">{course.category}</span>
                </div>
                <div>
                  <span className="text-gris4 font-bold">Price: </span>
                  <span className="text-gris4 text-sm">{course.is_free ? 'Free' : `$${course.price}`}</span>
                </div>
                <div>
                  <span className="text-gris4 font-bold">Level: </span>
                  <span className="text-gris4 text-sm">{course.level}</span>
                </div>
                <div>
                  <span className="text-gris4 font-bold">Certification: </span>
                  <span className="text-gris4 text-sm">
                    {course.certification_available ? 'available' : 'not available'}
                  </span>
                </div>
              </div>
              
              <div>
                <span className="text-gris4 font-bold">Course Description: </span>
                <span className="text-gris4 mb-4">{course.description}</span>              
              </div>
              
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div className="text-right">
                    <span className="text-xl font-thin inline-block text-black">
                      {course.progress}% completed
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                  <div 
                    style={{ width: `${course.progress}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple"
                  />
                </div>
              </div>
            </div>
            
            <div className="w-64 h-64">
              <img 
                src={course.thumbnail || img}
                alt="Course thumbnail"
                className="w-full h-full object-cover rounded"
                onError={(e) => {
                  e.target.src = img;
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyCourses;