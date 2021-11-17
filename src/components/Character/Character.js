import React, { useEffect, useState } from 'react';
import {
  CharacterContainer,
  CharacterImage,
  Emoticon,
  CharacterName,
  MyCharacter,
} from './styled';
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
import { useSelector } from 'react-redux';
import {
  angry,
  exclamation,
  smile,
  heart,
  none,
  balloon,
} from '@/images/emoticons';
import socket from '@/utils/socket';
import { request } from '@/utils/axios';

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
  const movedistance = 10;

  var size = {
    width: window.innerWidth || document.body.clientWidth,
    height: window.innerHeight || document.body.clientHeight,
  };

  useEffect(() => {
    console.log('size : ' + size.width);
    console.log('size : ' + size.height);
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
    } else {
      setEmo(_loginUser['emogee']);
      socket.on('emogee-rcv', item => {
        if (item.name === userName) {
          setEmo(item.emogee);
        }
      });
    }
    socket.on('msg-rcv', item => {
      if (item.name == userName) {
        setEmo('balloon');
      }
    });
  }, []);

  const characterImage = () => {
    switch (character) {
      case 'a':
        return team === 'a'
          ? _cheer
            ? a_hanwha_cheer
            : a_hanwha
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
        if (_position[1] - movedistance > -80) {
          setPosition([_position[0], _position[1] - movedistance]);
          socket.emit('move-snd', {
            name: _loginUser['userName'],
            movement: _position,
          });
        }
        break;
      }
      case 'ArrowRight': {
        if (_position[1] + movedistance < size.width - 10) {
          setPosition([_position[0], _position[1] + movedistance]);
          socket.emit('move-snd', {
            name: _loginUser['userName'],
            movement: _position,
          });
        }
        break;
      }
      case 'ArrowUp': {
        if (_position[0] - movedistance > -80) {
          setPosition([_position[0] - movedistance, _position[1]]);
          socket.emit('move-snd', {
            name: _loginUser['userName'],
            movement: _position,
          });
        }
        break;
      }
      case 'ArrowDown': {
        if (_position[0] + movedistance < size.height - 280) {
          setPosition([_position[0] + movedistance, _position[1]]);
          socket.emit('move-snd', {
            name: _loginUser['userName'],
            movement: _position,
          });
        }
        break;
      }
      case ' ': {
        request('get', '/api/user/cheering', null);
        setCheer(true);
        socket.emit('cheer-snd', {
          name: _loginUser['userName'],
          cheer: '1',
        });
        break;
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
      case 'balloon':
        return balloon;
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
        <Emoticon src={setEmoticon(_emoticon)} />
        <MyCharacter>
          <CharacterImage src={characterImage()} />
          <CharacterName>{userName}</CharacterName>
        </MyCharacter>
      </CharacterContainer>
    );
  } else {
    return (
      <CharacterContainer position={_position}>
        <Emoticon src={setEmoticon(_emoticon)} />
        <CharacterImage src={characterImage()} />
        <CharacterName>{userName}</CharacterName>
      </CharacterContainer>
    );
  }
};

export default Character;
