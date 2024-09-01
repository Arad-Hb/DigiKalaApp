import React from 'react'
import styles from './SideBar.module.css'
import NavLink from '../features/NavLink'
import { TbLayoutDashboard } from "react-icons/tb";
import { PiShoppingCart } from "react-icons/pi";
import { TbShoppingBagPlus } from "react-icons/tb";
import { AiOutlineSetting } from "react-icons/ai";
import { CgUserList } from "react-icons/cg";
import { TbRosetteDiscount } from "react-icons/tb";
import { RiArticleLine } from "react-icons/ri";
import { GrPieChart } from "react-icons/gr"

const SideBar = () => {
  const data=[
    {name:"خانه", Icon:TbLayoutDashboard ,id:100,url:'/'},
    {name:"محصولات", Icon: TbShoppingBagPlus,id:101,url:'products'},
    {name:"مشتری ها", Icon:CgUserList ,id:102,url:'/'},
    {name:"سفارش ها", Icon: PiShoppingCart,id:103,url:'/'},
    {name:"تخفیف ها", Icon: TbRosetteDiscount,id:104,url:'/'},
    {name:"مقالات ", Icon: RiArticleLine,id:105,url:'/'},
    {name:"چارت ها ", Icon: GrPieChart,id:106,url:'/'},
    {name:"تنظیمات", Icon:AiOutlineSetting ,id:107,url:'/'}
  ]
  const GetID=()=>{
    return crypto.randomUUID()
  }
  return (
    <div className={`${styles.container}`}>
      {
        data.map(item=>{
          const { name, Icon , url,id} = item;
          return(
          <NavLink url={`/admin/dashboard/${url}`} key={GetID()}>
            <div className={`${styles.item}`}>
              <span className={`${styles.icon}`}><Icon/></span>
              <span className={`${styles.name}`}>{name}</span>
            </div>
          </NavLink>
          )
        })
      }
       
          
        
    </div>
  )
}

export default SideBar