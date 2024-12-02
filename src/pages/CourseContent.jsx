import React from 'react'
import { MdOutlineStarPurple500, MdOndemandVideo, MdArticle, MdQuiz, MdDone, MdOutlineClose, MdLock } from "react-icons/md";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import CourseImg from '../assets/CourseContent.png'
import BackgroundImg from '../assets/Group 25.png'

const CourseContent = () => {
    return (
        <div>
            <Navbar />
            <div className=' '>
                {/* Course Info */}
                <div className="py-12 md:px-20 px-10 flex justify-between items-center py-4 " style={{ backgroundImage: `url(${BackgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
                    <div className='md:basis-1/2 w-full md:items-start items-center flex flex-col gap-4'>
                        <h1 className='text-4xl font-bold'>Build Responsive Real-World Websites with HTML and CSS</h1>
                        <div className='text-[#666666] flex flex-col gap-2 md:items-start items-center'>
                            <p>Instructor: Faycel Azouaou</p>
                            <p>Students enrolled : 2500 student</p>
                            <p>Duration : 25 hours</p>
                        </div>
                        <div className='bg-[#9747FF] text-white rounded-md p-2 w-28 text-center font-bold'>Best Seller</div>
                        <div className='flex flex-row justify-around w-full '>
                            <div className='flex items-center gap-1 text-2xl  '>
                                <MdOutlineStarPurple500 color='#FFD700' />
                                <span>3</span>/5

                            </div>
                            <div className='font-bold text-3xl'>13$</div>
                        </div>

                    </div>
                    <div className='mr-32 md:block hidden'>
                        <img src={CourseImg} alt="" className='w-[500px]' />
                    </div>
                </div>
                {/* Description Section */}
                <div className='my-12 md:px-20 px-10 max-w-[90%]'>
                    <h1 className='text-4xl font-bold py-4'>Description:</h1>
                    <p className='text-xl'> This course is designed for anyone who wants to master the fundamentals of web development and create stunning, fully responsive websites. This hands-on course takes you from beginner to proficient, teaching you how to structure and style web pages using HTML5 and CSS3.</p>
                </div>
                {/* Course Content Section */}
                <div className='my-12 md:px-20 px-10 max-w-[90%]'>
                    <div className='flex justify-between pb-6'>
                        <h1 className='text-4xl font-bold'>Course Content</h1>
                        <p className='text-xl'>total : 30 section</p>
                    </div>
                    <div className='flex flex-col px-10 '>
                        <div className='flex justify-between items-center py-4 md:gap-8 gap-2 border-b-2'>
                            <div className='flex-none bg-[#D5C9FF] rounded-full w-14 h-14 text-[#5316A2] text-center text-lg pt-3'>
                                1/30
                            </div>
                            <div className='flex-auto min-w-[150px]'>
                                <h2 className='text-2xl font-semibold'>Text Formatting and Semantic Elements in HTML</h2>
                                <div className='flex items-center gap-1 text-[#9747FF]'>
                                    <MdOndemandVideo />
                                    video: <span>5min</span>
                                </div>
                            </div>
                            <div className='flex-none bg-[#9747FF] rounded-full w-14 h-14 text-white font-bold text-4xl px-2 py-3'>
                                <MdDone />
                            </div>
                        </div>

                        <div className='flex justify-between items-center py-4 md:gap-8 gap-2 border-b-2'>
                            <div className='flex-none bg-[#D5C9FF] rounded-full w-14 h-14 text-[#5316A2] text-center text-lg pt-3'>
                                2/30
                            </div>
                            <div className='flex-auto min-w-[150px]'>
                                <h2 className='text-2xl font-semibold'>Working with Images in HTML</h2>
                                <div className='flex items-center gap-1 text-[#9747FF]'>
                                    <MdArticle />
                                    Article
                                </div>
                            </div>
                            <div className='flex-none bg-[#9747FF] rounded-full w-14 h-14 text-white font-bold text-4xl px-2 py-3'>
                                <MdDone />
                            </div>
                        </div>

                        <div className='flex justify-between items-center py-4 md:gap-8 gap-2 border-b-2'>
                            <div className='flex-none bg-[#D5C9FF] rounded-full w-14 h-14 text-[#5316A2] text-center text-lg pt-3'>
                                3/30
                            </div>
                            <div className='flex-auto min-w-[150px]'>
                                <h2 className='text-2xl font-semibold'>CSS Basics: Styling Your Web Pages</h2>
                                <div className='flex items-center gap-1 text-[#9747FF]'>
                                    <MdQuiz />
                                    Quiz
                                </div>
                            </div>
                            <div className='flex-none bg-[#D5C9FF] rounded-full w-14 h-14 text-white font-bold text-4xl px-2 py-3'>
                                <MdOutlineClose />
                            </div>
                        </div>

                        <div className='flex justify-between items-center py-4 md:gap-8 gap-2 border-b-2'>
                            <div className='flex-none bg-[#D5C9FF] rounded-full w-14 h-14 text-[#5316A2] text-center text-lg pt-3'>
                                4/30
                            </div>
                            <div className='flex-auto min-w-[150px]'>
                                <h2 className='text-2xl font-semibold'>Typography in CSS: Fonts, Sizes, and Alignment</h2>
                                <div className='flex items-center gap-1 text-[#9747FF]'>
                                    <MdOndemandVideo />
                                    video: <span>10min</span>
                                </div>
                            </div>
                            <div className='flex-none bg-[#B0B0B0] rounded-full w-14 h-14 text-white font-bold text-4xl px-2 py-3'>
                                <MdLock />
                            </div>
                        </div>

                        <div className='flex justify-between items-center py-4 md:gap-8 gap-2 border-b-2'>
                            <div className='flex-none bg-[#D5C9FF] rounded-full w-14 h-14 text-[#5316A2] text-center text-lg pt-3'>
                                5/30
                            </div>
                            <div className='flex-auto min-w-[150px]'>
                                <h2 className='text-2xl font-semibold'>Introduction to Responsive Design</h2>
                                <div className='flex items-center gap-1 text-[#9747FF]'>
                                    <MdOndemandVideo />
                                    video: <span>5min</span>
                                </div>
                            </div>
                            <div className='flex-none bg-[#B0B0B0] rounded-full w-14 h-14 text-white font-bold text-4xl px-2 py-3'>
                                <MdLock />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default CourseContent