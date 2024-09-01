import React from 'react'
import styles from './BasketButton.module.css'
import BasketBadge from './BasketBadge'
import { RiShoppingCartLine } from 'react-icons/ri'
import NavLink from '@/components/features/NavLink'


const BasketButton = () => {
  
  return (
        <>
        <NavLink url={'/shoppingCard'} key="BasketButtonLink">
          <div className={`${styles.basketButton}`}>
            <div className={`${styles.basketIcon}`}><RiShoppingCartLine  className={`${styles.icon}`}/></div>
            <div className={`${styles.badge}`}><BasketBadge key="BasketButtonsBadge"/></div>
          </div>
        </NavLink>
        </>
    
  )
}

export default BasketButton