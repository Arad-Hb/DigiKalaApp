import Profile from '@/components/authuntication/Profile'
import MainLayout from '@/components/mainLayout/MainLayout'
import React from 'react'

const index = () => {
  return (
    <>
    <MainLayout key="userRouteLayoute">
      <Profile key="userRouteProfile"/>
    </MainLayout>
    </>
  )
}

export default index