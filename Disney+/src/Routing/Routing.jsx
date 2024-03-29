import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Login from '../components/Login'
export default function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  )
}
