import React from 'react';
import { useHistory } from 'react-router';
import { GameContainer, Game } from './styled';
import FirstGame from '@/images/games/firstGame.svg';
import SecondGame from '@/images/games/secondGame.svg';

const GameSelector = () => {
  const history = useHistory();
  const gameJoin = () => history.push('/character');
  const preparingGame = () => alert('This is preparing Game');

  return (
    <GameContainer>
      select the game
      <Game src={FirstGame} onClick={gameJoin} />
      <Game src={SecondGame} onClick={preparingGame} />
    </GameContainer>
  );
};

export default GameSelector;
