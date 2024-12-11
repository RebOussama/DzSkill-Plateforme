import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import BgImg from '../assets/Carreaux.png'
import { MdKeyboardArrowRight, MdOutlineFilterAlt, MdOutlineStarPurple500,MdOutlineKeyboardArrowDown  } from "react-icons/md";
import CourseImg from '../assets/CourseContent.png'

const categories = [
    {
        name: 'Computer Science & Programming',
        subCategories: [
            'Software Development',
            'Web Development',
            'Database Management',
            'Cybersecurity',
            'Algorithms and Data Structures',
            'Operating Systems',
            'Cloud Computing',
            'DevOps',
            'Mobile App Development',
            'Game Development'
        ]
    },
    {
        name: 'Technology & Engineering',
        subCategories: [
            'Information and Computer Technology (ICT)',
            'Electronics and Communication Engineering',
            'Mechanical Systems and Automation',
            'Civil and Structural Engineering',
            'Artificial Intelligence and Data Engineering',
            'Robotics and Mechatronics'
        ]
    },
    {
        name: 'Languages & Communication',
        subCategories: [
            'Linguistics',
            'Technical Writing',
            'Public Speaking',
            'Translation and Localization',
            'Language Education',
            'Interpersonal Communication'
        ]
    },
    {
        name: 'Health & Fitness',
        subCategories: [
            'Nutrition',
            'Physical Training',
            'Mental Wellness',
            'Rehabilitation',
            'Yoga and Meditation',
            'Sports Science'
        ]
    },


    {
        name: 'Marketing & Business',
        subCategories: [
            'Digital Marketing',
            'Market Research',
            'Entrepreneurship',
            'Brand Management',
            'Sales Strategies',
            'Business Analytics'
        ]
    },

    {
        name: 'Design & Creativity',
        subCategories: [
            'Graphic Design',
            'UI/UX Design',
            'Industrial Design',
            'Fashion Design',
            'Photography',
            'Animation and Game Design'
        ]
    },

];


