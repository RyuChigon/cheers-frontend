import React from 'react'
import { useHistory } from 'react-router'
import {
  InitialContainer,
  Logo,
  JoinButton
} from './styled'
import CheersLogo from '@/images/logos/Cheers_logo.svg'

const Initial = () => {
  const history = useHistory();
  const join = () => history.push('/game')

  return (
    <InitialContainer>
      <Logo src={CheersLogo} />
      <JoinButton onClick={join}>
        join
      </JoinButton>
      <JoinButton admin >
        join as admin
      </JoinButton>
    </InitialContainer>
  )
}

export default Initial
