import React from "react"
import video from './video.mp4'
import {
  ShowVideo
} from './styled'

const Video = () => {
  return (
    <ShowVideo src={video} muted autoPlay>
      Sorry, your browser doesn't suppport embedded videos,
      Try by using Chrome.
    </ShowVideo>
  )
}

export default Video