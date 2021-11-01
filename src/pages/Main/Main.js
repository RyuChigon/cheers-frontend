import React, { useState } from 'react';
import Header from '@/components/Header';
import Video from '@/components/Video';
import Emoticon from '@/components/Emoticon';
import Chat from '@/components/Chat';
import ViewPoint from '@/components/ViewPoint';
import Character from '@/components/Character';
import { MainContainer, CheerGuide, CommunicationContent } from './styled';
import { cheer_guide } from '@/images/etc';

const Main = () => {
  const [position, setPosition] = useState([0, 0]);
  const [cheer, setCheer] = useState(false);

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
      <CheerGuide src={cheer_guide} />
      <CommunicationContent>
        <Emoticon />
        <Chat />
      </CommunicationContent>
    </MainContainer>
  );
};

export default Main;
