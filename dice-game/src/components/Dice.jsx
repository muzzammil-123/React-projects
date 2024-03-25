import React, { useContext } from 'react'
import store from '../store/Store'

export default function Dice() {
    let {currentDice} = useContext(store)
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                <div>
                    <img src={`/dice/dice_${currentDice}.png`} alt="" />
                </div>
                <p className='fs-4'>Click on dice to roll</p>
            </div>
        </div>
    </div>
    </>
  )
}
