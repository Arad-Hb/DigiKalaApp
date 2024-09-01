import MainLayout from '@/components/mainLayout/MainLayout'
import React from 'react'

const layout = ({children}) => {
  return (
    <>
        <MainLayout key="searchRouteLayout">{children}</MainLayout>
    </>
  )
}

export default layout