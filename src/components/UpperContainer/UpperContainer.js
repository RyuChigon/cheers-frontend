import React from 'react';
import MiniGame2Video from '@/components/MiniGame2Video';
import {
  HalfContainer,
  U1Container,
  U3Container,
  Logo1,
  Logo2,
} from './styled';
import { useSelector } from 'react-redux';
import { ScoreFont_left, ScoreFont_right } from '@/pages/MinigameOne/styled';
import Samsung_logo from 'images/logos/samsung_logo.png';
import Hanwha_logo from 'images/logos/hanwha_logo.png';

const UpperContainer = () => {
  const a_team2 = useSelector(state => state.user.a_team2);
  const b_team2 = useSelector(state => state.user.b_team2);
  return (
    <HalfContainer>
      <U1Container>
        <Logo1 src={Samsung_logo} />
        <ScoreFont_left>{a_team2}</ScoreFont_left>
      </U1Container>
      <MiniGame2Video />
      <U3Container>
        <ScoreFont_right>{b_team2}</ScoreFont_right>
        <Logo2 src={Hanwha_logo} />
      </U3Container>
    </HalfContainer>
  );
};

export default UpperContainer;
