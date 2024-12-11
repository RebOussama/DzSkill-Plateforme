import React from 'react'
import { MdOutlineStarPurple500, MdOndemandVideo, MdArticle, MdQuiz, MdDone, MdOutlineClose, MdLock } from "react-icons/md";
import { CgSandClock } from "react-icons/cg";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import CourseImg from '../assets/CourseContent.png'
import BackgroundImg from '../assets/Group 25.png'
import { div } from 'framer-motion/client';
const CourseInfo = {
    Title: 'Build Responsive Real-World Websites with HTML and CSS',
    Instructor: 'Faycel Azouaou',
    Student_Enrolled: '2500',
    Duration: '16',
    rating: '3',
    price: '15',
    Description: 'This course is designed for anyone who wants to master the fundamentals of web development and create stunning, fully responsive websites. This hands-on course takes you from beginner to proficient, teaching you how to structure and style web pages using HTML5 and CSS3.',
    Sections: [{ title: 'Text Formatting and Semantic Elements in HTML', type: 'video', value: '5min', status: 'Done' },
    { title: 'Working with Images in HTML', type: 'article', value: '', status: 'Done' },
    { title: 'CSS Basics: Styling Your Web Pages', type: 'quiz', value: '', status: 'notDone' },
    { title: 'Typography in CSS: Fonts, Sizes, and Alignment', type: 'video', value: '10min', status: 'Lock' },
    { title: 'Introduction to Responsive Design', type: 'video', value: '5min', status: 'Lock' },
    { title: 'Text Formatting and Semantic Elements in HTML', type: 'video', value: '5min', status: 'Lock' },
    { title: 'Working with Images in HTML', type: 'article', value: '', status: 'Lock' },
    { title: 'CSS Basics: Styling Your Web Pages', type: 'quiz', value: '', status: 'Lock' },
    { title: 'Typography in CSS: Fonts, Sizes, and Alignment', type: 'video', value: '10min', status: 'Lock' },
    { title: 'Introduction to Responsive Design', type: 'video', value: '5min', status: 'Lock' }],
}


const categories = [
    { name: 'Category 1', subCategories: ['Subcategory 1-1', 'Subcategory 1-2'] },
    { name: 'Category 2', subCategories: ['Subcategory 2-1', 'Subcategory 2-2'] },
    { name: 'Category 3', subCategories: ['Subcategory 3-1', 'Subcategory 3-2'] },
  ];



const CourseContent = () => {
    return (
        <div>
            <Navbar />
            <div className=' '>
                {/* Course Info */}
                <div className="py-12 md:px-20 px-10 flex justify-between items-center py-4 " style={{ backgroundImage: `url(${BackgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
                    <div className='md:basis-1/2 w-full md:items-start items-center flex flex-col gap-4'>
                        <h1 className='md:text-4xl text-2xl md:text-start text-center font-bold'>{CourseInfo.Title}</h1>
                        <div className='text-[#666666] flex flex-col gap-2 md:items-start items-center'>
                            <p>Instructor: {CourseInfo.Instructor}</p>
                            <p>Students enrolled : {(CourseInfo.Student_Enrolled).length > 0 ? `${CourseInfo.Student_Enrolled} Students` : "Unlimited"}</p>
                            <p>Duration : {`${CourseInfo.Duration}` || "Unknown"} hours </p>
                        </div>
                        <div className='bg-[#9747FF] text-white rounded-md p-2 w-28 text-center font-bold'>Best Seller</div>
                        <div className='flex flex-row justify-around w-full '>
                            <div className='flex items-center gap-1 text-2xl  '>
                                <MdOutlineStarPurple500 color='#FFD700' />
                                <span>{CourseInfo.rating}</span>/5

                            </div>
                            <div className='font-bold text-3xl'>{CourseInfo.price.length > 0 ? `${CourseInfo.price}$` : "Free"}</div>
                        </div>

                    </div>
                    <div className='mr-32 md:block sm:hidden hidden'>
                        <img src={CourseImg} alt="" className='w-[500px]' />
                    </div>
                </div>
                {/* Description Section */}
                <div className='my-12 md:px-20 px-10 max-w-[90%]'>
                    <h1 className='md:text-4xl text-2xl md:text-start text-center font-bold py-4'>Description:</h1>
                    <p className='md:text-xl text-lg md:text-start text-center'> {CourseInfo.Description}</p>
                </div>
                {/* Course Content Section */}
                <div className='my-12 md:px-20 px-10 max-w-[90%]'>
                    <div className='flex justify-between pb-6'>
                        <h1 className='md:text-4xl text-2xl md:text-start text-center font-bold'>Course Content</h1>
                        <p className='md:text-xl text-lg'>total : {CourseInfo.Sections.length} section</p>
                    </div>
                    <div className='flex flex-col md:px-10 px-2 max-h-[500px] overflow-auto touch-pan-y'>
                        {CourseInfo.Sections.length > 0 ? CourseInfo.Sections.map((section, index) => {
                            return (
                                <div key={index} className='flex justify-between items-center py-4 md:gap-8 gap-2 border-b-2'>
                                    <div className='flex-none bg-[#D5C9FF] rounded-full md:w-14 w-12 md:h-14 h-12 text-[#5316A2] text-center md:text-lg text-md pt-3'>
                                        {index + 1}/{CourseInfo.Sections.length}
                                    </div>
                                    <div className='flex-auto min-w-[150px]'>
                                        <h2 className='md:text-2xl text-lg font-semibold'>
                                            {section.title}
                                        </h2>
                                            {section.type == 'video' ? (<div className='flex items-center gap-1 text-[#9747FF]'><MdOndemandVideo /> video: <span>{section.value}</span></div>) :
                                                section.type == 'quiz' ? (<div className='flex items-center gap-1 text-[#9747FF]'><MdQuiz /> Quiz</div>) :
                                                    <div className='flex items-center gap-1 text-[#9747FF]'><MdArticle />
                                                        Article</div>}

                                    </div>
                                    {section.status == 'Done' ? (<div className='flex-none bg-[#9747FF] rounded-full md:w-14 w-12 md:h-14 h-12 text-white font-bold md:text-4xl text-3xl px-2 py-3'>
                                        <MdDone /></div>) :
                                        section.status == 'notDone' ? (<div className='flex-none bg-[#D5C9FF] rounded-full md:w-14 w-12 md:h-14 h-12 text-white font-bold md:text-4xl text-3xl px-2 py-3 border-l-2 border-b-2  border-[#9747FF]'>
                                            <MdDone />
                                        </div>) :
                                            (<div className='flex-none bg-[#B0B0B0] rounded-full md:w-14 w-12 md:h-14 h-12 text-white font-bold md:text-4xl text-3xl px-2 py-3'>
                                                <MdLock />
                                            </div>)
                                    }
                                </div>

                            )
                        }) : <div className='flex justify-center md:text-4xl text-2xl'>This Course is Empty</div>}

                       
                    </div>

                </div>

            </div>
            
            <Footer />
        </div>
    )
}

export default CourseContent