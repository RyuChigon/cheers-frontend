import React from "react"
import { 
  InitialContainer, 
  Logo 
} from "../Initial/styled"
import GameSelector from "@/components/GameSelector"
import CheersLogo from '@/images/logos/Cheers_logo.svg'

const ChooseGame = () => {
  return (
    <InitialContainer>
      <Logo src={CheersLogo} />
      <GameSelector />
    </InitialContainer>
  )
}

export default ChooseGame