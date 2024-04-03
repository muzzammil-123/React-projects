import React from 'react'
import Home from './components/Home'
import request from './Netflix-data'
import { useState } from 'react'
import Routing from './Routing'
import Header from './components/Header'
export default function App() {
  // const baseUrl = "https://image.tmdb.org/t/p/original/"
  // console.log(baseUrl + request.fetchRomanceMovies)
  let [page, setPage] = useState([])
  let movieDetail = (movie) =>{
    let arr = [...page, movie]
    setPage(arr)
  }
  return (
    <>
    <div className="App">
      <Header/>
     <Routing page={page} movieDetail={movieDetail}/>
        
    </div>
    </>
  )
}
