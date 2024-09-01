import React from 'react'
import styles from './DecrementButton.module.css'
import { HiMinus } from "react-icons/hi"
import Dispatcher from '../features/Dispatcher'

const DecrementButton = ({product}) => {
   
  return (
    <Dispatcher event={'onClick'} action={'decreaseItem'} value={product.id} key={product.id}>
      <button className={`${styles.counterButton}`}><HiMinus /></button>
    </Dispatcher>
    
  )
}

export default DecrementButton