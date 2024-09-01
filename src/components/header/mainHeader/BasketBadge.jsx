'use client'
import React, { useEffect, useState } from 'react'
import styles from './BasketBadge.module.css'
import { useSelector } from 'react-redux'

const BasketBadge = () => {
  
  const [count, setCount] = useState();
  const state=useSelector(store=>store.shoppingReducer)

  useEffect(() => {
    
    setCount(state.totalCount)
  }, [state])

  return (
    <div>
    {
      count!==0?<div className={`${styles.badgeContainer}`}>{count}</div>:null
    }
    </div>
  )
}

export default BasketBadge