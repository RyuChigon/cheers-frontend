import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Video from '@/components/Video';
import Emoticon from '@/components/Emoticon';
import Chat from '@/components/Chat';
import ViewPoint from '@/components/ViewPoint';
import Character from '@/components/Character';
import { MainContainer, CheerGuide, CommunicationContent } from './styled';
import { cheer_guide } from '@/images/etc';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser } from '@/actions/actions';

const Main = () => {
  const _userList = useSelector(state => state.user.userList);
  const _loginUser = useSelector(state => state.user.loginUser);
  const [position, setPosition] = useState([0, 0]);
  const [cheer, setCheer] = useState(false);
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  // useEffect(async() => {
  //   await dispatch(getAllUser());
  // });

  const showOthers = () => {
    dispatch(getAllUser());
  };

  const moveCharacter = e => {
    switch (e.key) {
      case 'ArrowLeft': {
        setPosition([position[0], position[1] - 5]);
        console.log(_loginUser);
        break;
      }
      case 'ArrowRight': {
        setPosition([position[0], position[1] + 5]);
        break;
      }
      case 'ArrowUp': {
        setPosition([position[0] - 5, position[1]]);
        break;
      }
      case 'ArrowDown': {
        setPosition([position[0] + 5, position[1]]);
        break;
      }
      case ' ': {
        setCheer(true);
        break;
      }
      case 'Enter': {
        showOthers();
      }
      default:
        break;
    }
  };

  const keyUp = () => setCheer(false);

  return (
    <MainContainer onKeyDown={moveCharacter} onKeyUp={keyUp} tabIndex="0">
      <Header />
      <ViewPoint />
      <Video />
      <Character
        character="a"
        team="samsung"
        cheer={cheer}
        position={position}
      />
      <div>
        {_userList.map(
          (char, index) =>
            char[3] != _loginUser['userName'] && (
              <span key={index}>
                <Character
                  character={char[3]}
                  team={char[7]}
                  cheer={cheer}
                  position={[char[5], char[6]]}
                />
              </span>
            )
        )}
      </div>
      <CheerGuide src={cheer_guide} />
      <CommunicationContent>
        <Emoticon />
        <Chat />
      </CommunicationContent>
    </MainContainer>
  );
};

export default Main;
