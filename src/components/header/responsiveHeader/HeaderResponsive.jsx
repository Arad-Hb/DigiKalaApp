import React from 'react'
import styles from './HeaderResponsive.module.css'
import SearchBox from '../Header/SearchBox'


const HeaderResponsive = () => {
  return (
    <div className={`${styles.outerContainer}`}><SearchBox key="responsiveHeadersSearchBox"/></div>
  )
}

export default HeaderResponsive