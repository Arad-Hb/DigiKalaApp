'use client'
import React, { useEffect, useState } from 'react'
import SignUpButton from './SignUpButton'
import { Authentication } from '@/repository/Authentication'
import CustomModule from '@/components/features/CustomModule'
import UserInfo from './UserInfo'

const SetUserButton = () => {
  const [isClient, setIsClient] = useState(false)
  const isAuthenticated=Authentication()
  useEffect(() => {
    
    setIsClient(isAuthenticated)
    
  }, [isAuthenticated])


  return (
    <>
      {isClient?
      <CustomModule button={'userButton'} leftPosition={100} topPosition={40} key="userButtonCustomModule">
        <UserInfo user={isClient} key="userButtonInformations"/>
      </CustomModule>:
      <SignUpButton key="userButtonSignUp"/>}
    </>
  )
}

export default SetUserButton