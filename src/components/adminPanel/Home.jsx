'use client'
import React from 'react'
import styles from './Home.module.css'
import { PiShoppingCart } from "react-icons/pi";
import { TbShoppingBagPlus } from "react-icons/tb";
import { CgUserList } from "react-icons/cg";
import { useSelector } from 'react-redux';
import Counter from '../animation/Counter';
import Chart from './Chart';

const Home = ({productsCout}) => {
    
    const orders=useSelector(state=>state.shoppingReducer)

    const data=[
        {name:"محصولات", Icon: TbShoppingBagPlus,count:productsCout},
        {name:"مشتری ها", Icon:CgUserList,count:140},
        {name:"سفارش ها", Icon: PiShoppingCart,count:orders.totalCount}
      ]
      const GetID=()=>{
        return crypto.randomUUID()
      }
  return (
    <div className={`${styles.container}`}>
        <div className={`${styles.items}`}>
           {
            data.map((item)=>{
                const { name, Icon,count} = item;
                return(
            <div className={`${styles.item}`} key={GetID()}>
                <div className={`${styles.itemName}`}>
                    <span className={`${styles.icon}`}><Icon/></span>
                    <span className={`${styles.name}`}>{name}</span>
                </div>
                <div className={`${styles.itemCount}`}><Counter number={count} key={GetID()}/></div>
            </div>)})
           } 
        </div>
        <div className={`${styles.charts}`}><Chart key={GetID()}/></div>
    </div>
  )
}

export default Home