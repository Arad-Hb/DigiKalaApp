import styles from "./page.module.css";
import IncredibleOffers from "@/components/carousels/IncredibleOffers";
import SmallBanner from "@/components/advertise/SmallBanner";
import LargeBanner from "@/components/advertise/LargeBanner";
import SingleBanner from "@/components/advertise/SingleBanner";
import DigiIcons from "@/components/sevenIcons/DigiIcons";
import CategoriesItems from "@/components/categorieItems/CategoriesItems";
import MainSlider from "@/components/slider/MainSlider";
import BrandsCarousel from "@/components/carousels/BrandsCarousel";
import { getData } from "@/serverActions/getData";
import MainLayout from "@/components/mainLayout/MainLayout";
import FooterResponsiveContent from "@/components/footer/responsiveFooter/FooterResponsiveContent";
import { GetID } from "@/repository/GetID";



export default async function Home() {
  const data=await getData("public/mainSlider")
  
  return (
    <div className={`${styles.outerContainer}`}> 
    <MainLayout key={GetID()}>
      <div><MainSlider value={data}/></div>
      <div><CategoriesItems/></div>
      <div><SingleBanner/></div>
      <div><DigiIcons/></div>
      <div><SmallBanner/></div>
      <div><IncredibleOffers/></div>
      <div><LargeBanner/></div>
      <div><BrandsCarousel/></div>
      <div className={`${styles.FooterResponsiveContent}`}><FooterResponsiveContent/></div>
    </MainLayout>
    </div>
  );
}
