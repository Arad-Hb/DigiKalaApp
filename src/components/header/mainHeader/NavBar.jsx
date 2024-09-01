import React from 'react'
import styles from './NavBar.module.css'
import NavLink from '@/components/features/NavLink'
import {RiCoupon3Line, RiDiscountPercentLine, RiFireLine, RiShoppingBasketLine } from "react-icons/ri"
import { MdCardGiftcard } from "react-icons/md"
import { GrPhoneVertical } from "react-icons/gr"


const NavBar = () => {
    const navItems=[
        {id:400,title:'شگفت انگیزها', Icon:RiDiscountPercentLine,style:styles.navItem,url:'/products/incredibleOffers'},
        {id:401,title:'سوپر مارکت', Icon:RiShoppingBasketLine,style:styles.navItem,url:'/contactUs/5'},
        {id:402,title:'کارت هدیه', Icon:MdCardGiftcard,style:styles.navItem,url:'/contactUs/4'},
        {id:403,title:'پرفروش ترین ها', Icon:RiFireLine,style:styles.navItemResponsive,url:'/'},
        {id:404,title:'تخفیف ها و پیشنهادها', Icon:RiCoupon3Line,style:styles.navItemResponsive,url:'/contactUs/4'},
        {id:405,title:'در دیجی کالا بفروشید!', Icon:GrPhoneVertical,style:styles.navItem,url:'/contactUs/10'},
        {id:406,title:'سوالی دارید؟', Icon:GrPhoneVertical,style:styles.navItem,url:'/contactUs/form'}
    ]
    
  return (
<>
    <ul className={styles.navItems}>
    {
        navItems.map(item=>{
            const {id,title , Icon , style, url} = item;
            return(
        <NavLink url={url} key={id}>
            <li className={style} key={title}>
                <Icon className={styles.navItemIcon}/>
                <span className={styles.navItemText}>{title}</span>
            </li>
        </NavLink>
                )
        })
    }
    </ul>
</>
  )
}

export default NavBar