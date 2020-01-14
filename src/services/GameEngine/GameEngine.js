import React, { useState, useEffect } from 'react'

import Cards from '../../components/Cards'
import Footer from '../../components/Footer'
import Game from '../../components/Game'
import Header from '../../components/Header'
import NavBar from '../../components/NavBar'

import GameContext from '../../utils/GameContext'

import img1 from '../../assets/bojack.jpg'
import img2 from '../../assets/carolyn.jpg'
import img3 from '../../assets/diane.jpg'
import img4 from '../../assets/holly.jpg'
import img5 from '../../assets/peanut.jpg'
import img6 from '../../assets/pickles.jpg'
import img7 from '../../assets/sarah.jpg'
import img8 from '../../assets/todd.jpg'

const GameEngine = () => {

  const [gameState, setGameState] = useState({
    score: 0,
    topScore: 0,
    characterArr: [
      { src: img1,  id: 1},
      { src: img2,  id: 2},
      { src: img3,  id: 3},
      { src: img4,  id: 4},
      { src: img5,  id: 5},
      { src: img6,  id: 6},
      { src: img7,  id: 7},
      { src: img8,  id: 8}
  ],
    randomArr: []

  })  

  gameState.handleClick = event => {

    const shuffleArr = (arr) => {
      var i,
            j,
            temp;
      for (let i = arr.length -1; i > 0; i--) {
        j = Math.floor(Math.random() * (i +1))
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
      return arr;
    }

    let characterArr = shuffleArr(gameState.characterArr)
    setGameState({ ...gameState, characterArr })

if (gameState.randomArr.includes(event.target.id) === false) {
  let randomArr = gameState.randomArr.push(event.target.id)
  let score = gameState.score++
  setGameState({ ...gameState })
} else {
  let score = 0
  let topScore = gameState.score
  let randomArr = []
  setGameState({ ...gameState, score, topScore, randomArr})
}

}

  return(
    <GameContext.Provider value = {gameState}>
        <NavBar />
        <Game />
    </GameContext.Provider>
  )
}

export default GameEngine