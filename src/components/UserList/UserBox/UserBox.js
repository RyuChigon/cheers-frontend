import React, { useState } from 'react';
import {
  UserBoxContainer,
  Character,
  WithReport,
  Exclamationstyle,
  CharacterGrid,
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
import { exclamation } from '@/images/emoticons';
import { useSelector } from 'react-redux';

const Checkbox = props => <input type="checkbox" {...props} />;

const UserBox = ({ userName, character, team, add, del, report }) => {
  const _userList = useSelector(state => state.user.userList);
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
    if (checked) {
      del(userName);
    } else {
      add(userName);
    }
  };

  const characterImage = () => {
    switch (character) {
      case 'a':
        return team === 'a' ? chigon_default_h : chigon_default_s;
      case 'b':
        return team === 'a' ? b_default_h : b_default_s;
      case 'c':
        return team === 'a' ? dain_default_h : dain_default_s;
      case 'd':
        return team === 'a' ? subin_default_h : subin_default_s;
      default:
        return chigon_default_h;
    }
  };

  return (
    <UserBoxContainer>
      <Checkbox checked={checked} onClick={handleChange} />
      <Character src={characterImage()} />
      <div>{userName}</div>
      <Exclamationstyle src={exclamation} />
      <div>{report}</div>
    </UserBoxContainer>
  );
};

export default UserBox;
