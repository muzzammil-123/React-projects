import React, { useContext } from 'react'
import store from '../store/Store'
import Dice from './Dice'

export default function Game() {
    let arr = [1, 2, 3, 4, 5, 6]
    let { score } = useContext(store)
    return (
        <>
            <div style={{height:'290px'}} className="container mt-5">
                <div className="row">
                    <div className="col-4 ">
                        <div className='fw-bolder my-0 text-center dice-heading' style={{ height: '109px' }}>{score}</div>
                        <div className='fs-4 text-center'>Total Score</div>
                    </div>
                    <div className="col-8 d-flex flex-column justify-content-center align-items-end">
                        <div className="d-flex mt-5 gap-4 justify-content-center align-items-center">
                            {arr.map((item)=>{
                                return (
                                    <div className="box">
                                        {item}
                                    </div>
                                )
                            })}    
                        </div> 
                            <p className='mt-1 fs-5'>Select Number</p>
                    </div>
                </div>
            </div>
            <Dice/>
        </>
    )
}
