import React from 'react';
import { useHistory } from 'react-router';
import { GameContainer, Game } from './styled';
import FirstGame from '@/images/games/firstGame.svg';
import SecondGame from '@/images/games/secondGame.svg';
import { useSelector } from 'react-redux';

const GameSelector = () => {
  const isadmin = useSelector(state => state.user.isadmin);
  const history = useHistory();
  const gameJoin = () => {
    if (isadmin) history.push('/admin/main');
    else history.push('/character');
  };
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
