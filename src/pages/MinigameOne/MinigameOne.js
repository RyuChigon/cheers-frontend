import React, { useEffect } from 'react';
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
} from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '@/actions/actions';
import { useHistory } from 'react-router';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableColumn,
} from '@material-ui/core';
import { setCheerScore } from '@/actions/actions';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:80/');

const MinigameOne = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const a_team = useSelector(state => state.user.a_team);
  const b_team = useSelector(state => state.user.b_team);

  dispatch(getAllUser());

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
              <Video />
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
      <MinigameCharacter />
      <CommunicationContent>
        <Emoticon />
        <Chat />
      </CommunicationContent>
    </MainContainer>
  );
};

export default MinigameOne;
