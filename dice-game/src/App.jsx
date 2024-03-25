import React, { useState } from 'react'
import Store from '../src/store/Store'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import Game from './components/Game'
export default function App() {
  let [isGamePlay, setIsGamePlay] = useState(false)
  let handleClick = () => {
    setIsGamePlay(true)
  }
  let generateNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }
  let [selectedValue, setSelectedValue] = useState()
  let [error, setError] = useState()
  let [currentDice, setCurrentDice] = useState(1)
  let [score, setScore] = useState(0)

  let roleDice = () => {
    if (selectedValue === undefined) {
      setError('Please select number')
      return;
    }

    let randomNumber = generateNumber(1, 7)
    setCurrentDice(randomNumber)

    if (selectedValue === randomNumber) {
      setScore(score + randomNumber)
    }
    else {
      setScore(prev => prev - 2)
    }

    setSelectedValue(undefined)
  }

  return (
    <Store.Provider value={{ handleClick, selectedValue, setSelectedValue, currentDice, setError, error, roleDice, score, setScore }}>

      <>

        {isGamePlay ? <Game /> : <Home />}
      </>
    </Store.Provider>
  )
}
