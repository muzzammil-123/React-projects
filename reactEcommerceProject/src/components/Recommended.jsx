import React from 'react'

export default function Recommended() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-between align-items-start flex-column">
                        <h2 className='mt-3'>
                            Recommended
                        </h2>
                        <div className="button mt-2">
                            <button className="btn btn-outline-secondary mx-2">All products</button>
                            <button className="btn btn-outline-secondary mx-2">Nike</button>
                            <button className="btn btn-outline-secondary mx-2">Addidas</button>
                            <button className="btn btn-outline-secondary mx-2">Pumal</button>
                            <button className="btn btn-outline-secondary mx-2">Vans</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
