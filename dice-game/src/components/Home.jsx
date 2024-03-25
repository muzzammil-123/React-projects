import React, { useContext } from 'react'
import store from '../store/Store'

export default function Home() {
  let {handleClick} = useContext(store)
  return (
    <>
    <div className="container mt-5">
        <div className="row border h-100 d-flex justify-content-center align-items-center">
          <div className="col-6">
            <img src="/Images/dices.png" alt="" />
          </div>
          <div className="col-6 d-flex flex-column">
            <h1 className='fw-bolder dice-heading'>Dice Games</h1>
            <div className='w-75'>
              <button onClick={handleClick} className='btn btn-dark w-50 btn-outline-light border-2'>Play Game</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
