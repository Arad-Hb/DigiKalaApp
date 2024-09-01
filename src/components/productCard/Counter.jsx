import React from 'react'
import styles from './Counter.module.css'
import RemoveButton from './RemoveButton'
import IncrementButton from './IncrementButton'
import DecrementButton from './DecrementButton'

const Counter = ({product,shoppingCardState}) => {
  const GetID=()=>{
    return crypto.randomUUID()
  }
 
  return (
    <div className={`${styles.counterContainer}`}>
        <IncrementButton product={product} key={GetID()}/>
        <label className={`${styles.counterLabel}`} >{shoppingCardState.items.filter(item=>item.id===product.id)[0].count}</label>
        {
          shoppingCardState.items.filter(item=>item.id===product.id)[0].count===1?<RemoveButton product={product} key={GetID()}/>:<DecrementButton product={product} key={GetID()}/>
        }
    </div>
  )
}


export default Counter
