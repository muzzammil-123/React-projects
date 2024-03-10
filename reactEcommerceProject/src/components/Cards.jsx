import React, { useContext, useEffect, useState } from 'react'
import store from '../store/Store'
import data from '../data'
import {Link} from 'react-router-dom'
export default function Cards() {
  let { FaShoppingCart, IoStarSharp, } = useContext(store)
  let [products, setProducts] = useState([])
  useEffect(()=>{
    setProducts(data)

  },[])
  return (
    <>
      {products.map((item) => {
        return (
        <Link to={`/product/${item.id}`}className="card mx-2 my-2" style={{ width: '18rem' }}>
          <img src={item.img} className="card-img-top mx-auto my-3" alt="..." style={{width: '250px', height:'150px'}} />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <div className="pricing d-flex justify-content-between align-items-center pe-3">
              <div>
                <span className='text-decoration-line-through me-3'>{item.prevPrice}</span>
                <span className='fw-bold'>${item.newPrice}</span>
              </div>
              <div>
                <FaShoppingCart />
              </div>
            </div>
            <div className="pricing d-flex justify-content-between align-items-center pe-3">
              <div>
                <IoStarSharp className='text-warning' />
                <IoStarSharp className='text-warning' />
                <IoStarSharp className='text-warning' />
                <IoStarSharp className='text-warning' />
                <IoStarSharp className='text-warning' />
              </div>
              <div className='text-secondary fs-6'>{item.reviews}</div>
            </div>
            <a href="#" className="btn btn-primary d-block mt-3">Buy Now</a>
          </div>
        </Link>
        )
      })}

    </>
  )
}
