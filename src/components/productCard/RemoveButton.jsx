import React from 'react'
import { GoTrash } from "react-icons/go"
import styles from './RemoveButton.module.css'
import Dispatcher from '../features/Dispatcher'

const RemoveButton = ({product}) => {

  return (
    <Dispatcher event={'onClick'} action={'removeItem'} value={product.id} key={product.id}>
        <button className={`${styles.counterButton}`}><GoTrash /></button>
    </Dispatcher>
  )
}

export default RemoveButton