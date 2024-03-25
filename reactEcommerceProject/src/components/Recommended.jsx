import React, { useContext } from 'react'
import store from '../store/Store'

export default function Recommended() {
let {filterOut} = useContext(store)
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between align-items-start flex-column">
                        <h2 className='mt-3'>
                            Recommended
                        </h2>
                        <div className="button mt-2">
                            <button onClick={(e)=>filterOut(e.target.textContent)}  className="btn btn-outline-secondary mx-2">All products</button>
                            <button onClick={(e)=>filterOut(e.target.textContent)} className="btn btn-outline-secondary mx-2">Nike</button>
                            <button onClick={(e)=>filterOut(e.target.textContent)} className="btn btn-outline-secondary mx-2">Adidas</button>
                            <button onClick={(e)=>filterOut(e.target.textContent)} className="btn btn-outline-secondary mx-2">Puma</button>
                            <button onClick={(e)=>filterOut(e.target.textContent)} className="btn btn-outline-secondary mx-2">Vans</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
