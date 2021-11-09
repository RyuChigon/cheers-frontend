import React, { useEffect, useState } from 'react';
import { CharacterContainer, CharacterImage, Emoticon } from './styled';
import {
  a_hanwha_upper,
  a_hanwha_upper_cheer,
  a_samsung_upper,
  a_samsung_upper_cheer,
  b_hanwha_upper,
  b_samsung_upper,
  c_hanwha_upper,
  c_samsung_upper,
  d_hanwha_upper,
} from '@/images/characters';
import { useSelector } from 'react-redux';
import { angry, exclamation, smile, heart, none } from '@/images/emoticons';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:80/');

const Character = ({
  character,
  team,
  userName,
  loggin,
  position,
  emoticon,
}) => {
  const [_position, setPosition] = useState([0, 0]);
  const [_cheer, setCheer] = useState(false);
  const [_emoticon, setEmo] = useState('');
  const _loginUser = useSelector(state => state.user.loginUser);

  useEffect(() => {
    if (!loggin) {
      setPosition(position);
      setEmo(emoticon);
      socket.on('move-rcv', item => {
        if (item.name === userName) {
          setPosition(item.movement);
        }
      });
      socket.on('emogee-rcv', item => {
        if (item.name === userName) {
          setEmo(item.emogee);
        }
      });
      socket.on('cheer-rcv', item => {
        if (item.name === userName) {
          if (item.cheer === '0') {
            setCheer(false);
          } else {
            setCheer(true);
          }
        }
      });
    }
  }, []);

  const characterImage = () => {
    switch (character) {
      case 'a':
        return team === 'a'
          ? _cheer
            ? a_hanwha_cheer
            : a_hanwha_upper
          : _cheer
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
        socket.emit('move-snd', {
          name: _loginUser['userName'],
          movement: _position,
        });
        break;
      }
      case 'ArrowRight': {
        setPosition([_position[0], _position[1] + 5]);
        socket.emit('move-snd', {
          name: _loginUser['userName'],
          movement: _position,
        });
        break;
      }
      case 'ArrowUp': {
        setPosition([_position[0] - 5, _position[1]]);
        socket.emit('move-snd', {
          name: _loginUser['userName'],
          movement: _position,
        });
        break;
      }
      case 'ArrowDown': {
        setPosition([_position[0] + 5, _position[1]]);
        socket.emit('move-snd', {
          name: _loginUser['userName'],
          movement: _position,
        });
        break;
      }
      case ' ': {
        setCheer(true);
        socket.emit('cheer-snd', {
          name: _loginUser['userName'],
          cheer: '1',
        });
        break;
      }
      case 'Enter': {
        // showOthers();
      }
      default:
        break;
    }
  };

  const keyUp = () => {
    setCheer(false);
    socket.emit('cheer-snd', {
      name: _loginUser['userName'],
      cheer: '0',
    });
  };

  const setEmoticon = local_emo => {
    switch (local_emo) {
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

  if (loggin) {
    return (
      <CharacterContainer
        onKeyDown={moveCharacter}
        onKeyUp={keyUp}
        position={_position}
        tabIndex="0"
      >
        <Emoticon src={setEmoticon(_loginUser['emogee'])} />
        <CharacterImage src={characterImage()} />
      </CharacterContainer>
    );
  } else {
    return (
      <CharacterContainer position={_position}>
        <Emoticon src={setEmoticon(_emoticon)} />
        <CharacterImage src={characterImage()} />
      </CharacterContainer>
    );
  }
};

export default Character;
