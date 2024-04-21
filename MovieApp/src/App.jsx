import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Store from './store/Store'
import styled from 'styled-components'
import Routing from './utils/Routing'
export default function () {
  const baseUrl = "https://image.tmdb.org/t/p/original/"
  let [search, setSearch] = useState("")
  let onChange = (e) => {
    setSearch(e)
  }

  // console.log(search)
  return (
    <>
      <Store.Provider value={{baseUrl, onChange ,search}}>
          <Container>
          <Routing/>  
          </Container>
      </Store.Provider>
    </>
  )
}

let Container = styled.div`
display: flex;
`