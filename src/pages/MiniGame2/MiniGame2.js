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
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
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
import { NoticeBox } from '../Main/styled';
import { CodeSharp } from '@material-ui/icons';

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
  const [secondState, setSecondState] = useState(20);
  const [gameEndtimer, setGameEndtimer] = useState(0);
  const [gameStarttimer, setGameStarttimer] = useState(0);
  const gameCanStart = useRef(false);
  const _a_score1 = useSelector(state => state.user.a_team);
  const _b_score1 = useSelector(state => state.user.b_team);
  const _is_admin = useSelector(state => state.user.isadmin);
  const [isgamereallyend, setIsGameReallyEnd] = useState(false);
  const [isgameend, setIsGameEnd] = useState(false);

  dispatch(getAllUser());
  const { count, start, stop, reset } = useCounter(0, 50);
  const [currentSeconds, setCurrentSeconds] = useState(0);

  if (isgameend) {
    console.log('a_score: ' + _a_score1);
    console.log('b_score: ' + _b_score1);
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
      if (oneTurn.current == 2) {
        stop();
        // setWinner(winner => {
        //   if (_a_score1 > _b_score1) {
        //     return 'The winner is team A!';
        //   } else if (_a_score1 < _b_score1) {
        //     return 'The winner is team B';
        //   } else {
        //     return 'The game ended in a tie';
        //   }
        // });
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
      if (seconds == 399) {
        console.log('399s');
        reset();
        stop();
        gameCanStart.current = true;
        setGameStarttimer(gameStarttimer => gameStarttimer - 1);
        start();
      }
    }
  };

  useEffect(timer, [count]);
  useEffect(() => {
    console.log('isadmin? : ' + _is_admin);
    console.log('a_team : ' + _a_score1);
    console.log('b_team : ' + _b_score1);
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
              Game rull explain, timer is {secondState} sec
            </>
          }
        </NoticeBox>
      ) : null}
      {gameEndtimer > 0 ? (
        <NoticeBox>
          {
            <>
              <br />
              {_a_score1 > _b_score1
                ? 'The winner is team A!'
                : 'The winner is team B!'}
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
