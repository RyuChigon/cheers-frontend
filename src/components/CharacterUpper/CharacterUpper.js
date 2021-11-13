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
  d_samsung,
} from '@/images/characters';
import { useDispatch, useSelector } from 'react-redux';
import { setCheerScore, setCheerScore2 } from '@/actions/actions';
import { angry, exclamation, smile, heart, none } from '@/images/emoticons';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:80/');

const Character = ({
  character,
  team,
  userName,
  loggin,
  emoticon,
  gamenumber,
  index,
  column,
}) => {
  const [_cheer, setCheer] = useState(false);
  const [_emoticon, setEmo] = useState('');
  const _loginUser = useSelector(state => state.user.loginUser);
  const _a_team = useSelector(state => state.user.a_team);
  const _b_team = useSelector(state => state.user.b_team);
  const _a_team2 = useSelector(state => state.user.a_team2);
  const _b_team2 = useSelector(state => state.user.b_team2);
  const _barposition = useSelector(state => state.user.minigame2_barposition);
  const dispatch = useDispatch();
  const xposition = index => {
    if ((team = 'a')) {
      return 100 * parseFloat(10 / (11 * 2 * column)) * (index % column);
    } else {
      return (
        100 *
        (parseFloat(10 / (11 * 2 * column)) * (index % column) +
          parseFloat(6 / 11))
      );
    }
  };

  useEffect(() => {
    if (userName != _loginUser['userName']) {
      setEmo(emoticon);
      socket.on('emogee-rcv', item => {
        if (item.name === userName) {
          setEmo(item.emogee);
        }
      });
      socket.on('minigame-cheer-rcv', item => {
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
            ? a_hanwha_upper_cheer
            : a_hanwha_upper
          : _cheer
          ? a_samsung_upper_cheer
          : a_samsung_upper;
      case 'b':
        return team === 'a' ? b_hanwha_upper : b_samsung_upper;
      case 'c':
        return team === 'a' ? c_hanwha_upper : c_samsung_upper;
      case 'd':
        return team === 'a' ? d_hanwha_upper : d_samsung;
      default:
        return a_hanwha;
    }
  };

  const moveCharacter = e => {
    if (gamenumber === 1) {
      console.log('gamenumber');
      switch (e.key) {
        case ' ': {
          console.log('case space');
          setCheer(true);
          if (_loginUser['team'] == 'a') {
            console.log('team a');
            console.log(
              '_a_team : ' +
                _a_team +
                ', _b_team : ' +
                _b_team +
                ', _a_team2 : ' +
                _a_team2 +
                ', _b_team2 : ' +
                _b_team2
            );
            socket.emit('minigame-cheer-snd', {
              name: _loginUser['userName'],
              cheer: '1',
              team: _loginUser['team'],
              a_score1: _a_team + 1,
              b_score1: _b_team,
              a_score2: _a_team2,
              b_score2: _b_team2,
            });
            console.log(
              'after : ' +
                '_a_team : ' +
                _a_team +
                ', _b_team : ' +
                _b_team +
                ', _a_team2 : ' +
                _a_team2 +
                ', _b_team2 : ' +
                _b_team2
            );
            dispatch(setCheerScore(_a_team + 1, _b_team));
          } else {
            socket.emit('minigame-cheer-snd', {
              name: _loginUser['userName'],
              cheer: '1',
              team: _loginUser['team'],
              a_score1: _a_team,
              b_score1: _b_team + 1,
              a_score2: _a_team2,
              b_score2: _b_team2,
            });
            dispatch(setCheerScore(_a_team, _b_team + 1));
          }
          break;
        }
        case 'Enter':
          setCheer(true);
          if (_loginUser['team'] == 'a') {
            socket.emit('minigame-cheer-snd', {
              name: _loginUser['userName'],
              cheer: '1',
              team: _loginUser['team'],
              a_score1: _a_team - 1,
              b_score1: _b_team,
              a_score2: _a_team2,
              b_score2: _b_team2,
            });
            dispatch(setCheerScore(_a_team - 1, _b_team));
          } else {
            socket.emit('minigame-cheer-snd', {
              name: _loginUser['userName'],
              cheer: '1',
              team: _loginUser['team'],
              a_score1: _a_team,
              b_score1: _b_team - 1,
              a_score2: _a_team2,
              b_score2: _b_team2,
            });
            dispatch(setCheerScore(_a_team, _b_team - 1));
          }
          break;
        default:
          break;
      }
    } else if (gamenumber === 2) {
      switch (e.key) {
        case ' ': {
          console.log('cheer');
          setCheer(true);
          // console.log(Math.abs(_barposition - xposition(index)));
          if (Math.abs(_barposition - xposition(index)) < 20) {
            if (_loginUser['team'] == 'a') {
              socket.emit('minigame-cheer-snd', {
                name: _loginUser['userName'],
                cheer: '1',
                team: _loginUser['team'],
                a_score1: _a_team,
                b_score1: _b_team,
                a_score2: _a_team2 + 1,
                b_score2: _b_team2,
              });
              dispatch(setCheerScore2(_a_team2 + 1, _b_team2));
            } else {
              socket.emit('minigame-cheer-snd', {
                name: _loginUser['userName'],
                cheer: '1',
                team: _loginUser['team'],
                a_score1: _a_team,
                b_score1: _b_team,
                a_score2: _a_team2,
                b_score2: _b_team2 + 1,
              });
              dispatch(setCheerScore2(_a_team2, _b_team2 + 1));
            }
            break;
          }
        }
        /*case 'Enter':
          setCheer(true);
          if (_loginUser['team'] == 'a') {
            socket.emit('minigame-cheer-snd', {
              name: _loginUser['userName'],
              cheer: '1',
              team: _loginUser['team'],
              a_score: _a_team - 1,
              b_score: _b_team,
            });
            dispatch(setCheerScore(_a_team - 1, _b_team));
          } else {
            socket.emit('minigame-cheer-snd', {
              name: _loginUser['userName'],
              cheer: '1',
              team: _loginUser['team'],
              a_score: _a_team,
              b_score: _b_team - 1,
            });
            dispatch(setCheerScore(_a_team, _b_team - 1));
          }
          break;*/
        default:
          break;
      }
    }
  };

  const keyUp = () => {
    setCheer(false);
    console.log('keyup');
    socket.emit('minigame-cheer-snd', {
      name: _loginUser['userName'],
      cheer: '0',
      team: 'none',
      a_score1: _a_team,
      b_score1: _b_team,
      a_score2: _a_team2,
      b_score2: _b_team2,
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

  if (userName == _loginUser['userName']) {
    return (
      <CharacterContainer
        onKeyDown={moveCharacter}
        onKeyUp={keyUp}
        tabIndex="0"
      >
        <Emoticon src={setEmoticon(_loginUser['emogee'])} />
        <CharacterImage src={characterImage()} />
        <p>{userName}</p>
      </CharacterContainer>
    );
  } else {
    return (
      <CharacterContainer>
        <Emoticon src={setEmoticon(_emoticon)} />
        <CharacterImage src={characterImage()} />
        <p>{userName}</p>
      </CharacterContainer>
    );
  }
};

export default Character;
