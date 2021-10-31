import React from "react"
import { 
  InitialContainer, 
} from "../Initial/styled"
import {
  Logo,
} from './styled'
import AdminGameSelector from "@/components/AdminGameSelector"
import CheersLogo from '@/images/logos/Cheers_logo.svg'

const AdminChooseGame = () => {
  return (
    <InitialContainer>
      <Logo src={CheersLogo} />
      <AdminGameSelector />
    </InitialContainer>
  )
}

export default AdminChooseGame