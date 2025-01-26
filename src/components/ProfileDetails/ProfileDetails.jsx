import React, { useState, useRef, useEffect } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { 
  
  createStudent, 
  updateStudent, 
  getStudent 
} from '../../redux/studentSlice';
import img from './../../assets/bules.png';
import { Plus, X, Home, User, Settings, Bell } from 'lucide-react'; 
import { useNavigate } from 'react-router-dom';
const ProfileDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentStudent, loading, error } = useSelector(state => state.students);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState([]);
  const [degrees, setDegrees] = useState([]);
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  // Skill Management Functions
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

  // Textarea Height Adjustment
  const degreeRef = useRef(null);
  const experienceRef = useRef(null);

  const adjustTextareaHeight = (ref) => {
    const textarea = ref.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };

  useEffect(() => {
    adjustTextareaHeight(degreeRef);
    adjustTextareaHeight(experienceRef);
  }, [degrees, experience]);

  // Profile Save and Update Handler
  // In handleSaveProfile method
  // ProfileDetails Component
useEffect(() => {
  // Retrieve full student data from localStorage
  const storedStudentData = localStorage.getItem('studentProfileData');
  
  if (storedStudentData) {
    try {
      const parsedData = JSON.parse(storedStudentData);
      
      // Populate all fields from stored data
      setName(parsedData.FullName || '');
      setEmail(parsedData.email || '');
      setPassword(parsedData.Password || '');
      setExperience(parsedData.Experience ? parsedData.Experience.split('\n') : []);
      setDegrees(parsedData.Degree ? parsedData.Degree.split('\n') : []);
      setSkills(parsedData.Skills ? parsedData.Skills.split(',') : []);
    } catch (error) {
      console.error('Error parsing stored student data', error);
    }
  }
}, []);

const handleSaveProfile = () => {
  const studentData = {
    FullName: name,
    email: email,
    Password: password,
    Experience: experience.join('\n'),
    Degree: degrees.join('\n'),
    Skills: skills.join(',')
  };

  const saveAction = currentStudent && currentStudent.ID 
    ? updateStudent({ id: currentStudent.ID, ...studentData })
    : createStudent(studentData);

  dispatch(saveAction)
    .unwrap()
    .then((savedStudent) => {
      // Store FULL student data in localStorage
      localStorage.setItem('studentProfileData', JSON.stringify({
        ...studentData,
        ID: savedStudent.ID
      }));
      
      navigate(`/profile/${savedStudent.ID}`);
    })
    .catch((error) => {
      console.error('Save error:', error);
    });
};
  
  // Load existing student data if editing
  useEffect(() => {
    // Assuming you pass student ID as a prop or from route
    // Replace with actual student ID retrieval method
    const studentId = null; // Update this with actual student ID
    if (studentId) {
      dispatch(getStudent(studentId));
    }
  }, []);

  useEffect(() => {
    const storedStudentId = localStorage.getItem('currentStudentId');
    
    if (storedStudentId) {
      dispatch(getStudent(storedStudentId))
        .unwrap()
        .catch((error) => {
          console.error('Failed to load student:', error);
          localStorage.removeItem('currentStudentId');
        });
    }
  }, [dispatch]);

  useEffect(() => {
    if (currentStudent) {
      setName(currentStudent.FullName || '');
      setEmail(currentStudent.email || '');
      setExperience(currentStudent.Experience ? currentStudent.Experience.split('\n') : []);
      setDegrees(currentStudent.Degree ? currentStudent.Degree.split('\n') : []);
      setSkills(currentStudent.Skills ? currentStudent.Skills.split(',') : []);
    }
  }, [currentStudent]);

  // Populate form when student data is loaded
  useEffect(() => {
    if (currentStudent) {
      setName(currentStudent.name);
      setEmail(currentStudent.email);
      setExperience(currentStudent.experience.split('\n'));
      setDegrees(currentStudent.degrees.split('\n'));
      setSkills(currentStudent.skills.split(','));
    }error
  }, [currentStudent]);

  // Bottom Navigation Component
  const BottomNavigation = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const NavItem = ({ icon: Icon, name, tab }) => (
      <button 
        onClick={() => setActiveTab(tab)}
        className={`flex flex-col items-center justify-center ${
          activeTab === tab ? 'text-purple' : 'text-gray-500'
        }`}
      >
        <Icon size={24} />
        <span className="text-xs mt-1">{name}</span>
      </button>
    );

    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-3">
        <div className="flex justify-around items-center">
          <NavItem icon={Home} name="Home" tab="home" />
          <NavItem icon={User} name="Profile" tab="profile" />
          <NavItem icon={Settings} name="Settings" tab="settings" />
          <NavItem icon={Bell} name="Notifications" tab="notifications" />
        </div>
      </div>
    );
  };

  // Render loading or error states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover' }}>
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8 mb-20">
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
              value={experience.join("\n")}
              onChange={(e) => setExperience(e.target.value.split("\n"))}
              className="w-full p-4 border rounded-md bg-white text-gray-700 overflow-hidden resize-none focus:outline-none focus:border-purple"
              rows={1}
            />
          </div>

          {/* Degrees Field */}
          <div>
            <label className="block text-lg font-bold mb-2">Degrees:</label>
            <textarea
              ref={degreeRef}
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

          {/* Save Profile Button */}
          <div className="text-center mt-6">
            <button 
              onClick={handleSaveProfile}
              className="bg-purple text-white px-6 py-3 rounded-md hover:bg-purple-700 transition duration-300"
            >
              Save Profile
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default ProfileDetails;