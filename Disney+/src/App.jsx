import React, { useState } from 'react'
import Routing from './Routing/Routing'
import Header from './components/Header'
// import data from './disneyPlusMovieData'
import Store from './store/Store'
export default function App() {
  let [movie , setMovie] = useState([])
  let detailsPage = (item) =>{
    let particularPage = [...movie, item]
    setMovie(particularPage)
  }
  return (
    <>
    <Store.Provider value={{ detailsPage, movie}}>
      <Routing/>
      <Header/>
    </Store.Provider>
    </>
  )
}
