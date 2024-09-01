import Home from '@/components/adminPanel/Home'
import { getData } from '@/serverActions/getData'
import React from 'react'

const SetArreyCount=(arrey)=>{
      let count = 0;
      for (let i = 0; i < arrey.length; i++) {count++;}
      return count; 
}

const page = async() => {
  
  const productsData = await getData("products")
  const productsLength=SetArreyCount(productsData)
  
  return (
    <Home productsCout={productsLength} key="adminPanelsHomeComonent"/>
  )
}

export default page