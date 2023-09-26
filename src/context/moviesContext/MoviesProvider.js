'use client'
import React from 'react'
import MoviesContext from './MoviesContext'
const MoviesProvider = ({ children }) => {
  return (
    <MoviesContext.Provider value={null} >
      {children}
    </MoviesContext.Provider>
  )
}

export default MoviesProvider
