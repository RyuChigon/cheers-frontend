import React, { useState } from 'react';
import { useHistory } from 'react-router';
import {
  CharacterContainer,
  CharacterContent,
  Arrow,
  CharacterFrame,
  Character,
  TeamButtonContent,
  TeamButton,
  InputContent,
  InputNickname,
  Enter,
} from './styled';
import {
  chigon_default_h,
  chigon_default_s,
  b_default_h,
  b_default_s,
  dain_default_h,
  dain_default_s,
  subin_default_h,
  subin_default_s,
} from '@/images/characters';
import { arrow_left, arrow_right, enter } from '@/images/etc';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, getAllUser, modifyUser } from '@/actions/actions';

const CharacterSelector = () => {
  const _userList = useSelector(state => state.user.userList);
  const [character, setCharacter] = useState('a');
  const [team, setTeam] = useState('a');
  const [name, setName] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  dispatch(getAllUser());

  const onClickRight = () => {
    switch (character) {
      case 'a':
        setCharacter('b');
        break;
      case 'b':
        setCharacter('c');
        break;
      case 'c':
        setCharacter('d');
        break;
      case 'd':
        setCharacter('a');
        break;
      default:
        break;
    }
  };

  const onClickLeft = () => {
    switch (character) {
      case 'a':
        setCharacter('d');
        break;
      case 'b':
        setCharacter('a');
        break;
      case 'c':
        setCharacter('b');
        break;
      case 'd':
        setCharacter('c');
        break;
      default:
        break;
    }
  };

  const onClickLTeam = () => setTeam('a');
  const onClickRTeam = () => setTeam('b');

  const viewCharacter = () => {
    switch (character) {
      case 'a': {
        if (team === 'a') return chigon_default_h;
        return chigon_default_s;
      }
      case 'b': {
        if (team === 'a') return b_default_h;
        return b_default_s;
      }
      case 'c': {
        if (team === 'a') return dain_default_h;
        return dain_default_s;
      }
      case 'd': {
        if (team === 'a') return subin_default_h;
        return subin_default_s;
      }
      default:
        return chigon_default_h;
    }
  };

  const writeName = e => setName(e.target.value);
  const enterPress = e => {
    if (e.key === 'Enter') join();
  };

  const join = () => {
    let body = {
      userName: name,
      team: team,
      character: character,
      position_x: 0,
      position_y: 0,
      emogee: 0,
      action: 0,
    };
    var isinlist = false;
    _userList.forEach(user => {
      if (user[1] === name) {
        dispatch(modifyUser(body));
        history.push('./main');
        isinlist = true;
        return;
      }
    });

    if (!isinlist) {
      dispatch(registerUser(body));
      history.push('./main');
    }
  };

  return (
    <CharacterContainer>
      select your character
      <CharacterContent>
        <Arrow src={arrow_left} onClick={onClickLeft} />
        <CharacterFrame>
          <Character src={viewCharacter()} />
        </CharacterFrame>
        <Arrow src={arrow_right} onClick={onClickRight} />
      </CharacterContent>
      <TeamButtonContent>
        <TeamButton team="Hanwha" onClick={onClickLTeam}>
          Hanwha
        </TeamButton>
        <TeamButton team="Samsung" onClick={onClickRTeam}>
          Samsung
        </TeamButton>
      </TeamButtonContent>
      <InputContent>
        <InputNickname
          placeholder="write your nickname..."
          onChange={writeName}
          onKeyPress={enterPress}
        />
        <Enter src={enter} onClick={join} />
      </InputContent>
    </CharacterContainer>
  );
};

export default CharacterSelector;
