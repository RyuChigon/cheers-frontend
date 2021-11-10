import React, { useEffect, useState, useCallback, useRef } from 'react';
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

const useCounter = (initialValue, ms) => {
  const [count, setCount] = useState(initialValue);
  const intervalRef = useRef(null);
  const start = useCallback(() => {
    if (intervalRef.current != null) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setCount(c => c + 1);
    }, 0.1);
  }, []);
  const stop = useCallback(() => {
    if (intervalRef.current == null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);
  const reset = useCallback(() => {
    setCount(0);
    stop();
  }, []);
  return { count, start, stop, reset };
};

const MiniGame2 = () => {
  const a_team = useSelector(state => state.user.a_team);
  const b_team = useSelector(state => state.user.b_team);
  const dispatch = useDispatch();
  const history = useHistory();
  const [_position, setPosition] = useState(0);
  const [_flag, setFlag] = useState(false);
  const [cnt, setCnt] = useState(0);

  dispatch(getAllUser());

  const [currentHours, setCurrentHours] = useState(0);
  const [currentMinutes, setCurrentMinutes] = useState(0);
  const [currentSeconds, setCurrentSeconds] = useState(0);
  const { count, start, stop, reset } = useCounter(0, 1000);

  socket.on('minigame2-start-rcv', item => {
    console.log('got message');
    start();
  });

  const timer = () => {
    const checkMinutes = Math.floor(count / 60);
    const hours = Math.floor(count / 3600);
    const minutes = checkMinutes % 60;
    const seconds = count / 2;
    setCurrentHours(hours);
    setCurrentSeconds(seconds);
    setPosition(seconds);
    setCurrentMinutes(minutes);
  };

  useEffect(timer, [count]);
  useEffect(() => {
    socket.on('kickout-rcv', item => {
      history.push('/');
    });
    socket.on('minigame-cheer-rcv', item => {
      if (item.cheer === '1') {
        dispatch(setCheerScore(item.a_score, item.b_score));
      }
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
