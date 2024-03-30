import React, { useContext } from 'react'
import store from '../store/Store'

export default function Cart() {
  let { cart } = useContext(store)
  console.log(cart)
  return (
    <>
    {/* <img src="/vite.svg" alt="" /> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <table className="table table-dark text-center">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Price</th>
                  <th scope="col">Image</th>
                </tr>
              </thead>
              <tbody>
                {cart.length === 0 ? `No item` :
                cart.map((item) => {
                  return (
                    <tr>
                      <th scope="row">1</th>
                      <td>{item.title}</td>
                      <td>{item.newPrice}</td>
                      <td className='w-25 img-fluid'><img src={item.img} alt="" className='w-75 img-thumbnail object-fit-contain img-fluid' /></td>
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
