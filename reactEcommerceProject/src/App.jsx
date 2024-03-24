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

    if (val === `All products`) {
      setProducts(data)
    }else{
      let filterData = originalData.filter((item)=>{
        return item.category === val
      })
      setProducts(filterData)
    }
  }


  return (

    <Store.Provider value={{ Link, search, setSearch, Main, Route, Routes, handleClick, products }}>
      <>
        <Nav />
        <Routing />

      </>
    </Store.Provider>

  )
}
