import React from 'react'
import styles from './Header.module.css'
import Image from 'next/image'
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div className={`${styles.container}`}>
        <div className={`${styles.burgerIcon}`}><GiHamburgerMenu /></div>
        <div className={`${styles.title}`}>
            <Image alt='red smile' width={32} height={12} src={'/images/smileRed.svg'}/>
            <span className={`${styles.text}`}>درباره گروه دیجی‌کالا</span>
        </div>
        <div className={`${styles.navBar}`}>
            <div className={`${styles.navBarItems}`}>
                <span className={`${styles.navBarItem}`}>درباره ما</span>
                <span className={`${styles.navBarItem}`}>کسب و کار ما</span>
                <span className={`${styles.navBarItem}`}>اخبار و منابع</span>
                <span className={`${styles.navBarItem}`}>گزارش سال دیجی کالا</span>
                <span className={`${styles.navBarItem}`}>بلاگ ها</span>
            </div>
        </div>
    </div>
  )
}

export default Header