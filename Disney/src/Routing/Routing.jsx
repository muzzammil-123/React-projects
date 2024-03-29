import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Login from '../Components/Login'
import Header from '../Components/Header'
export default function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  )
}
