import React from 'react';
import { InitialContainer } from '../Initial/styled';
import { Logo } from './styled';
import GameSelector from '@/components/GameSelector';
import CheersLogo from '@/images/logos/Cheers_logo.svg';

const ChooseGame = () => (
  <InitialContainer>
    <Logo src={CheersLogo} />
    <GameSelector />
  </InitialContainer>
);

export default ChooseGame;
