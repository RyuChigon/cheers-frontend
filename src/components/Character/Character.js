import React, { useCallback, useEffect, useState } from 'react';
import {
  CharacterContainer,
  CharacterImage,
  Emoticon,
  CharacterName,
  MyCharacter,
} from './styled';
import {
  chigon_back_h,
  chigon_cheer_h,
  chigon_default_h,
  chigon_left_h,
  chigon_right_h,
  chigon_back_s,
  chigon_cheer_s,
  chigon_default_s,
  chigon_left_s,
  chigon_right_s,
  b_back_h,
  b_cheer_h,
  b_default_h,
  b_left_h,
  b_right_h,
  b_back_s,
  b_cheer_s,
  b_default_s,
  b_left_s,
  b_right_s,
  dain_back_h,
  dain_cheer_h,
  dain_default_h,
  dain_left_h,
  dain_right_h,
  dain_back_s,
  dain_cheer_s,
  dain_default_s,
  dain_left_s,
  dain_right_s,
  subin_back_h,
  subin_cheer_h,
  subin_default_h,
  subin_left_h,
  subin_right_h,
  subin_back_s,
  subin_cheer_s,
  subin_default_s,
  subin_left_s,
  subin_right_s,
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
  let emoTimer;

  const size = {
    width: window.innerWidth || document.body.clientWidth,
    height: window.innerHeight || document.body.clientHeight,
  };

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
          clearTimeout(emoTimer);
          emoTimer = setTimeout(() => {
            setEmo('none');
          }, 5000);
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
          clearTimeout(emoTimer);
          emoTimer = setTimeout(() => {
            setEmo('none');
          }, 5000);
        }
      });
    }
    socket.on('msg-rcv', item => {
      if (item.name == userName) {
        setEmo('balloon');
        clearTimeout(emoTimer);
        emoTimer = setTimeout(() => {
          setEmo('none');
        }, 5000);
      }
    });
  }, []);

  const characterImage = () => {
    switch (character) {
      case 'a':
        return team === 'a'
          ? _cheer
            ? chigon_cheer_h
            : chigon_default_h
          : _cheer
          ? chigon_cheer_s
          : chigon_default_s;
      case 'b':
        return team === 'a'
          ? _cheer
            ? b_cheer_h
            : b_default_h
          : _cheer
          ? b_cheer_s
          : b_default_s;
      case 'c':
        return team === 'a'
          ? _cheer
            ? dain_cheer_h
            : dain_default_h
          : _cheer
          ? dain_cheer_s
          : dain_default_s;
      case 'd':
        return team === 'a'
          ? _cheer
            ? subin_cheer_h
            : subin_default_h
          : _cheer
          ? subin_cheer_s
          : subin_default_s;
      default:
        return chigon_default_h;
    }
  };

  const moveCharacter = useCallback(e => {
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
  });

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
