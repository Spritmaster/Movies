import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { caruselInfo } from '../data/caruselInfo';
import '../App.css'
import { Link } from 'react-router-dom';


const CaruselFamousMovies = () => {
   
  return (
    <Carousel
    autoPlay
    infiniteLoop
    showThumbs={false}>
        {caruselInfo && caruselInfo.map((movie)=>{
          const {id, title ,img}= movie
            return (
              <Link key={id} to={`singleMovie/${id}`}> 
                <div className='relative cursor-pointer'>
                    <img src={img} alt="" className='w-full h-[200px]  sm:h-[300px] lg:h-[500px] object-cover object-top'/>
                    <h1 className='absolute text-[#ffa946] text-3xl sm:text-6xl top-[40%] z-10  font-bold flex justify-center w-full'>{title.toUpperCase()}</h1>
                    <span className='absolute z-10  w-full h-full   top-0 bg-[#2f21fb61]'></span>
                </div>
              </Link>
            )
        })}   

    </Carousel>
  )
}

export default CaruselFamousMovies