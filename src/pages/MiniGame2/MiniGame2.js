import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Emoticon from '@/components/Emoticon';
import Chat from '@/components/Chat';
import {
  MainContainer,
  CommunicationContent,
  LowerContainer,
  C1,
} from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '@/actions/actions';
import { useHistory } from 'react-router';
import io from 'socket.io-client';

import UpperContainer from '@/components/UpperContainer';

import MinigameCharacter from '@/components/MinigameCharacter';

const socket = io.connect('http://localhost:80/');

const MiniGame2 = () => {
  const a_team = useSelector(state => state.user.a_team);
  const b_team = useSelector(state => state.user.b_team);
  const dispatch = useDispatch();
  const history = useHistory();
  const [_position, setPosition] = useState(0);
  const [_flag, setFlag] = useState(false);

  dispatch(getAllUser());

  socket.on('minigame2-start-rcv', item => {
    setFlag(true);
  });

  setInterval(() => {
    if (_flag) {
      setPosition(_position + 5);
      console.log(_position);
    }
  }, 1000);

  useEffect(() => {
    socket.on('kickout-rcv', item => {
      history.push('/');
    });
    socket.on('minigame-cheer-rcv', item => {
      if (item.cheer === '1') {
        dispatch(setCheerScore(item.a_score, item.b_score));
      }
    });
  }, [_position]);

  return (
    <MainContainer tableIndex="0">
      <Header />
      <UpperContainer />
      <LowerContainer>
        <MinigameCharacter game={2} />
        <C1 position={_position} />
      </LowerContainer>
      {/* <LowerBackContainer /> */}
      <CommunicationContent>
        <Emoticon />
        <Chat />
      </CommunicationContent>
    </MainContainer>
  );
};

export default MiniGame2;
