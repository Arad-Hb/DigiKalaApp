import React from 'react'
import styles from './FooterResponsiveContent.module.css'
import TitleLogo from '../mainFooter/TitleLogo'
import JumpToTopButton from '../footersHooks/JumpToTopButton'
import CustomDropDown from '@/components/features/CustomDropDown'
import AboutUs from '../mainFooter/AboutUs'
import CustomerServices from '../mainFooter/CustomerServices'
import OrderGuidance from '../mainFooter/OrderGuidance'
import Introduction from '../mainFooter/Introduction'


const FooterResponsiveContent = () => {
  return (
    <div className={`${styles.outerContainer}`}>
        <div className={`${styles.responsiveHeader}`}>
            <div className={`${styles.logo}`}><TitleLogo key="titleLogoForResponsive"/></div>
            <div className={`${styles.upButton}`}><JumpToTopButton key="jumpToTopButtonForResponsive"/></div>
        </div>
        <div className={`${styles.responsiveMain}`}>
          <div className={`${styles.items}`}>
            <div className={`${styles.item}`}>
              <CustomDropDown title={'با دیجی کالا'} key="responsiveFootersWithUsDropDown">
                <AboutUs key="responsiveFootersWithUs"/>
              </CustomDropDown>
            </div>
            <div className={`${styles.item}`}>
              <CustomDropDown title={'خدمات مشتریان'} key="responsiveFootersCustomerServicesDropDown">
                <CustomerServices key="responsiveFootersCustomerServices"/>
              </CustomDropDown>
            </div>
            <div className={`${styles.item}`}>
              <CustomDropDown title={'راهنمای خرید از دیجی کالا'} key="responsiveFootersOrderGuidenceDropDown">
                <OrderGuidance key="responsiveFootersOrderGuidence"/>
              </CustomDropDown>
            </div>
          </div>
        </div>
        <div className={`${styles.responsiveFooter}`}>
            <div className={`${styles.introduction}`}><Introduction key="responsiveFootersIntroduction"/></div>
        </div>
    </div>
  )
}

export default FooterResponsiveContent