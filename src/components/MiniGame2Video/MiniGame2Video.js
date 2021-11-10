import React from 'react';
import { VideoContainer } from './styled';
import { ReactFlvPlayer } from 'react-flv-player';

const MiniGame2Video = () => {
  return (
    <VideoContainer>
      <ReactFlvPlayer
        url="http://192.249.28.102:8000/live/cheers.flv"
        // url="http://localhost:8000/live/cheers.flv"
        width="460px"
        height="310px"
        handleError={err => {
          switch (err) {
            case 'NetworkError':
              console.log('network error');
              break;
            case 'MediaError':
              console.log('media error');
              break;
            default:
              console.log('other error');
          }
        }}
      />
    </VideoContainer>
  );
};

export default MiniGame2Video;
