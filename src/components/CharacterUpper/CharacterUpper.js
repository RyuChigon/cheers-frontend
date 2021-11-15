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
import {
  setCheerScore,
  setCheerScore2,
  getNumOfEachTeam,
} from '@/actions/actions';
import { angry, exclamation, smile, heart, none } from '@/images/emoticons';
import socket from '@/utils/socket';

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
  const [isGameOngoing, setIsGameOngoing] = useState(false);
  // console.log('is game ongoing? : ' + _is_game_ongoing);

  const _num_a = useSelector(state => state.user.num_a);
  const _num_b = useSelector(state => state.user.num_b);

  const xposition = index => {
    console.log('team : ' + _loginUser['team']);
    console.log('index: ' + index);
    if (_loginUser['team'] === 'a') {
      console.log('loginuser is a');
      return 100 * parseFloat(10 / (11 * 2 * column)) * (index % column);
    } else {
      console.log('loginuser is b');
      return (
        100 *
        (parseFloat(10 / (11 * 2 * column)) * (index % column) +
          parseFloat(6 / 11))
      );
    }
  };

  useEffect(() => {
    dispatch(getNumOfEachTeam());
    console.log(_loginUser);
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
    socket.on('minigame-true-start-rcv', item => {
      if (item.name === userName) {
        setIsGameOngoing(true);
      }
    });
    socket.on('minigame-true-end-rcv', item => {
      if (item.name === userName) {
        setIsGameOngoing(false);
      }
    });
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
    console.log('isgameongoing? : ' + isGameOngoing);
    if (isGameOngoing) {
      if (gamenumber === 1) {
        switch (e.key) {
          case ' ': {
            setCheer(true);
            if (_loginUser['team'] == 'a') {
              socket.emit('minigame-cheer-snd', {
                name: _loginUser['userName'],
                cheer: '1',
                team: _loginUser['team'],
                a_score1: _a_team + _num_b,
                b_score1: _b_team,
                a_score2: _a_team2,
                b_score2: _b_team2,
              });
              dispatch(setCheerScore(_a_team + _num_b, _b_team));
            } else {
              socket.emit('minigame-cheer-snd', {
                name: _loginUser['userName'],
                cheer: '1',
                team: _loginUser['team'],
                a_score1: _a_team,
                b_score1: _b_team + _num_a,
                a_score2: _a_team2,
                b_score2: _b_team2,
              });
              dispatch(setCheerScore(_a_team, _b_team + _num_a));
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
                a_score1: _a_team - _num_b,
                b_score1: _b_team,
                a_score2: _a_team2,
                b_score2: _b_team2,
              });
              dispatch(setCheerScore(_a_team - _num_b, _b_team));
            } else {
              socket.emit('minigame-cheer-snd', {
                name: _loginUser['userName'],
                cheer: '1',
                team: _loginUser['team'],
                a_score1: _a_team,
                b_score1: _b_team - _num_a,
                a_score2: _a_team2,
                b_score2: _b_team2,
              });
              dispatch(setCheerScore(_a_team, _b_team - _num_a));
            }
            break;
          default:
            break;
        }
      } else if (gamenumber === 2) {
        switch (e.key) {
          case ' ': {
            setCheer(true);
            console.log(_cheer);
            if (userName === _loginUser['userName']) {
              const condition =
                _barposition - xposition(index) < 3 &&
                xposition(index) - _barposition < 3;
              if (condition) {
                if (_loginUser['team'] == 'a') {
                  socket.emit('minigame-cheer-snd', {
                    name: _loginUser['userName'],
                    cheer: '1',
                    team: _loginUser['team'],
                    a_score1: _a_team,
                    b_score1: _b_team,
                    a_score2: _a_team2 + _num_b,
                    b_score2: _b_team2,
                  });
                  dispatch(setCheerScore2(_a_team2 + _num_b, _b_team2));
                } else {
                  socket.emit('minigame-cheer-snd', {
                    name: _loginUser['userName'],
                    cheer: '1',
                    team: _loginUser['team'],
                    a_score1: _a_team,
                    b_score1: _b_team,
                    a_score2: _a_team2,
                    b_score2: _b_team2 + _num_a,
                  });
                  dispatch(setCheerScore2(_a_team2, _b_team2 + _num_a));
                }
                break;
              }
            }
          }
          case 'Enter':
            setCheer(true);
            if (userName === _loginUser['userName']) {
              const condition =
                _barposition - xposition(index) < 3 &&
                xposition(index) - _barposition < 3;
              if (condition) {
                if (_loginUser['team'] == 'a') {
                  socket.emit('minigame-cheer-snd', {
                    name: _loginUser['userName'],
                    cheer: '1',
                    team: _loginUser['team'],
                    a_score1: _a_team,
                    b_score1: _b_team,
                    a_score2: _a_team2 - _num_b,
                    b_score2: _b_team2,
                  });
                  dispatch(setCheerScore2(_a_team2 - _num_b, _b_team2));
                } else {
                  socket.emit('minigame-cheer-snd', {
                    name: _loginUser['userName'],
                    cheer: '1',
                    team: _loginUser['team'],
                    a_score1: _a_team,
                    b_score1: _b_team,
                    a_score2: _a_team2,
                    b_score2: _b_team2 - _num_a,
                  });
                  dispatch(setCheerScore2(_a_team2, _b_team2 - _num_a));
                }
                break;
              }
            }
          default:
            break;
        }
      }
    }
  };

  const keyUp = () => {
    if (isGameOngoing) {
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
    }
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
