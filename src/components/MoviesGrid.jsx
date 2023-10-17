import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const MoviesGrid = ({data}) => {
  return (
    <div className='pt-10 max-w-[1450px] mx-auto  '>
        {data && data.Search ?
        <div className='flex flex-col items-center   gap-10 sm:grid sm:gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 py-5'>
          { data.Search.map((movie)=>
          {
            if(movie.Poster!=='N/A'){
              const {Title,Poster,imdbID} =movie
          
            return(
                <Link to={`singleMovie/${imdbID}`} key={imdbID} className='rounded-[5px] max-w-[270px] overflow-hidden card-shadow relative h-[350px] '>
                    <img className='w-[100%] h-full lg:w-[280px] object-conver' src={Poster} alt="" />
                    <div className='text-4xl absolute py-5 bottom-0 text-center  w-full backdrop-blur-[40px]'>
                    <h1 className=' font-bold    text-[#ffae00]'>{Title}</h1>
                    </div>
                </Link>
            )
            }
        })}
        </div> 
        :  <h1 className='text-6xl text-[#ff2c2c]'>Sorry not founted Movie or Cartoon</h1>}
    </div>
  )
}

export default MoviesGrid