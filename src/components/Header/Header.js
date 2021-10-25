import React from "react"
import {
  HeaderContainer,
  Logo,
  ReturnButton,
  UserInfo,
  UserIcon,
} from './styled'
import CheersLogo from '@/images/logos/Cheers_logo.svg'
import { user_icon } from '@/images/etc'
import { useHistory } from "react-router"

const Header = () => {

  const history = useHistory();
  const returnToHome = () => history.replace('/');

  return (
    <HeaderContainer>
      <Logo src={CheersLogo} onClick={returnToHome} />
      <ReturnButton onClick={returnToHome} >
        Return to home
      </ReturnButton>
      <UserInfo>
        <UserIcon src={user_icon} />
        user1
      </UserInfo>
    </HeaderContainer>
  )
}

export default Header