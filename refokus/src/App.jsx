import React, { useState } from 'react'
import Nav from './components/Nav'
import Store from './sore/Store'
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Work from './components/Work'
import Career from './components/Career'
import News from './components/News'
import { Link } from 'react-router-dom'
import Routing from './utils/Routing'
import { useLocation } from 'react-router-dom'
export default function App() {

  return (
    <>
    <Store.Provider value={{Route, Routes, useLocation, Link, Home, Work, Career, News}}>

    <Nav/>
   
   <Routing/>
    </Store.Provider>
    </>
  )
}
