import React, { useState, useRef, useEffect } from 'react'; 
import img from './../../assets/bules.png';

import { Plus, X } from 'lucide-react'; 

const ProfileDetails = () => {
  const [name, setName] = useState("Azouaou Faycel");
  const [email, setEmail] = useState("Azouaou.Faycel@estin.dz");
  const [password, setPassword] = useState("********");
  const [experience, setExperience] = useState([
    "10+ years of experience in software development",
    "Specializing in IoT and cloud technologies.",
  ]);
  const [degrees, setDegrees] = useState([
    "Cycle preparatoire en informatique a ESTIN",
    "Cycle superieure en informatique a ESI",
  ]);
  const [skills, setSkills] = useState([
    "Python",
    "Java",
    "C++",
    "Machine Learning",
    "Deep Learning",
    "Data Science",
    "Big Data Analytics",
  ]);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (indexToRemove) => {
    setSkills(skills.filter((_, index) => index !== indexToRemove));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addSkill();
    }
  };

  const degreeRef = useRef(null);
  const adjustTextareaHeight2 = () => {
    const textarea = degreeRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };

  useEffect(() => {
    adjustTextareaHeight2();
  }, [degrees]);

  const experienceRef = useRef(null);
  const adjustTextareaHeight = () => {
    const textarea = experienceRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [experience]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}>
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-semibold text-purple text-center mb-8">
          Profile Details
        </h1>

        <div className="space-y-6">
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

          {/* Experience Field */}
          <div>
            <label className="block text-lg font-bold mb-2">Experience:</label>
            <textarea
              ref={experienceRef}
              value={experience.join("\n")} // Changed to join array into a single string for textarea compatibility.
              onChange={(e) =>
                setExperience(e.target.value.split("\n"))
              } // Split string back into array on change.
              className="w-full p-4 border rounded-md bg-white text-gray-700 overflow-hidden resize-none focus:outline-none focus:border-purple"
              rows={1}
            />
          </div>

          {/* Degrees Field */}
          <div>
            <label className="block text-lg font-bold mb-2">Degrees:</label>
            <textarea
              ref={degreeRef} // Corrected reference to the appropriate ref for degrees.
              value={degrees.join("\n")}
              onChange={(e) => setDegrees(e.target.value.split("\n"))}
              className="w-full p-4 border rounded-md bg-white text-gray-700 overflow-hidden resize-none focus:outline-none focus:border-purple"
              rows={1}
            />
          </div>

          {/* Skills Field */}
          <div>
            <label className="block text-lg font-bold mb-2">Skills:</label>
            <div className="border rounded-md p-4">
              <div className="flex flex-wrap gap-2 mb-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-purple2 text-purple px-3 py-1 rounded-full flex items-center gap-2"
                  >
                    <span>{skill}</span>
                    <button
                      onClick={() => removeSkill(index)}
                      className="hover:text-purple"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 ">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Add a new skill"
                  className="flex-1 p-2 border rounded-md focus:outline-none focus:border-purple"
                />
                <button
                  onClick={addSkill}
                  className="bg-purple text-white px-4 py-2 rounded-md hover:bg-purple-700 flex items-center gap-2 "
                >
                  <Plus size={20} />
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
