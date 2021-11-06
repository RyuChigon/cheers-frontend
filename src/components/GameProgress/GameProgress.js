import React, { Component } from 'react';
import { GameProgressContainer, Text, Progress } from './styled';

const GameProgress = () => {
  return (
    <GameProgressContainer>
      <Text>Game Progress</Text>
      <Progress>Game has not been selected</Progress>
    </GameProgressContainer>
  );
};

export default GameProgress;
