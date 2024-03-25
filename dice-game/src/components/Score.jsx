import React, { useContext, useState } from 'react'
import store from '../store/Store'

export default function Score() {
let {setSelectedValue, score,error, setError} = useContext(store)


    let [active, setActive] = useState(null)

    let handleClick = (click, index) => {
        setActive(index)
        setSelectedValue(click)
        setError(null)
    }



    let arr = [1, 2, 3, 4, 5, 6, 7]
    return (
        <>
            <div className="conatiner mt-5">
                <div className="row d-flex px-5 mt-4 justify-content-around align-items-center">
                    <div className="col-4 d-flex flex-column align-items-center">
                        <div className='fw-bold text-center' style={{ fontSize: '75px' }}>{score}</div>
                        <div className='fs-4'>Total Score</div>
                    </div>
                    <div className="col-8  d-flex flex-column justify-content-center align-items-end">
                        <div className="fs-4 text-danger">{error}</div>
                        <div className="d-flex mt-1 align-items-center">
                            {arr.map((item, index) => {
                                return (
                                    <div key={index} className={`me-2 ${active === index ? 'btn-focus' : 'box'}`} onClick={() => handleClick(item, index)}>
                                        {item}
                                    </div>
                                )
                            })}
                        </div>
                        <div className='fs-4 mt-1'>Select Number</div>
                    </div>
                </div>
            </div>
        </>
    )
}