const Courses = () => {
    const [isOpen, setisOpen] = useState(false)

    const [isOpenLevel, setisOpenLevel] = useState(false)
    const [LevelSelected, setLevelSelected] = useState("")

    const [isOpenCertf, setisOpenCertf] = useState(false)
    const [CertfSelected, setCertfSelected] = useState("")

    const [isOpenPricing, setisOpenPricing] = useState(false)


    const [isOpenDuration, setisOpenDuration] = useState(false)
    const [DurationSelected, setDurationSelected] = useState("")

    const [isOpenRating, setisOpenRating] = useState(false)
    const [RatingSelected, setRatingSelected] = useState("")

    return (
        <div>
            <Navbar />

            <div className='flex pb-4 relative mt-4 h-[1000px]' style={{ backgroundImage: `url(${BgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'repeat', }}>
                {/* Filter Side  */}
                <div className={isOpen ? 'flex-none absolute left-[0px] bg-white w-80 h-full shadow-xl duration-200 ease-in-out' : 'flex-none absolute left-[-400px] bg-white w-80 h-full shadow-xl duration-200 ease-in-out'}>
                    <div className='text-3xl font-semibold text-[#9747FF] w-full py-4 text-center border-b-2'>Filter</div>
                    <ul className='flex flex-col'>
                        <li onClick={() => { setisOpenLevel(!isOpenLevel) }} className={isOpenLevel?'cursor-pointer px-6 py-4 hover:text-[#9747FF] text-start flex justify-between text-[#9747FF] font-bold text-xl':'cursor-pointer px-6 py-4 hover:text-[#9747FF] text-start flex justify-between text-lg'}>Level {isOpenLevel?<MdOutlineKeyboardArrowDown size='26'/>:<MdKeyboardArrowRight size='26' />}</li>
                        <div className={isOpenLevel ? 'flex flex-wrap gap-2 px-6 py-3' : 'hidden'}>
                            <div onClick={() => { setLevelSelected("Beginner") }} className={LevelSelected == 'Beginner' ? 'bg-[#9747FF] cursor-pointer  rounded-2xl px-4  text-white p-1' : 'border-2 border-[#999999] cursor-pointer  rounded-2xl px-4  text-[#999999] p-1'}>Beginner</div>
                            <div onClick={() => { setLevelSelected("Intermediate") }} className={LevelSelected == 'Intermediate' ? 'bg-[#9747FF] cursor-pointer  rounded-2xl px-4  text-white p-1' : 'border-2 border-[#999999] cursor-pointer  rounded-2xl px-4  text-[#999999] p-1'}>Intermediate</div>
                            <div onClick={() => { setLevelSelected("Advanced") }} className={LevelSelected == 'Advanced' ? 'bg-[#9747FF] cursor-pointer  rounded-2xl px-4  text-white p-1' : 'border-2 border-[#999999] cursor-pointer  rounded-2xl px-4  text-[#999999] p-1'}>Advanced</div>

                        </div>
                        <li onClick={() => { setisOpenCertf(!isOpenCertf) }} className={isOpenCertf?'cursor-pointer px-6 py-4 hover:text-[#9747FF] text-start flex justify-between text-[#9747FF] font-bold text-xl':'cursor-pointer px-6 py-4 hover:text-[#9747FF] text-start flex justify-between text-lg'}>Certification {isOpenCertf?<MdOutlineKeyboardArrowDown size='26'/>:<MdKeyboardArrowRight size='26' />}</li>
                        <div className={isOpenCertf ? 'flex flex-wrap gap-2 px-6 py-3' : 'hidden'}>
                            <div onClick={() => { setCertfSelected("Free") }} className={CertfSelected == 'Free' ? 'bg-[#9747FF] cursor-pointer   rounded-2xl px-4  text-white p-1' : 'border-2 border-[#999999] cursor-pointer  rounded-2xl px-4  text-[#999999] p-1'}>Free</div>
                            <div onClick={() => { setCertfSelected("Paid") }} className={CertfSelected == 'Paid' ? 'bg-[#9747FF] cursor-pointer   rounded-2xl px-4  text-white p-1' : 'border-2 border-[#999999] cursor-pointer  rounded-2xl px-4  text-[#999999] p-1'}>Paid</div>
                        </div>
                        <li onClick={() => { setisOpenPricing(!isOpenPricing) }} className={isOpenPricing?'cursor-pointer px-6 py-4 hover:text-[#9747FF] text-start flex justify-between text-[#9747FF] font-bold text-xl':'cursor-pointer px-6 py-4 hover:text-[#9747FF] text-start flex justify-between text-lg'}>Pricing {isOpenPricing?<MdOutlineKeyboardArrowDown size='26'/>:<MdKeyboardArrowRight size='26' />}</li>
                        <div className={isOpenPricing ? 'flex flex-wrap gap-4 px-6 items-center' : 'hidden'}>
                            From 
                            <span className='relative '><input type="number" placeholder='Min' className="w-20 px-2 py-1 border-2 rounded-2xl outline-none focus:ring-2 focus:ring-[#9747FF] border-gray-300" /><span className='text-[#9747FF] text-xl absolute right-3'>$</span></span>
                        
                            To 
                            <span className='relative '><input type="number" placeholder='Max' className="w-20 px-2 py-1 border-2 rounded-2xl outline-none focus:ring-2 focus:ring-[#9747FF] border-gray-300" /><span className='text-[#9747FF] text-xl absolute right-3'>$</span></span>

                        </div>                           
                        <li onClick={() => { setisOpenDuration(!isOpenDuration) }} className={isOpenDuration?'cursor-pointer px-6 py-4 hover:text-[#9747FF] text-start flex justify-between text-[#9747FF] font-bold text-xl':'cursor-pointer px-6 py-4 hover:text-[#9747FF] text-start flex justify-between text-lg'}>Course Duration {isOpenDuration?<MdOutlineKeyboardArrowDown size='26'/>:<MdKeyboardArrowRight size='26' />}</li>
                        <div className={isOpenDuration ? 'flex flex-wrap gap-2 px-6 py-3' : 'hidden'}>
                            <div onClick={() => { setDurationSelected(">5h") }} className={DurationSelected == '>5h' ? 'bg-[#9747FF] cursor-pointer  rounded-2xl px-4  text-white p-1' : 'border-2 border-[#999999] cursor-pointer  rounded-2xl px-4  text-[#999999] p-1'}>{">5h"}</div>
                            <div onClick={() => { setDurationSelected(">5h and 10h<") }} className={DurationSelected == '>5h and 10h<' ? 'bg-[#9747FF] cursor-pointer  rounded-2xl px-4  text-white p-1' : 'border-2 border-[#999999] cursor-pointer  rounded-2xl px-4  text-[#999999] p-1'}>{">5h and 10h<"}</div>
                            <div onClick={() => { setDurationSelected(">10h") }} className={DurationSelected == '>10h' ? 'bg-[#9747FF] cursor-pointer  rounded-2xl px-4  text-white p-1' : 'border-2 border-[#999999] cursor-pointer  rounded-2xl px-4  text-[#999999] p-1'}>{">10h"}</div>

                        </div>       
                        <li onClick={() => { setisOpenRating(!isOpenRating) }} className={isOpenRating?'cursor-pointer px-6 py-4 hover:text-[#9747FF] text-start flex justify-between text-[#9747FF] font-bold text-xl':'cursor-pointer px-6 py-4 hover:text-[#9747FF] text-start flex justify-between text-lg'}>Rating {isOpenRating?<MdOutlineKeyboardArrowDown size='26'/>:<MdKeyboardArrowRight size='26' />}</li>
                        <div className={isOpenRating ? 'flex flex-wrap gap-2 py-2 px-6' : 'hidden'}>
                            <div onClick={() => { setRatingSelected(">1 star") }} className={RatingSelected == '>1 star' ? 'bg-[#9747FF] cursor-pointer  rounded-2xl px-4  text-white p-1' : 'border-2 border-[#999999] cursor-pointer  rounded-2xl px-4  text-[#999999] p-1'}>{">1 star"}</div>
                            <div onClick={() => { setRatingSelected(">2 star") }} className={RatingSelected == ">2 star" ? 'bg-[#9747FF] cursor-pointer  rounded-2xl px-4  text-white p-1' : 'border-2 border-[#999999] cursor-pointer  rounded-2xl px-4  text-[#999999] p-1'}>{">2 star"}</div>
                            <div onClick={() => { setRatingSelected(">3 star") }} className={RatingSelected == ">3 star" ? 'bg-[#9747FF] cursor-pointer  rounded-2xl px-4  text-white p-1' : 'border-2 border-[#999999] cursor-pointer  rounded-2xl px-4  text-[#999999] p-1'}>{">3 star"}</div>
                            <div onClick={() => { setRatingSelected(">4 star") }} className={RatingSelected == ">4 star" ? 'bg-[#9747FF] cursor-pointer  rounded-2xl px-4  text-white p-1' : 'border-2 border-[#999999] cursor-pointer  rounded-2xl px-4  text-[#999999] p-1'}>{">4 star"}</div>
                            <div onClick={() => { setRatingSelected("5 star") }} className={RatingSelected == "5 star" ? 'bg-[#9747FF] cursor-pointer  rounded-2xl px-4  text-white p-1' : 'border-2 border-[#999999] cursor-pointer  rounded-2xl px-4  text-[#999999] p-1'}>{"5 star"}</div>

                        </div>                     </ul>
                </div>
                {/* Categories Side  */}
                <div className='flex-none bg-white w-80 h-full shadow-xl'>
                    <div className='text-3xl font-semibold text-[#9747FF] w-full py-4 text-center border-b-2'>Categories</div>
                    <ul className='flex flex-col'>
                        {categories && categories.map((categorie, index) => {
                            return (
                                <li key={index} className='pl-8 py-4 text-lg  group '>
                                    <span className='cursor-pointer hover:text-[#9747FF] flex  items-center justify-around'><span className='w-64'>{categorie.name}</span> <MdKeyboardArrowRight size='26' /> </span>

                                    <ul className='absolute left-80 top-0  bg-white shadow-xl w-80 h-[1000px] hidden group-hover:block'>
                                        <li className='text-3xl font-semibold text-[#9747FF] w-full py-4 text-center border-b-2'>Sub-Categories</li>
                                        {categorie.subCategories.map((sub, indexSub) => {
                                            return (<li key={indexSub} className='cursor-pointer px-6 py-4 hover:text-[#9747FF] text-start'>{sub}</li>)


                                        })}
                                    </ul>

                                </li>

                            )


                        })}
                    </ul>
                </div>
                {/* Course Side  */}
                <div className='flex-1 flex flex-col h-full'>
                    <div className='flex justify-between  p-6'>
                        <div></div>
                        <div className='flex items-center mr-12 gap-4'>
                            <div className="relative w-full max-w-md">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full pl-10 py-2 border-2 rounded-lg outline-none focus:ring-2 focus:ring-[#9747FF] border-gray-300"
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path d="M21 21l-4.35-4.35M16.65 16.65a7.5 7.5 0 1 1 1.5-1.5l4.35 4.35z" />
                                </svg>
                            </div>

                            <MdOutlineFilterAlt onClick={() => { setisOpen(!isOpen) }} size='54' className='cursor-pointer opacity-50 hover:opacity-100 hover:text-[#9747FF]' />
                        </div>

                    </div>
                    <div className='flex-1 flex flex-wrap gap-5 mx-20 overflow-auto touch-pan-y'>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => {
                            return (<div key={index} className="card w-80 h-96 p-1 border-[2px] bg-white rounded-xl shadow-md cursor-pointer">
                                <img src={CourseImg} alt="" className='w-full h-1/2' />
                                <div className='flex flex-col gap-1 px-6 py-3 text-[#666666]'>
                                    <h1 className='text-lg text-black font-bold'>Build Responsive Real-World Websites with HTML and CSS</h1>
                                    <p>Azouaou Faycel</p>
                                    <p><span>250 students enrolled</span><span>25 hours</span></p>
                                    <div className='flex flex-row justify-around w-full pt-4 text-black text-lg  '>
                                        <div className='flex items-center gap-1   '>
                                            <MdOutlineStarPurple500 color='#FFD700' />
                                            <span>3</span>/5

                                        </div>
                                        <div className='font-bold '>13$</div>
                                    </div>
                                </div>


                            </div>)
                        })}

                    </div>

                </div>



            </div>


            <Footer />
        </div>
    )
}

export default Courses