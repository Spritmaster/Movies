import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../App.css'

const SingleMovie = () => {
  const { id } = useParams();
  const key = '8c8f0b3f';
  const [data, setData] = useState(null);
  const [err,setErr]=useState(null)

  const getData = useCallback(() => {
    axios
      .get(`https://www.omdbapi.com/?&apikey=${key}&i=${id}`)
      .then((res) => {
        setData(res.data);
        setErr(null)
      })
      .catch((err) => console.log(err));
  }, [key, id]);

  useEffect(() => {
    getData();
  }, [getData]);

  console.log(data);

  
  return (
    <div className='flex lg:h-[88.2vh]  gradinet  items-center  justify-center'>
        {data ?

        <div className='flex flex-col lg:flex-row  bg-[#fff] rounded-[5px] gap-10 p-10  w-[1100px] justify-between'>
          <div className='  max-w-[300px] h-[400px] relative sm:h-[500px]'>
          <img src={data.Poster} alt={data.Title} className='max-w-[300px] h-[400px]  sm:h-[500px] rounded-[15px] '/>
          <span className='reyting'>{data.imdbRating}</span>

          </div>
          <div >
            <h1 className='text-2xl  sm:text-3xl mb-4 sm:mb-7 font-bold text-[#000] relative max-w-[600px] border-b-[2px] border-[#000] 
            mb-[3
            0px] pb-2'>
            <span className='text-[#d63535]'>Title :</span>  {data.Title}</h1>
      
            <h2 className='text-xl   sm:text-3xl text-[#000] max-w-[600px]'>
            <span className='text-[#d63535] font-bold '>Country :</span>  {data.Country}</h2>
            <h2 className='text-xl  sm:text-3xl  text-[#000] max-w-[600px]'>
            <span className='text-[#d63535] font-bold'>Actors :</span>  {data.Actors}</h2>
            <h2 className='text-xl   sm:text-3xl text-[#000] max-w-[600px]'>
            <span className='text-[#d63535] font-bold'>Year :</span>  {data.Released}</h2>
            <h2 className='text-xl  sm:text-3xl  text-[#000] max-w-[600px]'>
            <span className='text-[#d63535] font-bold'>Language :</span>  {data.Language}</h2>
            <h2 className='text-xl   sm:text-3xl text-[#000] max-w-[600px]'>
            <span className='text-[#d63535] font-bold'>Runtime :</span>  {data.Runtime}</h2>
            <p className='text-xl   sm:text-2xl text-[#000] max-w-[600px]'>
            <span className='text-[#d63535] font-bold text-xl sm:text-3xl'>Discription :</span>  {data.Plot}</p>
             <div className='w-full flex justify-center mt-10'>
          <Link to={'/'} className='btn btn-warning  px-[20px] font-bold  text-[20px]'>Home</Link  >
        </div>
          </div>

       
        </div>

        :
        <div>
          <h1>

          </h1>
        </div>
        }
    </div>
  );
};

export default SingleMovie;