import React, { useState } from 'react'
import Nav from './components/Nav'
import Store from './sore/Store'
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home'
import Work from './components/Work/Work'
import Career from './components/Career/Career'
import News from './components/News/News'
import { Link } from 'react-router-dom'
import Routing from './utils/Routing'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
export default function App() {

  let [showHome, setShowHome] = useState(true)

  useEffect(() => {
    let timer = setTimeout(() => {
      setShowHome(false)
    }, 2000);
  
    return () => {
      clearTimeout(timer)
    }
  }, [])
  
  return (
    <>
    <Store.Provider value={{Route, Routes, useLocation, Link, Home, Work, Career, News, showHome}}>
    <Nav/>
   <Routing/>
    </Store.Provider>
    </>
  )
}
