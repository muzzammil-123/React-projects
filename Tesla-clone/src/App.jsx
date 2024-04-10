import React from 'react'
import Routing from './utils/Routing'
import Navbar from './components/Navbar'
import Store from './store/Store'
export default function App() {
  return (
    <Store.Provider value={{}}>
      <Navbar/>
      <Routing/>
    </Store.Provider>
  )
}
