import React, { useState } from "react"
import Header from '@/components/Header'
import Video from "@/components/Video"
import Emoticon from "@/components/Emoticon"
import Chat from "@/components/Chat"
import ViewPoint from "@/components/ViewPoint"
import {
  MainContainer,
  CheerGuide,
  Character,
  CommunicationContent,
} from './styled'
import {
  cheer_guide,
} from '@/images/etc'
import {
  a_hanwha,
} from '@/images/characters'

const Main = () => {

  const [position, setPosition] = useState([0, 0]);
  const moveCharacter = (e) => {
    switch (e.key) {
      case "ArrowLeft": {
        setPosition([position[0], position[1] - 5]);
        break;
      }
      case "ArrowRight": {
        setPosition([position[0], position[1] + 5]);
        break;
      }
      case "ArrowUp": {
        setPosition([position[0] - 5, position[1]]);
        break;
      }
      case "ArrowDown": {
        setPosition([position[0] + 5, position[1]]);
        break;
      }
      default: break;
    }
  }
  

  return (
    <MainContainer onKeyDown={moveCharacter} tabIndex="0">
      <Header />
      <ViewPoint />
      <Video />
      <Character src={a_hanwha} position={position}  />
      <CheerGuide src={cheer_guide} />
      <CommunicationContent>
        <Emoticon />
        <Chat />
      </CommunicationContent>
    </MainContainer>
  )
}

export default Main