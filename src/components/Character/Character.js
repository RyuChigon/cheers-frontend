import React from "react"
import {
  CharacterContainer,
  CharacterImage,
  Emoticon
} from './styled'
import {
  a_hanwha,
  a_hanwha_cheer,
  a_samsung,
  a_samsung_cheer,
  b_hanwha,
  b_samsung,
  c_hanwha,
  c_samsung,
  d_hanwha,
  d_samsung,
} from '@/images/characters'
import {
  angry,
  exclamation,
  smile,
  heart,
  none,
} from '@/images/emoticons'

const Character = ({
  character,
  team,
  cheer,
  emoticon,
  position,
}) => {
  const characterImage = () => {
    switch (character) {
      case 'a':
        return team === 'hanwha' ? cheer ? a_hanwha_cheer : a_hanwha 
        : cheer ? a_samsung_cheer : a_samsung;
      case 'b':
        return team === 'hanwha' ? b_hanwha : b_samsung;
      case 'c':
        return team === 'hanwha' ? c_hanwha : c_samsung;
      case 'd':
        return team === 'hanwha' ? d_hanwha : d_samsung;
      default: return a_hanwha;
    }
  }

  const setEmoticon = () => {
    switch (emoticon) {
      case 'angry': return angry;
      case 'exclamation': return exclamation;
      case 'smile': return smile;
      case 'heart': return heart;
      default: return none;
    }
  }

  return(
    <CharacterContainer position={position} >
      <Emoticon src={setEmoticon()} />
      <CharacterImage src={characterImage()} />
    </CharacterContainer>
  )
}

export default Character