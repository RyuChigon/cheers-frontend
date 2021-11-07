import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import MiniGame2Video from '@/components/MiniGame2Video';
import Emoticon from '@/components/Emoticon';
import Chat from '@/components/Chat';
import Character from '@/components/Character';
import {
  MainContainer,
  CommunicationContent,
  HalfContainer,
  //   U1Container,
  //   U3Container,
  //   Logo1,
  //   Logo2,
  UserZone,
} from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '@/actions/actions';
import { useHistory } from 'react-router';
import Samsung_logo from 'images/logos/Samsung_logo.png';
import Hanwha_logo from 'images/logos/Hanwha_logo.png';

import io from 'socket.io-client';
import UpperContainer from '@/components/UpperContainer';
const socket = io.connect('http://localhost:80/');

const MiniGame2 = () => {
  const _userList = useSelector(state => state.user.userList);
  const _loginUser = useSelector(state => state.user.loginUser);
  const [position, setPosition] = useState([0, 0]);
  const dispatch = useDispatch();
  const history = useHistory();

  dispatch(getAllUser());

  useEffect(() => {
    socket.on('kickout-rcv', item => {
      history.push('/');
    });
  }, []);

  const moveCharacter = e => {
    switch (e.key) {
      case ' ': {
        setCheer(true);
        break;
      }
      default:
        break;
    }
  };

  const keyUp = () => setCheer(false);

  return (
    // <MainContainer onKeyDown={moveCharacter} onKeyUp={keyUp} tabIndex="0">
    <MainContainer tableIndex="0">
      <Header />
      {/* <HalfContainer>
        <U1Container>
          <Logo1 src={Samsung_logo} />
        </U1Container>
        <MiniGame2Video />
        <U3Container>
          <Logo2 src={Hanwha_logo} />
        </U3Container>
      </HalfContainer> */}
      <UpperContainer />
      {/* <div>
            {_userList.map(
            (char, index) =>
                char[1] != _loginUser['userName'] && (
                <span key={index}>
                    <Character
                    character={char[3]}
                    team={char[7]}
                    userName={char[1]}
                    loggin={false}
                    position={[char[5], char[6]]}
                    emoticon={char[4]}
                    />
                </span>
                )
            )}
            {_userList.map(
            (char, index) =>
                char[1] === _loginUser['userName'] && (
                <span key={index}>
                    <Character
                    character={char[3]}
                    team={char[7]}
                    userName={char[1]}
                    loggin={true}
                    />
                </span>
                )
            )}
        </div> */}
      <HalfContainer>
        <UserZone />
        <UserZone />
      </HalfContainer>
      <CommunicationContent>
        <Emoticon />
        <Chat />
      </CommunicationContent>
    </MainContainer>
  );
};

export default MiniGame2;
