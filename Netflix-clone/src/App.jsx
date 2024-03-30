import React from 'react'
import Home from './components/Home'
import { useState } from 'react'
import Routing from './Routing'
import Header from './components/Header'
export default function App() {
  let [page, setPage] = useState([])
  let movieDetail = (movie) =>{
    let arr = [...page, movie]
    setPage(arr)
  }

  let [trailerUrl, setTrailerUrl] = useState(``)
  let [play, setPlay] = useState(false)
  let handleTrailer = (movie)=>{
    setTrailerUrl(movie.youtube_url)
    setPlay(true)
    if(trailerUrl){
      setPlay(false)
      setTrailerUrl('')
    }
  }

  return (
    <>
    <div className="App">
      <Header/>
     <Routing play={play} trailerUrl={trailerUrl} handleTrailer={handleTrailer} page={page} movieDetail={movieDetail}/>
        
    </div>
    </>
  )
}
