import Card from '@/components/productCard/Card'
import { GetID } from '@/repository/GetID'
import { getData } from '@/serverActions/getData'
import React from 'react'

const page = async() => {
    const data = await getData("products")
  return (
    <div>
        {
            data.map(item=>{
                return<Card product={item} key={`singleProductRoute${item.id}`}/>
            })
        }
    </div>
  )
}

export default page