import React from 'react';
import { KingContainer, VideoContainer, MainContainer } from './styled';
import Video from '@/components/Video';
import Main from '@/pages/Main';

const MainPrior = () => {
  return (
    <KingContainer>
      <VideoContainer>
        <Video />
      </VideoContainer>
      <MainContainer>
        <Main />
      </MainContainer>
    </KingContainer>
  );
};

export default MainPrior;
