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
import {
  getAllUser,
  setCheerScore2,
  setBarposition,
  setCheerScore,
} from '@/actions/actions';
import { useHistory } from 'react-router';
import socket from '@/utils/socket';

import UpperContainer from '@/components/UpperContainer';

import MinigameCharacter from '@/components/MinigameCharacter';
import { NoticeBox } from '../MinigameOne/styled';

const useCounter = (initialValue, ms) => {
  const [count, setCount] = useState(initialValue);
  const intervalRef = useRef(null);
  const start = useCallback(() => {
    if (intervalRef.current != null) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setCount(c => c + 1);
    }, ms);
    console.log(count);
    if (count === 10) {
      console.log(count);
      reset();
    }
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
    // stop();
  }, []);
  return { count, start, stop, reset };
};

const MiniGame2 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [_position, setPosition] = useState(0);
  const oneTurn = useRef(0);
  const [secondState, setSecondState] = useState(15);
  const [gameEndtimer, setGameEndtimer] = useState(0);
  const [gameStarttimer, setGameStarttimer] = useState(0);
  const gameCanStart = useRef(false);
  const a_team2 = useSelector(state => state.user.a_team2);
  const b_team2 = useSelector(state => state.user.b_team2);
  const _is_admin = useSelector(state => state.user.isadmin);
  const [isgamereallyend, setIsGameReallyEnd] = useState(false);
  const [isgameend, setIsGameEnd] = useState(false);
  const _loginUser = useSelector(state => state.user.loginUser);

  dispatch(getAllUser());
  const { count, start, stop, reset } = useCounter(0, 50);
  const [currentSeconds, setCurrentSeconds] = useState(0);

  if (isgameend) {
    console.log('a_score: ' + a_team2);
    console.log('b_score: ' + b_team2);
  }

  if (isgamereallyend) {
    setCheerScore(0, 0);
    if (_is_admin) {
      console.log('admin');
      history.replace('/admin/main');
    } else {
      console.log('not admin');
      history.replace('/main');
    }
  }

  const timer = () => {
    const seconds = count;
    if (gameCanStart.current) {
      if (seconds == 91) {
        oneTurn.current += 1;
        console.log('oneturn: ' + oneTurn.current);
        reset();
      }
      if (oneTurn.current == 4) {
        stop();
        socket.emit('minigame-true-end-snd', {
          name: _loginUser['userName'],
        });
        oneTurn.current = 0;
        setIsGameEnd(true);
        setGameEndtimer(gameEndtimer => gameEndtimer + 1);
        setTimeout(() => {
          setGameEndtimer(gameEndtimer => gameEndtimer - 1);
          gameCanStart.current = false;
          setIsGameReallyEnd(is => true);
        }, 6000);
      }
      setCurrentSeconds(seconds);
      setPosition(seconds);
      dispatch(setBarposition(seconds));
    } else {
      if (seconds % 20 == 0) {
        setSecondState(secondState => secondState - 1);
      }
      if (seconds == 300) {
        reset();
        stop();
        socket.emit('minigame-true-start-snd', {
          name: _loginUser['userName'],
        });
        gameCanStart.current = true;
        setGameStarttimer(gameStarttimer => gameStarttimer - 1);
        start();
      }
    }
  };

  useEffect(timer, [count]);
  useEffect(() => {
    console.log('isadmin? : ' + _is_admin);
    console.log('a_team : ' + a_team2);
    console.log('b_team : ' + b_team2);
    dispatch(setBarposition(0));
    socket.on('kickout-rcv', item => {
      history.push('/');
    });
    socket.on('minigame-cheer-rcv', item => {
      if (item.cheer === '1') {
        dispatch(setCheerScore2(item.a_score2, item.b_score2));
      }
    });
    setGameStarttimer(gameStarttimer => gameStarttimer + 1);
    start();
  }, []);

  return (
    <MainContainer tableIndex="0">
      <Header />
      <UpperContainer />
      <LowerContainer>
        <MinigameCharacter game={2} />
        <C1 position={_position} />
      </LowerContainer>
      {gameStarttimer > 0 ? (
        <NoticeBox>
          {
            <>
              <br />
              Push the space bar when you&apos;re on the red bar!
              <br />
              Game will be start in {secondState} sec
            </>
          }
        </NoticeBox>
      ) : null}
      {gameEndtimer > 0 ? (
        <NoticeBox>
          {
            <>
              <br />
              {a_team2 > b_team2
                ? 'The winner is team A!'
                : a_team2 < b_team2
                ? 'The winner is team B!'
                : 'The game is ended in tie!'}
            </>
          }
        </NoticeBox>
      ) : null}
      <CommunicationContent>
        <Emoticon />
        <Chat />
      </CommunicationContent>
    </MainContainer>
  );
};

export default MiniGame2;
