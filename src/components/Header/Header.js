import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import {
  HeaderContainer,
  Logo,
  ReturnButton,
  UserInfo,
  UserIcon,
  HeaderMember,
} from './styled';
import CheersLogo from '@/images/logos/Cheers_logo.svg';
import { user_icon } from '@/images/etc';
import { setAdmin } from '@/actions/actions';
import NoticePopupHeader from '@/components/NoticePopupHeader';

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const history = useHistory();
  const dispatch = useDispatch();
  const returnToHome = () => {
    openModal();
  };
  const _loginUser = useSelector(state => state.user.loginUser);
  const _isAdmin = useSelector(state => state.user.isadmin);

  return (
    <HeaderContainer>
      {modalVisible && (
        <NoticePopupHeader
          visible={modalVisible}
          closable={true}
          maskClosable={true}
          onClose={closeModal}
        >
          <div>Do you want to logout?</div>
        </NoticePopupHeader>
      )}
      <Logo src={CheersLogo} />
      <HeaderMember>
        <ReturnButton onClick={returnToHome}>Return to home</ReturnButton>
        {!_isAdmin && (
          <UserInfo>
            <UserIcon src={user_icon} />
            {_loginUser['userName']}
          </UserInfo>
        )}
      </HeaderMember>
    </HeaderContainer>
  );
};

export default Header;
