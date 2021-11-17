import React, { useEffect } from 'react';
import MiniGame2Video from '@/components/MiniGame2Video';
import {
  HalfContainer,
  U1Container,
  Logo1,
  Logo2,
  LogoContainer,
  ScoreContainer,
  ScoreFont,
} from './styled';
import { useSelector } from 'react-redux';
import Samsung_logo from 'images/logos/samsung_logo.png';
import Hanwha_logo from 'images/logos/hanwha_logo.png';

const UpperContainer = () => {
  const _a_team2 = useSelector(state => state.user.a_team2);
  const _b_team2 = useSelector(state => state.user.b_team2);
  return (
    <HalfContainer>
      <U1Container>
        <LogoContainer>
          <Logo1 src={Samsung_logo} />
        </LogoContainer>
        <ScoreContainer>
          <ScoreFont>{_a_team2}</ScoreFont>
        </ScoreContainer>
      </U1Container>
      <MiniGame2Video />
      <U1Container>
        <LogoContainer>
          <Logo2 src={Hanwha_logo} />
        </LogoContainer>
        <ScoreContainer>
          <ScoreFont>{_b_team2}</ScoreFont>
        </ScoreContainer>
      </U1Container>
    </HalfContainer>
  );
};

export default UpperContainer;
