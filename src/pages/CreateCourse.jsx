import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import BackgroundImg from '../assets/GroupTest.png'


const CreateCourse = () => {

  const [title, settitle] = useState("")
  const [category, setcategory] = useState("")
  const [level, setlevel] = useState("")
  const [duration, setduration] = useState(0)
  const [price, setprice] = useState(0)
  const [image, setimage] = useState("")
  const [description, setdescription] = useState("")
  const [certf, setcertf] = useState("Unavailable")
 const handleFileChange = (e) => {
    setimage(e.target.files[0]); // Update image with the selected file
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    const course = {
      title: title,
      category: category,
      level: level,
      duration: duration,
      price: price,
      image: image,
      description: description,
      certification: certf
    }
    console.log(course)
  }
  return (
    <div>
      <Navbar />
      <div className='flex flex-col  items-center my-10 py-10' style={{ backgroundImage: `url(${BackgroundImg})`, backgroundPosition: 'center', backgroundRepeat: 'repeat-y' }}>
        <h1 className='md:text-3xl text-2xl text-purple font-bold py-10'>Upload a course</h1>
        <div className='bg-white p-8 md:w-[60%] w-[80%] rounded-2xl shadow-md'>
          <h2 className='text-center font-bold text-xl'>Information related to the course:</h2>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4 mt-4 font-semibold'>
            <div className='flex flex-col gap-2'>
              <label className="pl-2" htmlFor='name'>Name :</label>
              <input onChange={(e)=>{settitle(e.target.value)}} value={title} required className='border-2 outline-none focus:ring-2 focus:ring-[#9747FF] p-2 rounded-md' type="text" id="name" />
            </div>
            <div className='flex flex-col gap-2'>
              <label className="pl-2" htmlFor='category'>Category :</label>
              <input onChange={(e)=>{setcategory(e.target.value)}} value={category} required className='border-2 outline-none focus:ring-2 focus:ring-[#9747FF] p-2 rounded-md' type="text" id="category" />
            </div>
            <div className='flex flex-col gap-2'>
              <label className="pl-2" htmlFor='level'>Level :</label>
              <input onChange={(e)=>{setlevel(e.target.value)}} value={level} required className='border-2 outline-none focus:ring-2 focus:ring-[#9747FF] p-2 rounded-md' type="text" id="level" />
            </div>
            <div className='flex flex-col gap-2'>
              <label className="pl-2" htmlFor="duration">Duration (Hours):</label>
              <input onChange={(e)=>{setduration(e.target.value)}} value={duration} required className='border-2 outline-none focus:ring-2 focus:ring-[#9747FF] p-2 rounded-md' type="number" id="duration" />
            </div>
            <div className='flex flex-col gap-2'>
              <label className="pl-2" htmlFor='price'>Price ($):</label>
              <input onChange={(e)=>{setprice(e.target.value)}} value={price} required className='border-2 outline-none focus:ring-2 focus:ring-[#9747FF] p-2 rounded-md' type="number" id="price" />
            </div>
            <div className='flex md:flex-row flex-col  gap-8 items-center'>
              <label className="pl-2" htmlFor="image">Cover Image :</label>
              <input onChange={handleFileChange}  required id='image' type="file" className=" text-sm  text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text[#283342] hover:file:bg-violet-100"/>
            </div>
            <div className='flex flex-col gap-2'>
              <label className="pl-2" htmlFor='description'>Description :</label>
              <textarea onChange={(e)=>{setdescription(e.target.value)}} value={description} required className='border-2 outline-none focus:ring-2 focus:ring-[#9747FF] p-2 rounded-md'  id="description" rows="4" cols="50"></textarea>
            </div>
            <div className='flex md:flex-row flex-col gap-8 items-center'>
              <label className="pl-2" htmlFor="certification">Certification :</label>
              <div className='border-2    rounded-lg md:w-64 w-48 bg-white'>
                <div onClick={()=>{certf ==="Unavailable"?setcertf('Available'):setcertf('Unavailable')}} className={certf ==="Unavailable"?'w-1/2 p-2 float-left cursor-pointer 	 text-center rounded-lg text-white bg-purple2':'w-1/2 p-2 float-right cursor-pointer	 text-center rounded-lg text-white bg-purple'}>{certf}</div>
              </div>
            </div>

            <div className='flex justify-center my-3'>
            <button type='submit' className='bg-transparent hover:bg-purple text-purple font-semibold hover:text-white py-2 px-4 border border-purple hover:border-transparent rounded-2xl w-32 text-lg'>
              Submit
            </button>
            </div>
            

          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CreateCourse