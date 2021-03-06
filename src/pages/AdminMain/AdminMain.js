import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import AdminChat from '@/components/AdminChat';
import SelectMiniGame from '@/components/SelectMiniGame';
import UserList from '@/components/UserList';
import GameProgress from '@/components/GameProgress';
import Video from '@/components/Video';
import {
  MainContainer,
  SubContainer,
  SubContainerLeft,
  SubContainerRight,
  UserListContainer,
  GameContainer,
  SubUserListGameLeft,
} from './styled';
import { setCheerScore, setCheerScore2 } from '@/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';

const Main = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const isadmin = useSelector(state => state.user.isadmin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCheerScore(0, 0));
    dispatch(setCheerScore2(0, 0));
  });

  console.log('isadmin? : ' + isadmin);

  return (
    <MainContainer tableIndex="0">
      <Header />
      <SubContainer>
        <SubContainerLeft>
          <Video size={'small'} />
          <SubUserListGameLeft>
            <UserListContainer>
              <UserList />
            </UserListContainer>
            <GameContainer>
              <SelectMiniGame />
              <GameProgress />
            </GameContainer>
          </SubUserListGameLeft>
        </SubContainerLeft>
        <SubContainerRight>
          <AdminChat />
        </SubContainerRight>
      </SubContainer>
    </MainContainer>
  );
};

export default Main;
