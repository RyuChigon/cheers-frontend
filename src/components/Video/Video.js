import React from 'react';
import { VideoContainer } from './styled';
import { ReactFlvPlayer } from 'react-flv-player';
import path from '@/utils/path';

const Video = () => {
  return (
    <VideoContainer>
      <ReactFlvPlayer
        url={path.video}
        // width="800px"
        // height="500px"
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

export default Video;
