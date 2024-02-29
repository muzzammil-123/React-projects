import React, { useContext } from 'react'
import store from '../sore/Store'

export default function Routing() {
    let {Route, Routes, Home, Work, Career, News} = useContext(store)
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/work' element={<Work/>}/>
    <Route path='/career' element={<Career/>}/>
    <Route path='/news' element={<News/>}/>
   </Routes>
    </>
  )
}
