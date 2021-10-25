import React from "react"
import { InitialContainer } from "../Initial/styled"
import { Logo } from "../ChooseGame/styled"
import CheersLogo from '@/images/logos/Cheers_logo.svg'
import CharacterSelector from "@/components/CharacterSelector"

const ChooseCharacter = () => {
  return (
    <InitialContainer>
      <Logo src={CheersLogo} />
      <CharacterSelector />
    </InitialContainer>
  )
}

export default ChooseCharacter