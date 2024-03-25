import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products_Details from '../components/Products_Details'
import Main from '../components/Main'
import Cart from '../components/Cart'
import Wishlist from '../components/Wishlist'

export default function Routing() {
  return (
    <>
     <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/product/:id' element={<Products_Details />} />
        <Route path='/cart/:id' element={<Cart/>}/> 
        <Route path='/wishlist/:id' element={<Wishlist/>}/> 
        </Routes> 
    </>
  )
}
