'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'



const Rows = ({ title, fetchURL, isLarge }) => {
  const [movies, setMovies] = useState([])
  const fetchMovies = async () => {
    try {
      const response = await axios.get(fetchURL);
      const moviesData = response.data.results;
      setMovies(moviesData)
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchMovies()
  }, [])




  return (
    <div className='mx-16 mb-[2rem]' >
      <h1 className='text-white text-[19.126px] font-[500] font-Ubuntu' > {title} </h1>
      <div className='inline-flex gap-[.5rem] overflow-x-scroll w-[100%] no-scrollbar' >
        {
          movies.map((item, index) => (
            <div className='hover:scale-110 cursor-pointer my-[1rem] transition duration-500' key={index}>

              {
                isLarge ?
                  <div className='w-[13rem]'  >
                    <img className='rounded' src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="" />
                  </div> :
                  <div className='w-[15rem]'  >
                  <img className='rounded' src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt="" />
                  </div>
                }

            </div>
          ))
        }
      </div>    </div>

  )
}

export default Rows
