import React, { createContext } from 'react' 


const GameContext = createContext({
score: 0,
topScore: 0,
handleClick: () => {},
randomArr: [],
characterArr: ''
})

export default GameContext 