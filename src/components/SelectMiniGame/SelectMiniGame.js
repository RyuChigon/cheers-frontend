import React, {Component } from "react"
import { useHistory } from "react-router"
import {
  GameContainer,
  Game
} from './styled'

const SelectMiniGame = () => {
    const history = useHistory();
    const game1Start = () => history.push('/admin/game1start/');
    const game2Start = () => history.push('/admin/game2start/');
    return(
        <GameContainer>
            <Game onClick={game1Start} />
            <Game onClick={game2Start} />
        </GameContainer>
    )
}

export default SelectMiniGame