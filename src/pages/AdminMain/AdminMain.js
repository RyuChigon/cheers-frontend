import React, { useState } from 'react';
import Header from '@/components/Header';
import AdminChat from '@/components/AdminChat';
import SelectMiniGame from '@/components/SelectMiniGame';
import UserList from '@/components/UserList';
import GameProgress from '@/components/GameProgress';
import AdminView from '@/components/AdminView';
import {
  MainContainer,
  SubContainer,
  SubContainerLeft,
  SubContainerRight,
  ViewContainer,
  FuncContainer,
  FuncContainerLeft,
  FuncContainerRight,
} from './styled';

const Main = () => {
  return (
    <MainContainer>
      <Header />
      <SubContainer>
        <SubContainerLeft>
          <ViewContainer>
            <AdminView />
          </ViewContainer>
          <FuncContainer>
            <FuncContainerLeft>
              <UserList />
            </FuncContainerLeft>
            <FuncContainerRight>
              <SelectMiniGame />
              <GameProgress />
            </FuncContainerRight>
          </FuncContainer>
        </SubContainerLeft>
        <SubContainerRight>
          <AdminChat />
        </SubContainerRight>
      </SubContainer>
    </MainContainer>
  );
};

export default Main;
