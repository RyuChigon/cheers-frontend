import React from 'react'
import {
  InitialContainer,
  Logo,
  JoinButton
} from './styled'
import CheersLogo from '@/images/logos/Cheers_logo.svg'

const Initial = () => {
  return (
    <InitialContainer>
      <Logo src={CheersLogo} />
      <JoinButton>
        join
      </JoinButton>
      <JoinButton admin >
        join as admin
      </JoinButton>
    </InitialContainer>
  )
}

export default Initial
