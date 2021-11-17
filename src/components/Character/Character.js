import React, { useEffect, useState } from 'react';
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
  const [_direction, setDirection] = useState(0);
  const _loginUser = useSelector(state => state.user.loginUser);
  const movedistance = 10;
  const FRONT = 0;
  const BACK = 1;
  const LEFT = 2;
  const RIGHT = 3;
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
          setDirection(item.direction);
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
            setDirection(FRONT);
            setCheer(false);
          } else {
            setDirection(FRONT);
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
        if (team === 'a') {
          if (_cheer) return chigon_cheer_h;
          else {
            switch (_direction) {
              case FRONT:
                return chigon_default_h;
              case BACK:
                return chigon_back_h;
              case LEFT:
                return chigon_left_h;
              case RIGHT:
                return chigon_right_h;
            }
          }
        } else {
          if (_cheer) return chigon_cheer_s;
          else {
            switch (_direction) {
              case FRONT:
                return chigon_default_s;
              case BACK:
                return chigon_back_s;
              case LEFT:
                return chigon_left_s;
              case RIGHT:
                return chigon_right_s;
            }
          }
        }
      case 'b':
        if (team === 'a') {
          if (_cheer) return b_cheer_h;
          else {
            switch (_direction) {
              case FRONT:
                return b_default_h;
              case BACK:
                return b_back_h;
              case LEFT:
                return b_left_h;
              case RIGHT:
                return b_right_h;
            }
          }
        } else {
          if (_cheer) return b_cheer_s;
          else {
            switch (_direction) {
              case FRONT:
                return b_default_s;
              case BACK:
                return b_back_s;
              case LEFT:
                return b_left_s;
              case RIGHT:
                return b_right_s;
            }
          }
        }
      case 'c':
        if (team === 'a') {
          if (_cheer) return dain_cheer_h;
          else {
            switch (_direction) {
              case FRONT:
                return dain_default_h;
              case BACK:
                return dain_back_h;
              case LEFT:
                return dain_left_h;
              case RIGHT:
                return dain_right_h;
            }
          }
        } else {
          if (_cheer) return dain_cheer_s;
          else {
            switch (_direction) {
              case FRONT:
                return dain_default_s;
              case BACK:
                return dain_back_s;
              case LEFT:
                return dain_left_s;
              case RIGHT:
                return dain_right_s;
            }
          }
        }
      case 'd':
        if (team === 'a') {
          if (_cheer) return subin_cheer_h;
          else {
            switch (_direction) {
              case FRONT:
                return subin_default_h;
              case BACK:
                return subin_back_h;
              case LEFT:
                return subin_left_h;
              case RIGHT:
                return subin_right_h;
            }
          }
        } else {
          if (_cheer) return subin_cheer_s;
          else {
            switch (_direction) {
              case FRONT:
                return subin_default_s;
              case BACK:
                return subin_back_s;
              case LEFT:
                return subin_left_s;
              case RIGHT:
                return subin_right_s;
            }
          }
        }
      default:
        return chigon_default_h;
    }
  };

  const moveCharacter = e => {
    switch (e.key) {
      case 'ArrowLeft': {
        if (_position[1] - movedistance > -80) {
          setDirection(LEFT);
          setPosition([_position[0], _position[1] - movedistance]);
          socket.emit('move-snd', {
            name: _loginUser['userName'],
            movement: _position,
            direction: _direction,
          });
        }
        break;
      }
      case 'ArrowRight': {
        if (_position[1] + movedistance < size.width - 10) {
          setDirection(RIGHT);
          setPosition([_position[0], _position[1] + movedistance]);
          socket.emit('move-snd', {
            name: _loginUser['userName'],
            movement: _position,
            direction: _direction,
          });
        }
        break;
      }
      case 'ArrowUp': {
        if (_position[0] - movedistance > -80) {
          setDirection(BACK);
          setPosition([_position[0] - movedistance, _position[1]]);
          socket.emit('move-snd', {
            name: _loginUser['userName'],
            movement: _position,
            direction: _direction,
          });
        }
        break;
      }
      case 'ArrowDown': {
        if (_position[0] + movedistance < size.height - 280) {
          setDirection(FRONT);
          setPosition([_position[0] + movedistance, _position[1]]);
          socket.emit('move-snd', {
            name: _loginUser['userName'],
            movement: _position,
            direction: _direction,
          });
        }
        break;
      }
      case ' ': {
        request('get', '/api/user/cheering', null);
        setDirection(FRONT);
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
