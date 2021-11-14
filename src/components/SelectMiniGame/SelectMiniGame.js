import React from 'react';
import { useHistory } from 'react-router';
import { GameContainer, Text, Game, Games, TextContainer } from './styled';
import socket from '@/utils/socket';

const SelectMiniGame = () => {
  const history = useHistory();
  const game1Start = () => {
    socket.emit('minigame1-start-snd', {});
    history.push('/minigameone/');
  };
  const game2Start = () => {
    socket.emit('minigame2-start-snd', {});
    history.push('/minigame2');
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
