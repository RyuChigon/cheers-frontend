import React, { useState } from "react"
import Header from '@/components/Header'
import Chat from "@/components/Chat"
import SelectMiniGame from "@/components/SelectMiniGame"
import UserList from "@/components/UserList"
import {
  MainContainer,
  CommunicationContent,
} from './styled'

const Main = () => {
  return (
    <MainContainer>
      <Header />
      <SelectMiniGame />
      <UserList />
      <CommunicationContent>
        <Chat />
      </CommunicationContent>
    </MainContainer>
  )
}

export default Main