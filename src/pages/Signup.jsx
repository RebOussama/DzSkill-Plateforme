import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from 'react-redux';
import { createTeacher, createStudent, resetState } from '../redux/authSlice'; // Import resetState action
import GirlBanner from '../assets/girl_banner.png';
import HeaderSection from '../components/HeaderSection/HeaderSection';

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('student');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Redux state for loading, success, and error
    const { loading, success, error: apiError } = useSelector((state) => state.auth);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Validate inputs
        if (!firstName || !lastName || !email || !password || !confirmPassword || !username) {
            setError('All fields are required.');
            return;
        }

        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        // Dispatch the correct action based on the role
        if (role === 'teacher') {
            dispatch(createTeacher({ firstName, lastName, email, password, username }));
        } else {
            dispatch(createStudent({ firstName, lastName, email, password, username }));
        }
    };

    // Handle success or error after API request
    useEffect(() => {
        if (success) {
            // Show success message and navigate after 3 seconds
            setTimeout(() => {
                dispatch(resetState()); // Reset state
                navigate('/'); // Navigate to home
            }, 3000);
        } else if (apiError) {
            // Display error message
            setError(apiError);
        }
    }, [success, apiError, dispatch, navigate]);

    return (
        <div>
            <HeaderSection />

            <div className='w-[90%] h-[120vh] mx-auto mt-8 flex'>
                <div className='md:w-1/2 w-full flex justify-center items-center'>
                    <div className='w-[80%]'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-4xl'>Create an account</h1>
                            <Link className='underline' to='/login'>log in instead</Link>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit} className='flex flex-col gap-4 mt-4 font-semibold'>
                                {/* Error or Success Messages */}
                                {error && <p className='text-red-500'>{error}</p>}
                                {success && <p className='text-green-500'>Account created successfully! Redirecting...</p>}

                                {/* Form Fields */}
                                <div className='flex flex-col gap-2'>
                                    <label className="text-gris3" htmlFor='username'>Username :</label>
                                    <input
                                        onChange={(e) => setUsername(e.target.value)}
                                        value={username}
                                        required
                                        className='border-2 outline-none focus:ring-2 focus:ring-[#9747FF] p-2 rounded-md'
                                        type="text"
                                        id="username"
                                    />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className="text-gris3" htmlFor='firstName'>First name :</label>
                                    <input
                                        onChange={(e) => setFirstName(e.target.value)}
                                        value={firstName}
                                        required
                                        className='border-2 outline-none focus:ring-2 focus:ring-[#9747FF] p-2 rounded-md'
                                        type="text"
                                        id="firstName"
                                    />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className="text-gris3" htmlFor='lastName'>Last name :</label>
                                    <input
                                        onChange={(e) => setLastName(e.target.value)}
                                        value={lastName}
                                        required
                                        className='border-2 outline-none focus:ring-2 focus:ring-[#9747FF] p-2 rounded-md'
                                        type="text"
                                        id="lastName"
                                    />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className="text-gris3" htmlFor='email'>Email :</label>
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        required
                                        className='border-2 outline-none focus:ring-2 focus:ring-[#9747FF] p-2 rounded-md'
                                        type="text"
                                        id="email"
                                    />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className="text-gris3" htmlFor='password'>Password :</label>
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
                                        required
                                        className='border-2 outline-none focus:ring-2 focus:ring-[#9747FF] p-2 rounded-md'
                                        type="password"
                                        id="password"
                                    />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className="text-gris3" htmlFor='confirmPassword'>Confirm Password :</label>
                                    <input
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        value={confirmPassword}
                                        required
                                        className='border-2 outline-none focus:ring-2 focus:ring-[#9747FF] p-2 rounded-md'
                                        type="password"
                                        id="confirmPassword"
                                    />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className="text-gris3" htmlFor='role'>Select Role :</label>
                                    <select
                                        onChange={(e) => setRole(e.target.value)}
                                        value={role}
                                        required
                                        className='border-2 outline-none focus:ring-2 focus:ring-[#9747FF] p-2 rounded-md'
                                        id="role"
                                    >
                                        <option value="student">Student</option>
                                        <option value="teacher">Teacher</option>
                                    </select>
                                </div>
                                <div className='flex justify-center w-full my-3'>
                                    <button
                                        type='submit'
                                        className='bg-transparent w-full rounded-3xl hover:bg-purple text-purple font-semibold hover:text-white py-2 px-4 border border-purple hover:border-transparent text-lg'
                                    >
                                        Create an account
                                    </button>
                                </div>
                            </form>
                            <div>
                                <h1 className='text-xl text-center'>Or</h1>
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
                </div>
                <div className='w-1/2 md:flex hidden justify-center items-center'>
                    <img className='w-[80%]' src={GirlBanner} alt="Girl Banner" />
                </div>
            </div>
        </div>
    );
};

export default Signup;
