import React from 'react'
import MoviesCard from "./MoviesCard"

const LatestMovies = () => {
  const movieslist = [1,2,3,4,5]
  return (

    <div className="bg-black flex flex-col items-center py-10">
    <h1 className="text-4xl py-5">MOVIES IN THE SPOTLIGHT THIS WEEK</h1>
    <div className="flex flex-row flex-wrap gap-10 items-center justify-center px-48 py-8">
      {movieslist.map( movie => (
        <div key={movie}>
        <MoviesCard/>
        </div>
        ))}
    </div>
    </div>
  )
}

export default LatestMovies