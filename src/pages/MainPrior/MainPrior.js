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
  const yposition = 65;
  return (
    <KingContainer>
      {/* <VideoContainer>
        <Video />
      </VideoContainer>
      <MainContainer>
        <Main />
      </MainContainer> */}
      <VideoContainer x={xposition} y={yposition} />
      <MainContainer />
    </KingContainer>
  );
};

export default MainPrior;
