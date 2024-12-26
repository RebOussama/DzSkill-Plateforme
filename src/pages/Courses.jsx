import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import BgImg from '../assets/Carreaux.png'
import { MdKeyboardArrowRight, MdOutlineFilterAlt, MdOutlineStarPurple500, MdOutlineKeyboardArrowDown } from "react-icons/md";
import CourseCard from '../components/CourseCard/CourseCard';

const CoursesList = [
    {
        id: 1,
        Title: 'Build Responsive Real-World Websites with HTML and CSS',
        Instructor: 'Faycel Azouaou',
        Category: 'Computer Science & Programming',
        SubCategory: 'Web Development',
        Student_Enrolled: 2500,
        Duration: 16,
        Rating: 3,
        Price: 15,
        Level: 'Beginner',
        Certification: 'Available',
    },
    {
        id: 2,
        Title: 'Introduction to JavaScript',
        Instructor: 'John Doe',
        Category: 'Computer Science & Programming',
        SubCategory: 'Web Development',
        Student_Enrolled: 1800,
        Duration: 12,
        Rating: 4,
        Price: 20,
        Level: 'Beginner',
        Certification: 'Available',
    },
    {
        id: 3,
        Title: 'Advanced React and Redux',
        Instructor: 'Jane Smith',
        Category: 'Computer Science & Programming',
        SubCategory: 'Database Management',
        Student_Enrolled: 3200,
        Duration: 20,
        Rating: 5,
        Price: 25,
        Level: 'Advanced',
        Certification: 'Available',
    },
    {
        id: 4,
        Title: 'Mastering Python for Data Science',
        Instructor: 'Michael Johnson',
        Category: 'Data Science',
        SubCategory: '',
        Student_Enrolled: 4000,
        Duration: 25,
        Rating: 4.5,
        Price: 30,
        Level: 'Intermediate',
        Certification: 'Available',
    },
    {
        id: 5,
        Title: 'UI/UX Design Essentials',
        Instructor: 'Emily Davis',
        Category: 'Design & Creativity',
        SubCategory: 'UI/UX Design',
        Student_Enrolled: 1500,
        Duration: 10,
        Rating: 4.2,
        Price: 18,
        Level: 'Beginner',
        Certification: 'Unavailable',
    },
];



const categories = [
    {
        name: 'Computer Science & Programming',
        subCategories: [
            'Web Development',
            'Database Management',
            'Cybersecurity',
        ],
    },
    {
        name: 'Design & Creativity',
        subCategories: [
            'UI/UX Design',
            'Graphic Design',
        ],
    },
    {
        name: 'Data Science',
        subCategories: [
            'Data Analysis',
            'Machine Learning',
        ],
    },
];

