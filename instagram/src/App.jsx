import React from 'react'
import Store from './store/Store'
import Routing from './utils/Routing'
export default function App() {
  return (
    <>
      <Store.Provider value={{}}>
        <Routing />
      </Store.Provider>
    </>
  )
}
