import React from 'react';
import { useHistory } from 'react-router';
import { GameContainer, Text, Game, Games, TextContainer } from './styled';
import socket from '@/utils/socket';

const SelectMiniGame = () => {
  const history = useHistory();
  const game1Start = () => history.push('/admin/game1start/');
  const game2Start = () => {
    console.log('game2start');
    socket.emit('minigame2-start-snd', {});
  };
  return (
    <GameContainer>
      <TextContainer>
        <Text>Select Mini Game</Text>
      </TextContainer>
      <Games>
        <Game onClick={game1Start}>Game1</Game>
        <Game onClick={game2Start}>Game2</Game>
      </Games>
    </GameContainer>
  );
};

export default SelectMiniGame;
