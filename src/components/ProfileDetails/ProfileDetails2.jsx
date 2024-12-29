import React, { useState, useRef } from 'react'; 
import img from './../../assets/bules.png';
import { FaUserCircle } from "react-icons/fa";

const ProfileDetails = () => {
  const [name, setName] = useState("Azouaou Faycel");
  const [email, setEmail] = useState("Azouaou.Faycel@estin.dz");
  const [password, setPassword] = useState("********");
  const fileInputRef = useRef(null); 

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}>
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-semibold text-purple text-center mb-8">
          Profile Details
        </h1>

        <div className="space-y-6">
          {/* Profile Picture Section */}
        <div className="flex items-center space-x-20">
          <label className="text-lg font-bold min-w-[150px]">Profile picture :</label>
          <div className="flex items-center space-x-20">
            <div className='flex flex-col items-center space-y-4'>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-6 py-2 border-2 border-purple text-purple rounded-2xl"
            >
              Upload a new picture
            </button>
            <button className="px-6 py-2 border text-gray-500 rounded-2xl">
              Delete the actual picture
            </button>
            </div>
            <div className="w-24 h-24 flex items-center justify-center">
              <FaUserCircle className="w-24 h-24 text-gris4" /> 
            </div>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
            />
          </div>
        </div>
          {/* Name Field */}
          <div>
            <label className="block text-lg font-bold mb-2">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded-md bg-white text-gray-700 focus:outline-none focus:border-purple"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-lg font-bold mb-2">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-md bg-white text-gray-700 focus:outline-none focus:border-purple"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-lg font-bold mb-2">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-md bg-white text-gray-700 focus:outline-none focus:border-purple"
            />
          </div>
                  {/* Edit Button */}
        <div className="flex justify-center mt-8">
          <button className="px-12 py-2 border border-purple text-purple rounded-2xl">
            Edit
          </button>
        </div>

        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
