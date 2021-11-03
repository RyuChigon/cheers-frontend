import React from 'react';
import video from './video.mp4';
import { ShowVideo } from './styled';
import { Player, ControlBar } from 'video-react';

const Video = () => {
  return (
    <ShowVideo src={video} muted autoPlay controls>
      Sorry, your browser does not suppport embedded videos, Try by using
      Chrome.
    </ShowVideo>

    // <Player autoPlay src={video}>
    // <ControlBar autoHide={false} className="my-class" />
    // </Player>
  );
};

export default Video;
