'use client'
import React, { useEffect, useState } from 'react'
import styles from './CustomModule.module.css'
import UserButton from '../header/mainHeader/UserButton'
import LocationButton from '../header/mainHeader/LocationButton'
import MegaMenuButton from '../header/mainHeader/MegaMenuButton'
import AdminButton from '../adminPanel/AdminButton'


const CustomModule = ({children,button,rightPosition,leftPosition,topPosition}) => {
    const [buttonComponent,setButtonComponent]=useState()
    const [rightP,setRightP]=useState()
    const [leftP,setLeftP]=useState()
    const [topP,setTopP]=useState()
    const [display,setDisplay]=useState("none")

    useEffect(() => {
        setButtonComponent(button) 
        setRightP(rightPosition)
        setLeftP(leftPosition)
        setTopP(topPosition)
    }, [button]);
   
  const contentStyles={
    display:`${display}`,
    right:rightP,
    left:leftP,
    top:topP
    }
  return (
    <div className={`${styles.container}`}>
        <div onMouseEnter={()=>{buttonComponent==='megaMenuButton'?setDisplay("flex"):null}}
             onClick={()=>{buttonComponent==='megaMenuButton'?null:setDisplay("flex")}}>
          {buttonComponent==='userButton'?<UserButton/>:
          buttonComponent==='locationButton'?<LocationButton/>:
          buttonComponent==='megaMenuButton'?<MegaMenuButton/>:
          buttonComponent==='AdminButton'?<AdminButton/>:
          <span onMouseLeave={()=>{setDisplay("none")}} className={`${styles.button}`}>{buttonComponent}</span>}
        </div>
        <div style={contentStyles} className={`${styles.children}`} onMouseLeave={()=>{setDisplay("none")}} onClick={()=>{setDisplay("none")}}>{children}</div>
    </div>
  )
}

export default CustomModule