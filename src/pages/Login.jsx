import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, resetState } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import GirlBanner from '../assets/girl_banner.png';
import HeaderSection from '../components/HeaderSection/HeaderSection';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  const [emailOrUsername, setEmailOrUsername] = useState(''); // New state for email or username
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student'); // Default role
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // Access state from Redux store
  const { loading, error, success } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email:emailOrUsername , password, role }));
};

  useEffect(() => {
    if (success) {
      dispatch(resetState()); // Reset the state after success
      navigate('/'); // Redirect to home page
    }
  }, [success, dispatch, navigate]);

  return (
    <div>
      {/* Header Section */}
      <HeaderSection />

      <div className="w-[90%] h-[80vh] mx-auto mt-8 flex">
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <div className="w-[80%]">
            <div className="flex justify-between items-center">
              <h1 className="text-4xl">Login</h1>
              <p>
                <span>Don't have an account? </span>
                <a className="underline" href="/signup">Create an account instead</a>
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4 font-semibold">
              <div className="flex flex-col gap-2">
                <label className="text-gris3" htmlFor="emailOrUsername">Email or Username:</label>
                <input
                  type="text"
                  id="emailOrUsername"
                  value={emailOrUsername}
                  onChange={(e) => setEmailOrUsername(e.target.value)}
                  required
                  className="border-2 outline-none focus:ring-2 focus:ring-[#9747FF] p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gris3" htmlFor="password">Password :</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border-2 outline-none focus:ring-2 focus:ring-[#9747FF] p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-gris3" htmlFor="role">Select Role :</label>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                  className="border-2 outline-none focus:ring-2 focus:ring-[#9747FF] p-2 rounded-md"
                >
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                </select>
              </div>
              <div className="flex justify-center w-full my-3">
                <button
                  type="submit"
                  className="bg-transparent w-full rounded-3xl hover:bg-purple text-purple font-semibold hover:text-white py-2 px-4 border border-purple hover:border-transparent text-lg"
                  disabled={loading} // Disable button during loading
                >
                  {loading ? 'Logging in...' : 'Login'}
                </button>
              </div>
            </form>

            {/* Display Error Message */}
            {error && (
              <div className="text-red-500 text-center mt-4">
                {typeof error === 'string' ? error : 'Login failed. Please try again.'}
              </div>
            )}

            <div>
              <h1 className="text-xl text-center">Or</h1>
              <div className="flex justify-center w-full my-3">
                <button
                  type="button"
                  className="flex items-center justify-center w-full bg-transparent rounded-3xl font-semibold py-2 px-4 border text-lg border-gray-400 hover:bg-gray-100 transition duration-300"
                >
                  <FcGoogle className="mr-2 text-xl" />
                  <span>Continue with Google</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 md:flex hidden justify-center items-center">
          <img className="w-[80%]" src={GirlBanner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
