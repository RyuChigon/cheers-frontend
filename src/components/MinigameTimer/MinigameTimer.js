import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  MainContainer,
  CommunicationContent,
  LowerContainer,
  C1,
} from './styled';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableColumn,
} from '@material-ui/core';
import MinigameCharacter from '@/components/MinigameCharacter';
import socket from '@/utils/socket';

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

export default function SetTimer() {
  const [currentHours, setCurrentHours] = useState(0);
  const [currentMinutes, setCurrentMinutes] = useState(0);
  const [currentSeconds, setCurrentSeconds] = useState(0);
  const { count, start, stop, reset } = useCounter(0, 1000);
  const [_position, setPosition] = useState(0);

  socket.on('minigame2-start-rcv', item => {
    console.log('got message');
    start();
  });

  const timer = () => {
    const checkMinutes = Math.floor(count / 60);
    const hours = Math.floor(count / 3600);
    const minutes = checkMinutes % 60;
    const seconds = count & 60;
    setCurrentHours(hours);
    setCurrentSeconds(seconds);
    setPosition(seconds);
    setCurrentMinutes(minutes);
  };

  useEffect(timer, [count]);
  return (
    <>
      <TableContainer>
        <Table>
          <TableRow>
            <TableCell>
              <h1>
                {' '}
                {currentHours < 10 ? `0${currentHours}` : currentHours} :{' '}
                {currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes} :
                {currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}
              </h1>
              <button onClick={start}> Start</button>
              <button onClick={stop}> Stop</button>
              <button onClick={reset}> Reset</button>
            </TableCell>
          </TableRow>
          {/* <TableRow>
            <TableCell> */}
          <MinigameCharacter game={2} />
          <C1 position={_position} />
          {/* </TableCell>
          </TableRow> */}
        </Table>
      </TableContainer>
      {/* <h1>
        {' '}
        {currentHours < 10 ? `0${currentHours}` : currentHours} :{' '}
        {currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes} :
        {currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}
      </h1>
      <button onClick={start}> Start</button>
      <button onClick={stop}> Stop</button>
      <button onClick={reset}> Reset</button> */}
      {/* <MinigameCharacter game={2} />
      <C1 position={_position} /> */}
    </>
  );
}
