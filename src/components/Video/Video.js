import React from 'react';
import video from './video.mp4';
import { ShowVideo } from './styled';

const Video = () => (
  <ShowVideo src={video} muted autoPlay>
    Sorry, your browser does not suppport embedded videos, Try by using Chrome.
  </ShowVideo>
);

export default Video;
