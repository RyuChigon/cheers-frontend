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
import { getAllUser, setCheerScore } from '@/actions/actions';
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
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(0);
  const [_flag, setFlag] = useState(false);
  const [cnt, setCnt] = useState(0);

  dispatch(getAllUser());

  /*useEffect(() => {
    const countdown = setInterval(() => {
      if (_flag) {
        if (seconds > 0) {
          setSeconds(seconds - 1);
          // setPosition(seconds);
          setPosition(_position + 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(countdown);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }
    }, 50);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);*/

  //////////////////////////////////
  /*socket.on('minigame2-start-rcv', item => {
    setFlag(true);
    console.log(_flag);
  });

  socket.on('minigame2-start-rcv', item => {
    setPosition(_position => _position + 5);
    console.log(_position);
  });*/

  useEffect(() => {
    socket.on('kickout-rcv', item => {
      history.push('/');
    });
    socket.on('minigame-cheer-rcv', item => {
      if (item.cheer === '1') {
        dispatch(setCheerScore(item.a_score, item.b_score));
      }
    });
    socket.on('minigame2-start-rcv', item => {
      setCnt(cnt + 1);
      console.log(cnt);
      setInterval(() => {
        setPosition(_position + 2);
      }, 1000);
    });
  }, []);

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
