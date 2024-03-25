import React, { useContext, useState } from 'react'
import store from '../store/Store'

export default function Nav() {
    let {FaShoppingCart, setSearch, FaHeart, FaUserAlt} = useContext(store)
  return (
    <>
       <nav className="navbar bg-body-tertiary">
          <div className="container-fluid shadow-lg py-2 px-5">
            <a className="navbar-brand">E-commerce</a>
            <form className="d-flex" role="search">
              <input onChange={(e)=>{setSearch(e.target.value)}} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div className="icons px-3">
              <FaShoppingCart className='mx-2'/>
              <FaHeart className='mx-2'/>
              <FaUserAlt className='mx-2'/>
            </div>
          </div>
        </nav>
    </>
  )
}
