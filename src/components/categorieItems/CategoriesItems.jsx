import React from 'react'
import styles from './CategoriesItems.module.css'
import Data from '../../../files/menuData.json'
import Image from 'next/image'


const CategoriesItems = () => {
    const data=Data[0]
  return (
    <div className={`${styles.outerContainer}`}>
        <div className={`${styles.title}`}>خرید بر اساس دسته بندی</div>
        <div className={`${styles.itemsContainer}`}>
        {
        data.sideNav.map(item=>{
        return<div className={`${styles.itemLink}`}>
                  <div className={`${styles.item}`}>
                    <Image className={`${styles.itemImage}`} src={item.imageUrl} width={100} height={100} alt={item.imageUrl}/>
                    <span className={`${styles.itemText}`}>{item.name}</span>
                  </div>
              </div>
            })
        }
        </div>
    </div>
  )
}

export default CategoriesItems