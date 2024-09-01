'use client'
import React, { useEffect, useState } from 'react'
import styles from './CustomDropDown.module.css'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const CustomDropDown = ({children,title,content}) => {
    const [display,setDisplay]=useState(false)
    const [Title,setTitle]=useState()
    const [Content,setContent]=useState(false)
    useEffect(() => {

      setTitle(title)
      setContent(content)
  
    }, [title,content])
    
  return (
    <div className={`${styles.container}`}>
        <div className={`${styles.dropDownTitle}`}>
            <div onClick={()=>setDisplay(!display)} className={`${styles.dropDownLink}`}>
                <div className={`${styles.title}`}>{Title}</div>
                <div className={`${styles.icon}`}>{display ? <IoIosArrowUp />:<IoIosArrowDown />}</div>
            </div>
        </div>
        {display && 
          <div className={`${styles.dropDownContent}`}>
          { Content?<span>{Content}</span>:
                    <span>{children}</span>
          }
          </div>}
    </div>
  )
}

export default CustomDropDown