import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from '../components/Home'
import Trending from '../components/Trending'
import Popular from '../components/Popular'
import AllMovies from '../components/AllMovies'
export default function Routing() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/trending' element={<Trending />} />
                <Route path='/popular' element={<Popular />} />
                <Route path='/movie' element={<AllMovies />} />
            </Routes>
        </>
    )
}
