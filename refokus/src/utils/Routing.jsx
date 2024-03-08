import React, { useContext } from 'react'
import store from '../sore/Store'
import Project_deatils from '../components/Career/Project_deatils'

export default function Routing() {
    let {Route, Routes, Home, Work, Career, News} = useContext(store)
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/work' element={<Work/>}/>
    <Route path='/career' element={<Career/>}/>
    <Route path='/news' element={<News/>}/>
    <Route path='/career/:name' element={<Project_deatils/>}/>
   </Routes>
    </>
  )
}
