'use client'
import React, { useEffect, useState } from 'react'
import styles from './MegaMenuContainer.module.css'
import MegaMenuSideBar from './MegaMenuSideBar'
import MegaMenuMainContent from './MegaMenuMainContent'

const MegaMenuContainer = () => {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.sideBar}`}>{isClient && <MegaMenuSideBar key="megaMenuSideBar"/>}</div>
      <div className={`${styles.content}`}>{isClient && <MegaMenuMainContent key="megaMenuContent"/>}</div>
    </div>
  )
}

export default MegaMenuContainer