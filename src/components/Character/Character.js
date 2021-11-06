import React, { useState } from 'react';
import { CharacterContainer, CharacterImage, Emoticon } from './styled';
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
} from '@/images/characters';
import { angry, exclamation, smile, heart, none } from '@/images/emoticons';

// import io from 'socket.io-client';

// const socket = io.connect('http://192.249.28.102:80/');

const Character = ({ character, team, cheer, emoticon, position }) => {
  const [_position, setPosition] = useState([0, 0]);
  const [_cheer, setCheer] = useState(false);

  const characterImage = () => {
    switch (character) {
      case 'a':
        return team === 'a'
          ? cheer
            ? a_hanwha_cheer
            : a_hanwha
          : cheer
          ? a_samsung_cheer
          : a_samsung;
      case 'b':
        return team === 'a' ? b_hanwha : b_samsung;
      case 'c':
        return team === 'a' ? c_hanwha : c_samsung;
      case 'd':
        return team === 'a' ? d_hanwha : d_samsung;
      default:
        return a_hanwha;
    }
  };

  const moveCharacter = e => {
    switch (e.key) {
      case 'ArrowLeft': {
        setPosition([_position[0], _position[1] - 5]);
        // console.log(_loginUser);
        break;
      }
      case 'ArrowRight': {
        setPosition([_position[0], _position[1] + 5]);
        break;
      }
      case 'ArrowUp': {
        setPosition([_position[0] - 5, _position[1]]);
        break;
      }
      case 'ArrowDown': {
        setPosition([_position[0] + 5, _position[1]]);
        break;
      }
      case ' ': {
        setCheer(true);
        break;
      }
      case 'Enter': {
        // showOthers();
      }
      default:
        break;
    }
  };

  const keyUp = () => setCheer(false);

  const setEmoticon = () => {
    switch (emoticon) {
      case 'angry':
        return angry;
      case 'exclamation':
        return exclamation;
      case 'smile':
        return smile;
      case 'heart':
        return heart;
      default:
        return none;
    }
  };

  return (
    <CharacterContainer
      onKeyDown={moveCharacter}
      onKeyUp={keyUp}
      position={_position}
      tabIndex="0"
    >
      <Emoticon src={setEmoticon()} />
      <CharacterImage src={characterImage()} />
    </CharacterContainer>
  );
};

export default Character;
