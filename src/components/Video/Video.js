import React from 'react';
import { VideoContainer } from './styled';
import { ReactFlvPlayer } from 'react-flv-player';
import path from '@/utils/path';

const Video = ({ size }) => {
  const width = size === 'small' ? '420px' : '700px';
  const height = size === 'small' ? '270px' : '450px';
  return (
    <VideoContainer>
      <ReactFlvPlayer
        url={path.video}
        width={width}
        height={height}
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
