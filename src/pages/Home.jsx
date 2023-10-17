import React, { useCallback, useEffect, useState } from 'react';
import CaruselFamousMovies from '../components/CaruselFamousMovies';
import axios from 'axios';
import MoviesGrid from '../components/MoviesGrid';
import {TbNavigationSearch} from 'react-icons/tb'

const Home = () => {
  const key = '8c8f0b3f';
  const [movieName, setMovieName] = useState('fantastic');
  const [data, setData] = useState(null);
  const [movieInput,setMovieInput]=useState(null)
  const [err,setErr] =useState('fantastic')

  const getData = useCallback(() => {
    axios
      .get(`https://www.omdbapi.com/?&apikey=${key}&s=${movieName}`)
      .then(res => {
        setData(res.data)
        setErr(null)
      })
      .catch(err => setErr(err.message))
  }, [key, movieName]);

  useEffect(() => {
    getData();
  }, [getData]);
  window.addEventListener('keydown',(e)=>{
    if(e.key == 'Enter'){
      e.preventDefault()
      setMovieName(movieInput)
    }
  })
  return (
    <>
  { data  ?
  <div className='mb-20' >
      <CaruselFamousMovies />
      <div className=' '>
      <div className='flex justify-center sm:max-w-[1400px] sm:mx-auto sm:block px-5 lg:px-0 pt-5   '>
    <form className='relative inline-block bg-[#ffad32] overflow-hidden rounded-[5px] h-[50px] pr-10'>
    <input 
    type="text" 
    placeholder="Movie name" 
    className='h-full border-none outline-none bg-[#ffad32] placeholder:text-[#000] w-[250px] pl-3 text-[18px] font-semibold'
    onChange={(e)=>{setMovieInput(e.target.value)}}
    />
    <TbNavigationSearch className='w-10 h-10 absolute right-1 top-1 text-[#362b9c] '
    onClick={()=>{setMovieName(movieInput)}}/>
    </form>
    </div>
      <MoviesGrid data={data}/>
      </div>
  
  </div> : <h1 className='flex items-center text-6xl text-[#ff3737] font-extrabold justify-center h-[88.2vh]'>{err}</h1>}
    </>
  );
};

export default Home;