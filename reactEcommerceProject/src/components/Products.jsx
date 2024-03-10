import React from 'react'
import Cards from './Cards'

export default function Products() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex flex-wrap mt-5">
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                        <Cards/>
                    </div>
                </div>
            </div>
        </>
    )
}
