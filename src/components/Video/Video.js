import React, { useState } from 'react';
import { VideoContainer } from './styled';
import { ReactFlvPlayer } from 'react-flv-player';
import path from '@/utils/path';

const Video = () => {
  const [_width, setWidth] = useState(0);
  const [_height, setHeight] = useState(0);
  return (
    <VideoContainer>
      <ReactFlvPlayer
        url={path.video}
        width="700px"
        height="450px"
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
