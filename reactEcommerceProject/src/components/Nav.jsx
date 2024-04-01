import React from 'react'
import { useContext } from 'react'
import store from '../store/Store'
import { FaShoppingCart } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import { FaHeart } from "react-icons/fa6";
export default function Nav() {
  let { id } = useParams()
  let { setSearch, cart } = useContext(store)
  return (
    <>
      <nav className="navbar bg-body-tertiary mt-3 px-5">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <form className="d-flex" role="search">
            <input onChange={(e) => { setSearch(e.target.value) }} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div>
            <Link to='/cart' className='me-2'>
              <button type="button" class="border-0  position-relative">
                <FaShoppingCart />
                {cart.length === 0 ? `` : 
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart.length}
                  <span class="visually-hidden">unread messages</span>
                </span>
                }
              </button>
            </Link>
            <Link className='text-danger'><FaHeart /></Link>
          </div>
        </div>
      </nav>

    </>
  )
}
