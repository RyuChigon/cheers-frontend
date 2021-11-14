import React, { useState } from 'react';
import {
  UserBoxContainer,
  Character,
  WithReport,
  Exclamationstyle,
  CharacterGrid,
} from './styled';
import {
  a_hanwha,
  a_samsung,
  b_hanwha,
  b_samsung,
  c_hanwha,
  c_samsung,
  d_hanwha,
  d_samsung,
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
        return team === 'a' ? a_hanwha : a_samsung;
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
