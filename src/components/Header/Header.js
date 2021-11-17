import React from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import {
  HeaderContainer,
  Logo,
  ReturnButton,
  UserInfo,
  UserIcon,
} from './styled';
import CheersLogo from '@/images/logos/Cheers_logo.svg';
import { user_icon } from '@/images/etc';
import { setAdmin } from '@/actions/actions';

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const returnToHome = () => {
    dispatch(setAdmin(false));
    history.replace('/');
  };
  const _loginUser = useSelector(state => state.user.loginUser);

  return (
    <HeaderContainer>
      <Logo src={CheersLogo} />
      <ReturnButton onClick={returnToHome}>Return to home</ReturnButton>
      <UserInfo>
        <UserIcon src={user_icon} />
        {_loginUser['userName']}
      </UserInfo>
    </HeaderContainer>
  );
};

export default Header;
