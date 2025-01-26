import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getStudent } from './../redux/studentSlice';

const ProfileView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentStudent, loading, error } = useSelector(state => state.students);

  useEffect(() => {
    dispatch(getStudent(id));
  }, [id, dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!currentStudent) return <div>No profile found</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">{currentStudent.name}</h2>
        <p>Email: {currentStudent.email}</p>
        <div className="mt-4">
          <h3 className="font-bold">Experience:</h3>
          <p>{currentStudent.experience}</p>
        </div>
        <div className="mt-4">
          <h3 className="font-bold">Degrees:</h3>
          <p>{currentStudent.degrees}</p>
        </div>
        <div className="mt-4">
          <h3 className="font-bold">Skills:</h3>
          <div className="flex flex-wrap gap-2">
            {currentStudent.skills.split(',').map((skill, index) => (
              <span key={index} className="bg-purple2 text-purple px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;