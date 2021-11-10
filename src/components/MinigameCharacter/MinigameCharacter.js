import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  ImageList,
  ImageListItem,
} from '@material-ui/core';
import { spacebar_push } from '@/images/games';
import { SpaceBar } from './styled';
import CharacterUpper from '@/components/CharacterUpper';
import { getAllUser } from '@/actions/actions';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:80/');

const MinigameCharacter = ({
  character,
  team,
  userName,
  loggin,
  position,
  emoticon,
}) => {
  const _userList = useSelector(state => state.user.userList);
  const _loginUser = useSelector(state => state.user.loginUser);
  const dispatch = useDispatch();

  dispatch(getAllUser());

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="user table">
        <TableBody style={{ outline: 'none' }}>
          <TableRow
            key={'--'}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            style={{ outline: 'none' }}
          >
            <TableCell
              align="left"
              style={{ width: 1000, borderBottom: 'none' }}
            >
              <ImageList
                rowHeight={100}
                cols={5}
                gap={1}
                className={'imagelist'}
              >
                {_userList.map(
                  char =>
                    // char[1] !== _loginUser['userName'] &&
                    char[7] === 'a' && (
                      <ImageListItem key={char[1]}>
                        <CharacterUpper
                          character={char[3]}
                          team={char[7]}
                          userName={char[1]}
                          loggin={false}
                          position={[char[5], char[6]]}
                          emoticon={char[4]}
                        />
                      </ImageListItem>
                    )
                )}
                ;
                {/* {_userList.map(
                  char =>
                    char[1] === _loginUser['userName'] &&
                    char[7] === 'a' && (
                      <ImageListItem key={char[1]}>
                        <CharacterUpper
                          character={char[3]}
                          team={char[7]}
                          userName={char[1]}
                          loggin={true}
                          position={[char[5], char[6]]}
                          emoticon={char[4]}
                        />
                      </ImageListItem>
                    )
                )} */}
              </ImageList>
            </TableCell>
            <TableCell
              align="right"
              style={{ width: 100, borderBottom: 'none' }}
            ></TableCell>
            <TableCell
              align="right"
              style={{ width: 1000, borderBottom: 'none' }}
            >
              <ImageList
                rowHeight={100}
                cols={5}
                gap={1}
                className={'imagelist'}
              >
                {_userList.map(
                  (char, index) =>
                    // char[1] !== _loginUser['userName'] &&
                    char[7] === 'b' && (
                      <ImageListItem key={char[1]}>
                        <CharacterUpper
                          character={char[3]}
                          team={char[7]}
                          userName={char[1]}
                          loggin={false}
                          emoticon={char[4]}
                        />
                      </ImageListItem>
                    )
                )}
                ;
                {/* {_userList.map(
                  char =>
                    char[1] === _loginUser['userName'] &&
                    char[7] === 'b' && (
                      <ImageListItem key={char[1]}>
                        <CharacterUpper
                          character={char[3]}
                          team={char[7]}
                          userName={char[1]}
                          loggin={true}
                          emoticon={char[4]}
                        />
                      </ImageListItem>
                    )
                )} */}
              </ImageList>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Table>
        <TableRow>
          <TableCell
            align="left"
            style={{ width: 400, borderBottom: 'none' }}
          />
          <TableCell style={{ borderBottom: 'none' }}>
            <SpaceBar src={spacebar_push} />
          </TableCell>
          <TableCell
            align="right"
            style={{ width: 400, borderBottom: 'none' }}
          />
        </TableRow>
      </Table>
    </TableContainer>
  );
};

export default MinigameCharacter;
