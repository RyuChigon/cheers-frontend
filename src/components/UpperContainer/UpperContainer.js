import React from 'react';
import MiniGame2Video from '@/components/MiniGame2Video';
import {
  HalfContainer,
  U1Container,
  U3Container,
  Logo1,
  Logo2,
} from './styled';
import Samsung_logo from 'images/logos/Samsung_logo.png';
import Hanwha_logo from 'images/logos/Hanwha_logo.png';

const UpperContainer = () => {
  return (
    <HalfContainer>
      <U1Container>
        <Logo1 src={Samsung_logo} />
      </U1Container>
      <MiniGame2Video />
      <U3Container>
        <Logo2 src={Hanwha_logo} />
      </U3Container>
    </HalfContainer>
  );
};

export default UpperContainer;
