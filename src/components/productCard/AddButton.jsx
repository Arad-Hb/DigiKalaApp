'use client'
import React, { useEffect, useState } from 'react'
import styles from './AddButton.module.css'
import Counter from './Counter';
import Dispatcher from '../features/Dispatcher';
import { useSelector } from 'react-redux';


const AddButton = ({product}) => {

  const shoppingCardState=useSelector(state=>state.shoppingReducer)
  const [Product,setProduct]=useState({})
    useEffect(() => {

      setProduct(product)
  
    }, [product])

    const GetID=()=>{
      return crypto.randomUUID()
    }
   
  return (
    <div className={`${styles.buttonContainer}`}>
      {
            shoppingCardState.items.find(item=>item.id===Product.id)?<Counter product={Product} shoppingCardState={shoppingCardState} key={GetID()}/>:
            <Dispatcher event={'onClick'} action={'addItem'} value={Product} key={Product.id}>
              <span className={`${styles.button}`}>+</span>
            </Dispatcher>
        } 
    </div>
  )
}

export default AddButton