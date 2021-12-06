import React, { useEffect, useState } from 'react';
import {
  KingContainer,
  VideoContainer,
  MainContainer,
  HeaderContainer,
  CommunicationContainer,
  ViewPointContainer,
} from './styled';
import Video from '@/components/Video';
import Main from '@/pages/Main';
import Header from '@/components/Header';
import Emoticon from '@/components/Emoticon';
import Chat from '@/components/Chat';
import ViewPoint from '@/components/ViewPoint';
import socket from '@/utils/socket';

const MainPrior = () => {
  const size = {
    width: window.innerWidth || document.body.clientWidth,
    height: window.innerHeight || document.body.clientHeight,
  };
  const xposition = size.width / 2 - 350;
  console.log(size);
  console.log(xposition);
  const yposition = 50;

  return (
    <KingContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <ViewPointContainer>
        <ViewPoint />
      </ViewPointContainer>
      <VideoContainer x={xposition} y={yposition}>
        <Video />
      </VideoContainer>
      <MainContainer>
        <Main />
      </MainContainer>
      <CommunicationContainer>
        <CommunicationContainer>
          <Emoticon />
          <Chat />
        </CommunicationContainer>
      </CommunicationContainer>
    </KingContainer>
  );
};

export default MainPrior;
