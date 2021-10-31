import React from "react"
import {
  GameContainer,
  Game
} from './styled'
import FirstGame from '@/images/games/firstGame.svg'
import SecondGame from '@/images/games/secondGame.svg'
import { useHistory } from "react-router"

const AdminGameSelector = () => {
  const history = useHistory();
  const gameJoin = () => history.push('/admin/main');
  const preparingGame = () => alert("This is preparing Game");

  return (
    <GameContainer>
      select the game
      <Game src={FirstGame} onClick={gameJoin} />
      <Game src={SecondGame} onClick={preparingGame} />
    </GameContainer>
  )
}

export default AdminGameSelector