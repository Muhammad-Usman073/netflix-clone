'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import requests from '@/components/apiRequests/ApiRequests'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
const Poster = () => {
    const [movies, setMovies] = useState([])
    const movie = movies[Math.floor(Math.random() * movies.length)]
    const getMovies = async () => {
        const response = await axios.get(requests.popular)
        setMovies(response.data.results)
    }
    useEffect(() => {
        getMovies()
    }, [])


    const extraString = <div> .... </div>

    const ternicat = (str, maxLimit) => {
        if (str && str.length > maxLimit) {
            return str.slice(0, maxLimit) + '...';
        }
    }
    return (
        <div >

            <div className='w-full h-[100vh]' >
                <img className='h-[100vh]  bg-gradient-to-b from-transparent to-black w-full object-cover' src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="posterimage" />
            </div>
            <div className='absolute bg-black top-0 bottom-0 left-0 right-0 bg-opacity-[0.4]  bg-gradient-to-b from-transparent to-black  ' ></div>
            <div className=' absolute top-0 opacity-[1] mt-[14rem] ml-[2rem] ' >
                <p className='text-opacity-[1] text-white w-[40vw] text-[40px] font-[600] tracking-[.25rem] font-Lilita  '>{movie && movie.title}</p>
                <p className='text-white text-opacity-[1] w-[40vw] font-Ubuntu ' >
                    {
                        ternicat(movie && movie.overview, 200)
                    }
                </p>
                <div className='flex mt-[1rem] gap-[1rem]' >
                    <button className='bg-white text-black flex items-center gap-[1px] px-[1rem] rounded-[4px] font-[600] py-2 font-Ubuntu ' >
                     <PlayArrowIcon className=' text-[25px] ' />
                        play
                    </button>
                    <button className='bg-white text-black flex items-center gap-[1px] px-[2rem] rounded-[4px] font-[600] py-2 font-Ubuntu' >
                    <InfoIcon className=' text-[25px] ' />

                    more info</button>
                </div>
            </div>
        </div>
    )
}
export default Poster
