import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import Store from './store/Store'
import Game from './components/Game'
function App() {
  let [isGamePlayed, setIsGamePlayed] = useState(false)
  let handleClick = () => {
    setIsGamePlayed(true)
  }
  let [score, setScore] = useState(0)
  
  let [currentDice, setCurrentDice] = useState(1)
  
  let roleDice = () =>{



    let generateRandomNumber = (max, min) => {
      return Math.floor(Math.random() * (max - min) + min)
    }
  
    let randomNumber = generateRandomNumber(7, 1)
    setCurrentDice(randomNumber)

  }
  return (
    <>
      <Store.Provider value={{ setIsGamePlayed, isGamePlayed, handleClick, score, setScore, currentDice, setCurrentDice }}>
        {isGamePlayed ? <Game /> : <Home />}

      </Store.Provider>
    </>
  )
}

export default App