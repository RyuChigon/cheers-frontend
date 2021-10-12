import React from "react"
import {
  GameContainer,
  Game
} from './styled'
import FirstGame from '@/images/games/firstGame.svg'
import SecondGame from '@/images/games/secondGame.svg'

const GameSelector = () => {
  return (
    <GameContainer>
      select the game
      <Game src={FirstGame} />
      <Game src={SecondGame} />
    </GameContainer>
  )
}

export default GameSelector