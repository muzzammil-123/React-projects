import React from 'react'
import Recommended from './Recommended';
import SideBar from './SideBar';
import Products from './Products';

export default function Main() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-2">
                    <SideBar/>
                    </div>
                    <div className="col-10">
                        <Recommended />
                        <Products />
                    </div>
                </div>
            </div>
        </>
    )
}
