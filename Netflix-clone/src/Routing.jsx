import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MovieDetail from './components/MovieDetail'
import Home from './components/Home'

export default function Routing({movieDetail, page, play, trailerUrl, handleTrailer}) {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home movieDetail={movieDetail} />} />
        <Route path='/movie/:id' element={<MovieDetail play={play} handleTrailer={handleTrailer} trailerUrl={trailerUrl} page={page}/>}/>
    </Routes>
    </>
  )
}
