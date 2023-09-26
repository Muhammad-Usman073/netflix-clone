import React from 'react'
import requests from '../apiRequests/ApiRequests'
import Rows from './Rows'
const RowSection = () => {
  return (
    <section className=" flex flex-col " >
    <Rows title='NETFLIX ORIGINALS' fetchURL={requests.currentlyPlaying} isLarge={true} />
    <Rows title='ALL TRENDING MOVIES' fetchURL={requests.popular} isLarge={false} />
    <Rows title='TOP RATED MOVIES' fetchURL={requests.topRated} isLarge={false} />
    <Rows title='ALL TRENDING MOVIIES' fetchURL={requests.trending} isLarge={false} />
    <Rows title='ALL UPCOMMING MOVIES' fetchURL={requests.upComming} isLarge={false} />
</section>
  )
}

export default RowSection
