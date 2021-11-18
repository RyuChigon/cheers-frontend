import React from 'react';
import { KingContainer, VideoContainer, MainContainer } from './styled';
import Video from '@/components/Video';
import Main from '@/pages/Main';

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
      <VideoContainer x={xposition} y={yposition}>
        <Video />
      </VideoContainer>
      <MainContainer>
        <Main />
      </MainContainer>
    </KingContainer>
  );
};

export default MainPrior;
