import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";

const HeaderSection = () => {
  return (
    <div>
         <div className='flex justify-around items-center pt-8 pb-4  text-4xl'>
                <div><FaArrowLeftLong onClick={() => window.history.back()} /></div>
                <div></div>
                <div className='font-bold'>Dz-skills</div>
                <div></div>

            </div>
    </div>
  )
}

export default HeaderSection