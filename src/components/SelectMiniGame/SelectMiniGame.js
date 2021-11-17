import React from 'react';
import { useHistory } from 'react-router';
import { GameContainer, Text, Game, Games, TextContainer } from './styled';
import socket from '@/utils/socket';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUser } from '@/actions/actions';

const SelectMiniGame = () => {
  const history = useHistory();
  const _userList = useSelector(state => state.user.userList);
  const dispatch = useDispatch();
  dispatch(getAllUser());
  const team_1 = _userList.filter(user => user['team'] == 'a');
  const team_2 = _userList.filter(user => user['team'] == 'b');

  const game1Start = () => {
    if (team_1.length < 3 || team_2.length < 3) {
      alert('number of members in each team is too small!');
      return;
    } else if (team_1.length > 15 || team_2.length > 15) {
      alert('number of members in each team is too small!');
      return;
    }
    socket.emit('minigame1-start-snd', {});
    history.push('/minigame1/');
  };
  const game2Start = () => {
    if (team_1.length < 3 || team_2.length < 3) {
      alert('number of members in each team is too small!');
      return;
    } else if (team_1.length > 15 || team_2.length > 15) {
      alert('number of members in each team is too small!');
      return;
    }
    socket.emit('minigame2-start-snd', {});
    history.push('/minigame2');
  };
  return (
    <GameContainer>
      <TextContainer>
        <Text>Select Mini Game</Text>
      </TextContainer>
      <Games>
        <Game onClick={game1Start}>Game1</Game>
        <Game onClick={game2Start}>Game2</Game>
      </Games>
    </GameContainer>
  );
};

export default SelectMiniGame;
