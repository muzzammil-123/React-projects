import React, { useContext, useEffect, useState } from 'react'
import store from '../store/Store'
export default function Cart() {
  let {cart} = useContext(store)
return(
  <>
    <div className="container-fluid p-5">
      <div className="row">
        <div className="col-12">
          <table className="table bg">
            <thead className='bg-dark '>
              <tr className='bg-dark'>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Image</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => {
                return (
                  <tr>
                    <th scope="row">{index}</th>
                    <td>{item.title}</td>
                    <td>{item.newPrice}</td>
                    <td><img src={item.img} style={{width: '100px', height: '50px'}} alt="" /></td>
                  </tr>
                )
              })}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  </>
)
}
