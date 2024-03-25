import React, { useContext, useState } from 'react'
import store from '../store/Store'
import Rules from './Rules'

export default function Dice() {
    let { currentDice, roleDice, setScore } = useContext(store)
    let resetScore = () => {
        setScore(0)
    }

    let [rules, setRules] = useState(false)
    return (
        <>
            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col-12 mt-5 d-flex flex-column justify-content-center align-items-center">
                        <div>
                            <img onClick={() => { roleDice() }} src={`/dice/dice_${currentDice}.png`} alt="" />
                        </div>
                        <p className='fs-4'>Click on dice to roll</p>
                        <button className='btn btn-outline-dark' style={{width:'200px'}} onClick={resetScore}>Reset Score</button>
                        <button className='btn btn-dark mt-1' onClick={()=>setRules((prev) => !prev)} style={{width:'200px'}}>{rules ? 'Hide' : 'Show'} Rules</button>
                    </div>
                </div>
                <div className="row">
                    {rules? <Rules /> : null}
                </div>
            </div>
        </>
    )
}
