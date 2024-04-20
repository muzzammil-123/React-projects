import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Store from './store/Store'
// import Routing from './utils/Routing'
import Nav from './components/Nav'
import Home from './components/Home'
import styled from 'styled-components'
export default function () {
  return (
    <>
      <Store.Provider value={{}}>
          <Container>
          <Nav />
          <Home/>
          </Container>
      </Store.Provider>
    </>
  )
}

let Container = styled.div`
display: flex;
`