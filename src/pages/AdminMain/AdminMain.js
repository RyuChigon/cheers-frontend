import React, { useState } from 'react';
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
import { useSelector } from 'react-redux';

const Main = () => {
  const isadmin = useSelector(state => state.user.isadmin);
  console.log('isadmin? : ' + isadmin);
  return (
    <MainContainer tableIndex="0">
      <Header />
      <SubContainer>
        <SubContainerLeft>
          <Video />
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