const Courses = () => {
    // function search :
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = e => {
        setSearchTerm(e.target.value);
    };



    const [CategorySelected, setCategorySelected] = useState("")
    const [SubCategorySelected, setSubCategorySelected] = useState("")



    const [isOpen, setisOpen] = useState(false)

    const [isOpenLevel, setisOpenLevel] = useState(false)
    const [LevelSelected, setLevelSelected] = useState("")

    const [isOpenCertf, setisOpenCertf] = useState(false)
    const [CertfSelected, setCertfSelected] = useState("")

    const [isOpenPricing, setisOpenPricing] = useState(false)
    const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });



    const [isOpenDuration, setisOpenDuration] = useState(false)
    const [DurationSelected, setDurationSelected] = useState("")

    const [isOpenRating, setisOpenRating] = useState(false)
    const [RatingSelected, setRatingSelected] = useState(0)

    // Filter Logic
    const filteredCourses = CoursesList.filter((course) => {
        console.log(SubCategorySelected)
        const matchesSearch = course.Title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = !CategorySelected || course.Category === CategorySelected;
        const matchesSubCategory = !SubCategorySelected || course.SubCategory === SubCategorySelected;
        const matchesLevel = !LevelSelected || course.Level === LevelSelected;
        const matchesCert = !CertfSelected || course.Certification === CertfSelected;
        const matchesPrice = course.Price >= priceRange.min && course.Price <= priceRange.max;
        const matchesDuration =
            !DurationSelected ||
            (DurationSelected === '<5h' && course.Duration < 5) ||
            (DurationSelected === '>5h and 10h<' && course.Duration > 5 && course.Duration <= 10) ||
            (DurationSelected === '>10h' && course.Duration > 10);
        const matchesRating = course.Rating >= RatingSelected;

        return matchesSearch && matchesLevel && matchesCert && matchesPrice && matchesDuration && matchesRating && matchesCategory && matchesSubCategory;
    });

    return (
        <div>
            <Navbar />

            <div className='flex pb-4 relative mt-4 h-[1000px]' style={{ backgroundImage: `url(${BgImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'repeat', }}>
                {/* Filter Side  */}
                <div className={isOpen ? 'flex-none absolute left-[0px] bg-white w-80 h-full shadow-xl duration-200 ease-in-out' : 'flex-none absolute left-[-400px] bg-white w-80 h-full shadow-xl duration-200 ease-in-out'}>
                    <div className='text-3xl font-semibold text-[#9747FF] w-full py-4 text-center border-b-2'>Filter</div>
                    <ul className='flex flex-col'>

                        {/*Level filter*/}

                        <li onClick={() => { setisOpenLevel(!isOpenLevel) }} className={isOpenLevel ? 'cursor-pointer px-6 py-4 hover:text-[#9747FF] text-start flex justify-between text-[#9747FF] font-bold text-xl' : 'cursor-pointer px-6 py-4 hover:text-[#9747FF] text-start flex justify-between text-lg'}>Level {isOpenLevel ? <MdOutlineKeyboardArrowDown size='26' /> : <MdKeyboardArrowRight size='26' />}</li>
                        <div className={isOpenLevel ? 'flex flex-wrap gap-2 px-6 py-3' : 'hidden'}>
                            {["Beginner", "Intermediate", "Advanced"].map((level) => {
                                return (
                                    <div onClick={() => { LevelSelected === level ? setLevelSelected('') : setLevelSelected(level) }} className={LevelSelected == level ? 'bg-[#9747FF] cursor-pointer  rounded-2xl px-4  text-white p-1' : 'border-2 border-[#999999] cursor-pointer  rounded-2xl px-4  text-[#999999] p-1'}>{level}</div>
                                )
                            })}

                        </div>

                        {/*Certification filter*/}

                        <li onClick={() => { setisOpenCertf(!isOpenCertf) }} className={isOpenCertf ? 'cursor-pointer px-6 py-4 hover:text-[#9747FF] text-start flex justify-between text-[#9747FF] font-bold text-xl' : 'cursor-pointer px-6 py-4 hover:text-[#9747FF] text-start flex justify-between text-lg'}>Certification {isOpenCertf ? <MdOutlineKeyboardArrowDown size='26' /> : <MdKeyboardArrowRight size='26' />}</li>
                        <div className={isOpenCertf ? 'flex flex-wrap gap-2 px-6 py-3' : 'hidden'}>
                            {["Available", "Unavailable"].map((certf) => {
                                return (
                                    <div onClick={() => { CertfSelected === certf ? setCertfSelected('') : setCertfSelected(certf) }} className={CertfSelected == certf ? 'bg-[#9747FF] cursor-pointer   rounded-2xl px-4  text-white p-1' : 'border-2 border-[#999999] cursor-pointer  rounded-2xl px-4  text-[#999999] p-1'}>{certf}</div>
                                )
                            })}
                        </div>

                        {/*Pricing filter*/}

                        <li onClick={() => { setisOpenPricing(!isOpenPricing) }} className={isOpenPricing ? 'cursor-pointer px-6 py-4 hover:text-[#9747FF] text-start flex justify-between text-[#9747FF] font-bold text-xl' : 'cursor-pointer px-6 py-4 hover:text-[#9747FF] text-start flex justify-between text-lg'}>Pricing {isOpenPricing ? <MdOutlineKeyboardArrowDown size='26' /> : <MdKeyboardArrowRight size='26' />}</li>
                        <div className={isOpenPricing ? 'flex flex-wrap gap-4 px-6 items-center' : 'hidden'}>
                            From
                            <span className='relative '><input value={priceRange.min}
                                onChange={(e) => setPriceRange({ ...priceRange, min: +e.target.value })} type="number" placeholder='Min' className="w-20 px-2 py-1 border-2 rounded-2xl outline-none focus:ring-2 focus:ring-[#9747FF] border-gray-300" /><span className='text-[#9747FF] text-xl absolute right-3'>$</span></span>

                            To
                            <span className='relative '><input value={priceRange.max}
                                onChange={(e) => setPriceRange({ ...priceRange, max: +e.target.value })} type="number" placeholder='Max' className="w-20 px-2 py-1 border-2 rounded-2xl outline-none focus:ring-2 focus:ring-[#9747FF] border-gray-300" /><span className='text-[#9747FF] text-xl absolute right-3'>$</span></span>

                        </div>
                        <li onClick={() => { setisOpenDuration(!isOpenDuration) }} className={isOpenDuration ? 'cursor-pointer px-6 py-4 hover:text-[#9747FF] text-start flex justify-between text-[#9747FF] font-bold text-xl' : 'cursor-pointer px-6 py-4 hover:text-[#9747FF] text-start flex justify-between text-lg'}>Course Duration {isOpenDuration ? <MdOutlineKeyboardArrowDown size='26' /> : <MdKeyboardArrowRight size='26' />}</li>
                        <div className={isOpenDuration ? 'flex flex-wrap gap-2 px-6 py-3' : 'hidden'}>
                            {["<5h", ">5h and 10h<", ">10h"].map((duration) => {
                                return (
                                    <div onClick={() => { DurationSelected === duration ? setDurationSelected('') : setDurationSelected(duration) }} className={DurationSelected == duration ? 'bg-[#9747FF] cursor-pointer  rounded-2xl px-4  text-white p-1' : 'border-2 border-[#999999] cursor-pointer  rounded-2xl px-4  text-[#999999] p-1'}>{duration}</div>
                                )
                            })}

                        </div>

                        {/*Rating filter*/}

                        <li onClick={() => { setisOpenRating(!isOpenRating) }} className={isOpenRating ? 'cursor-pointer px-6 py-4 hover:text-[#9747FF] text-start flex justify-between text-[#9747FF] font-bold text-xl' : 'cursor-pointer px-6 py-4 hover:text-[#9747FF] text-start flex justify-between text-lg'}>Rating {isOpenRating ? <MdOutlineKeyboardArrowDown size='26' /> : <MdKeyboardArrowRight size='26' />}</li>
                        <div className={isOpenRating ? 'flex flex-wrap gap-2 py-2 px-6' : 'hidden'}>
                            {[1, 2, 3, 4, 5].map((rate) => {
                                return (
                                    <div onClick={() => { RatingSelected === rate ? setRatingSelected('') : setRatingSelected(rate) }} className={RatingSelected == rate ? 'bg-[#9747FF] cursor-pointer  rounded-2xl px-4  text-white p-1' : 'border-2 border-[#999999] cursor-pointer  rounded-2xl px-4  text-[#999999] p-1'}>{rate != 5 ? `>${rate} star` : `${rate} star`} </div>
                                )
                            })}


                        </div>
                    </ul>
                </div>
                {/* Categories Side  */}
                <div className='flex-none bg-white w-80 h-full shadow-xl'>
                    <div className='text-3xl font-semibold text-[#9747FF] w-full py-4 text-center border-b-2'>Categories</div>
                    <ul className='flex flex-col'>
                        {categories && categories.map((categorie, index) => {
                            return (
                                <li key={index} className='pl-8 py-4 text-lg  group '>
                                    <span onClick={() => { setCategorySelected(categorie.name); setSubCategorySelected("") }} className='cursor-pointer hover:text-[#9747FF] flex  items-center justify-around'><span className='w-64'>{categorie.name}</span> <MdKeyboardArrowRight size='26' /> </span>

                                    <ul className='absolute left-80 top-0  bg-white shadow-xl w-80 h-[1000px] hidden group-hover:block'>
                                        <li className='text-3xl font-semibold text-[#9747FF] w-full py-4 text-center border-b-2'>Sub-Categories</li>
                                        {categorie.subCategories.map((sub, indexSub) => {
                                            return (<li key={indexSub} onClick={() => { setSubCategorySelected(sub) }} className='cursor-pointer px-6 py-4 hover:text-[#9747FF] text-start'>{sub}</li>)


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
                                    value={searchTerm}
                                    onChange={handleChange}
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
                        {filteredCourses.length > 0 ? filteredCourses.map((course) => {
                            return (
                                <CourseCard key={course.id} course={course} />
                            )
                        }) : <div className='text-3xl font-semibold text-[#9747FF] mt-28  w-full py-4 text-center'>No Courses Found.</div>}

                    </div>

                </div>



            </div>


            <Footer />
        </div>
    )
}

export default Courses