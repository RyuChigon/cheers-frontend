import React, { useEffect, useState, useCallback, useRef } from 'react';
import Header from '@/components/Header';
import Video from '@/components/Video';
import { samsung_logo, hanwha_logo } from '@/images/logos';
import Emoticon from '@/components/Emoticon';
import Chat from '@/components/Chat';
import MinigameCharacter from '@/components/MinigameCharacter';
import {
  MainContainer,
  CommunicationContent,
  ScoreFont_left,
  ScoreFont_right,
  Logo_left,
  Logo_right,
  NoticeBox,
} from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '@/actions/actions';
import { useHistory } from 'react-router';
import { Table, TableCell, TableContainer, TableRow } from '@material-ui/core';
import { LowerContainer } from '../MiniGame2/styled';
import { setCheerScore } from '@/actions/actions';
import socket from '@/utils/socket';
import { RemainTurnTimer, Announce } from '../MiniGame2/styled';

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

const MiniGame1 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const a_team = useSelector(state => state.user.a_team);
  const b_team = useSelector(state => state.user.b_team);
  const _is_admin = useSelector(state => state.user.isadmin);
  const [gamestarttimer, setGameStartTimer] = useState(0);
  const [currentSeconds, setCurrentSeconds] = useState(0);
  const gameCanStart = useRef(false);
  const [isgameend, setIsGameEnd] = useState(false);
  const [isgamereallyend, setIsGameReallyEnd] = useState(false);
  const startcountdown = 5;
  const gameplaytime = 5;
  const [gamestartcount, setGameStartCount] = useState(startcountdown);
  const [gameEndtimer, setGameEndtimer] = useState(0);
  const _loginUser = useSelector(state => state.user.loginUser);
  const [remainTime, setRemainTime] = useState(gameplaytime);

  dispatch(getAllUser());
  const { count, start, stop, reset } = useCounter(0, 1000);

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
      if (seconds != 0 && seconds % 1 == 0) {
        setRemainTime(remainTime - 1);
      }
      if (seconds == startcountdown) {
        stop();
        socket.emit('minigame-true-end-snd', {
          name: _loginUser['userName'],
        });
        setIsGameEnd(true);
        setGameEndtimer(gameEndtimer => gameEndtimer + 1);
        setTimeout(() => {
          setGameEndtimer(gameEndtimer => gameEndtimer - 1);
          gameCanStart.current = false;
          setIsGameReallyEnd(is => true);
        }, 6000);
      }
    } else {
      if (seconds % 1 == 0) {
        setGameStartCount(gamestartcount => gamestartcount - 1);
      }
      if (seconds == startcountdown) {
        reset();
        stop();
        socket.emit('minigame-true-start-snd', {
          name: _loginUser['userName'],
        });
        gameCanStart.current = true;
        setGameStartTimer(gameStarttimer => gameStarttimer - 1);
        start();
      }
    }
  };
  useEffect(timer, [count]);
  useEffect(() => {
    console.log('isadmin : ' + _is_admin);
    socket.on('kickout-rcv', item => {
      history.push('/');
    });
    socket.on('minigame-cheer-rcv', item => {
      if (item.cheer === '1') {
        dispatch(setCheerScore(item.a_score1, item.b_score1));
      }
    });
    setGameStartTimer(gamestarttimer => gamestarttimer + 1);
    start();
  }, []);

  return (
    <MainContainer tableIndex="0">
      <Header />
      <TableContainer style={{ outline: 'none', borderBottom: 'none' }}>
        <Table
          sx={{ minWidth: 650, outline: 'none', borderBottom: 'none' }}
          aria-label="user table"
        >
          <TableRow
            key={'--'}
            style={{ outline: 'none', borderBottom: 'none' }}
          >
            <TableCell
              align="center"
              style={{ outline: 'none', borderBottom: 'none' }}
            >
              <Logo_left src={hanwha_logo} />
              <ScoreFont_left>{a_team}</ScoreFont_left>
            </TableCell>
            <TableCell
              align="center"
              style={{ outline: 'none', borderBottom: 'none' }}
            >
              <Video size={'small'} />
            </TableCell>
            <TableCell
              align="center"
              style={{ outline: 'none', borderBottom: 'none' }}
            >
              <Logo_right src={samsung_logo} />
              <ScoreFont_right>{b_team}</ScoreFont_right>
            </TableCell>
          </TableRow>
        </Table>
      </TableContainer>
      <LowerContainer>
        <MinigameCharacter game={1} />
      </LowerContainer>
      {gamestarttimer > 0 ? (
        <NoticeBox>
          {
            <>
              <br />
              When the game starts, PUSH the SPACE BAR as fast as you can!
              <br />
              <Announce>Game will start in {gamestartcount}</Announce>
            </>
          }
        </NoticeBox>
      ) : null}
      {gameEndtimer > 0 ? (
        <NoticeBox>
          {
            <>
              <br />
              {a_team > b_team
                ? 'The winner is team A!'
                : a_team < b_team
                ? 'The winner is team B!'
                : 'The game ended in a tie!'}
            </>
          }
        </NoticeBox>
      ) : null}
      <CommunicationContent>
        <Emoticon />
        <Chat />
      </CommunicationContent>
      <RemainTurnTimer>Remain time: {remainTime}s</RemainTurnTimer>
    </MainContainer>
  );
};

export default MiniGame1;
