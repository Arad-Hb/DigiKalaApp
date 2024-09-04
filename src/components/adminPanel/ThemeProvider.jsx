'use client'
import React, { useEffect, useState } from 'react'
import styles from './ThemeProvider.module.css'
import Header from './Header'
import SideBar from './SideBar'
import AdminLogInForm from './AdminLogInForm'
import { useSelector } from 'react-redux'

const ThemeProvider = ({children}) => {
    const [adminIsLogedIn,setAdminIsLogedIn]=useState(false)
    const adminState=useSelector(state=>state.adminReducer)
    useEffect(() => {
      setAdminIsLogedIn(adminState.isLogedIn)  
}, [adminState]);   
  return (
    <> 
       {adminIsLogedIn? <div className={`${styles.container}`}>
          <div className={`${styles.header}`}><Header key="adminPanelsLayoutHeader"/></div>
          <div className={`${styles.content}`}>
            <div className={`${styles.sideBar}`}><SideBar key="adminPanelsLayoutSideBar"/></div>
            <div className={`${styles.Children}`}>{children}</div>
          </div>
        </div>:
        <AdminLogInForm key="adminPanelLoginInLandingRoute"/>}
    </>
)
}

export default ThemeProvider