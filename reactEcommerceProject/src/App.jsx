import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Store from './store/Store'
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import Nav from './components/Nav';
import { IoStarSharp } from "react-icons/io5";
import Main from './components/Main';
// import {Link}    from "react-router-dom";

export default function App() {

  return (

    <Store.Provider value={{ FaShoppingCart, FaHeart, FaUserAlt, IoStarSharp }}>
      <>
        <Nav />
       
        <Main/>

      </>
    </Store.Provider>

  )
}
