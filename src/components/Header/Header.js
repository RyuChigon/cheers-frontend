import React from 'react';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import {
  HeaderContainer,
  Logo,
  ReturnButton,
  UserInfo,
  UserIcon,
} from './styled';
import CheersLogo from '@/images/logos/Cheers_logo.svg';
import { user_icon } from '@/images/etc';

const Header = () => {
  const history = useHistory();
  const returnToHome = () => history.replace('/');
  const minigameone = () => history.push('/minigameone');
  const minigametwo = () => history.push('/minigame2');
  const _loginUser = useSelector(state => state.user.loginUser);

  return (
    <HeaderContainer>
      <Logo src={CheersLogo} onClick={minigameone} />
      <ReturnButton onClick={minigametwo}>minigame2</ReturnButton>
      <ReturnButton onClick={returnToHome}>Return to home</ReturnButton>
      <UserInfo>
        <UserIcon src={user_icon} />
        {_loginUser['userName']}
      </UserInfo>
    </HeaderContainer>
  );
};

export default Header;
