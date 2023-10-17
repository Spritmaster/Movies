import React, { useEffect, useState } from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import {BsSun} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'



const Header = () => {
  const navigate=useNavigate()
  const goHome =()=>{
    navigate('/')
  }
  return (
    <div className='bg-[url(./assets/header.jpeg)] bg-no-repeat bg-cover bg-center relative '>
      {/* slice colar */}
      <span  className='absolute w-full h-full  bg-[#03557877] z-0'></span>
      {/*  */}
        <div className='py-4  px-2 sm:px-5 lg:px-10 flex justify-between items-center '>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ..inline-block rounded-[5px] hover:text-[#000] text-[#fff] duration-500 z-10'
            onClick={()=>{goHome()}}>
            <h1 className=' py-2 px-4 font-bold text-2xl  sm:text-3xl lg:text-4xl'>MoViEs</h1>
            </button>




        </div>
    </div>
  )
}

export default Header