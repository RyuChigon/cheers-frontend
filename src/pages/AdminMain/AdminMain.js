import React, { useState } from 'react';
import Header from '@/components/Header';
import AdminChat from '@/components/AdminChat';
import SelectMiniGame from '@/components/SelectMiniGame';
import UserList from '@/components/UserList';
import GameProgress from '@/components/GameProgress';
import {
  MainContainer,
  SubContainer,
  SubContainerLeft,
  SubContainerRight,
  UserListContainer,
  GameContainer,
} from './styled';

const Main = () => {
  return (
    <MainContainer tableIndex="0">
      <Header />
      <SubContainer>
        <SubContainerLeft>
          <UserListContainer>
            <UserList />
          </UserListContainer>
          <GameContainer>
            <SelectMiniGame />
            <GameProgress />
          </GameContainer>
        </SubContainerLeft>
        <SubContainerRight>
          <AdminChat />
        </SubContainerRight>
      </SubContainer>
    </MainContainer>
  );
};

export default Main;
