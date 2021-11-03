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
  const [position, setPosition] = useState([0, 0]);
  const [cheer, setCheer] = useState(false);
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  // useEffect(async() => {
  //   await dispatch(getAllUser());
  // });

  const showOthers = async () => {
    await dispatch(getAllUser());
    // console.log(_userList);
    const result = [];
    for (let i = 0; i < _userList.length; i++) {
      switch (_userList[i][3]) {
        case 'a':
          switch (_userList[i][7]) {
            case 'a':
              result.push(
                <Character
                  character="a"
                  team="hanhwa"
                  cheer={cheer}
                  position={position}
                />
              );
              break;
            case 'b':
              result.push(
                <Character
                  character="a"
                  team="samsung"
                  cheer={cheer}
                  position={position}
                />
              );
              break;
          }
          break;
        case 'b':
          switch (_userList[i][7]) {
            case 'a':
              result.push(
                <Character
                  character="b"
                  team="hanhwa"
                  cheer={cheer}
                  position={position}
                />
              );
              break;
            case 'b':
              result.push(
                <Character
                  character="b"
                  team="samsung"
                  cheer={cheer}
                  position={position}
                />
              );
              break;
          }
          break;
        case 'c':
          switch (_userList[i][7]) {
            case 'a':
              result.push(
                <Character
                  character="c"
                  team="hanhwa"
                  cheer={cheer}
                  position={position}
                />
              );
              break;
            case 'b':
              result.push(
                <Character
                  character="c"
                  team="samsung"
                  cheer={cheer}
                  position={position}
                />
              );
              break;
          }
          break;
        case 'd':
          switch (_userList[i][7]) {
            case 'a':
              result.push(
                <Character
                  character="d"
                  team="hanhwa"
                  cheer={cheer}
                  position={position}
                />
              );
              break;
            case 'b':
              result.push(
                <Character
                  character="d"
                  team="samsung"
                  cheer={cheer}
                  position={position}
                />
              );
              break;
          }
          break;
      }
    }
    return result;
  };

  const moveCharacter = e => {
    switch (e.key) {
      case 'ArrowLeft': {
        setPosition([position[0], position[1] - 5]);
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
      {/* <div>
      {_userList.map((char, index) => (
        <span key={index}>
          <Character character= char[0] team='samsung' cheer={cheer} position={position} />
        </span>
      ))}
      </div> */}
      {/* <div>{showOthers()}</div> */}
      <CheerGuide src={cheer_guide} />
      <CommunicationContent>
        <Emoticon />
        <Chat />
      </CommunicationContent>
    </MainContainer>
  );
};

export default Main;
