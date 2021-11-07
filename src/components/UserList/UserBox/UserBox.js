import React, { useState } from 'react';
import { UserBoxContainer, Character } from './styled';
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

const Checkbox = props => <input type="checkbox" {...props} />;

const UserBox = ({ userName, character, team, add, del }) => {
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
    </UserBoxContainer>
  );
};

export default UserBox;