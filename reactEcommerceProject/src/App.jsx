import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Store from './store/Store'
import Nav from './components/Nav';
import Main from './components/Main';
import Routing from './utils/Routing';
import { Route, Routes } from 'react-router-dom'
import { Link } from "react-router-dom";
import data from './data';

export default function App() {
  let [search, setSearch] = useState('')
  let [originalData] = useState(data)
  let [products, setProducts] = useState(originalData)
  let handleClick = (click) => {
    let val = click
    console.log(val)

    if (val === `All products` || val === `All`) {
      setProducts(data)
    }else{
      let filterData = originalData.filter((item)=>{
        return item.category === val || item.color === val
      })
      setProducts(filterData)
    }
  }

  let filterOut = (e) => {
    let val = e
    if (val === `All products`) {
      setProducts(data)
    } else {
      let filterData = originalData.filter((item) => {
        return item.company === val
      })
      setProducts(filterData)
    }
  }

  let [cart, setCart] = useState([])
  let addToCart = (product)=>{
    let newCart = [...cart, product]
    setCart(newCart)
    console.log(newCart)
    console.log(`aaaa`)
  }
  
  let [cart, setCart] = useState([])
  let addToCart = (product) =>{
    let arrayCart = [...cart, product]
    setCart(arrayCart)
    console.log(cart)
  }

  return (

    <Store.Provider value={{filterOut, Link, search, setSearch, Main, Route, Routes, handleClick, products, addToCart, cart }}>
      <>
        <Nav />
        <Routing />

      </>
    </Store.Provider>

  )
}
