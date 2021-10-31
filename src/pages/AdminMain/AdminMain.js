import React, { useState } from "react"
import Header from '@/components/Header'
import Chat from "@/components/Chat"
import SelectMiniGame from "@/components/SelectMiniGame"
import {
  MainContainer,
  CommunicationContent,
} from './styled'

const Main = () => {
  return (
    <MainContainer>
      <Header />
      <SelectMiniGame />
      <CommunicationContent>
        <Chat />
      </CommunicationContent>
    </MainContainer>
  )
}

export default Main