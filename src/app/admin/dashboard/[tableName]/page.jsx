import CustomTable from '@/components/adminPanel/CustomTable'
import React from 'react'

const getProducts=async(url)=>{
  const response = await fetch(`http://80.75.14.90:9090/${url}`,{next:{revalidate:7000,tags:["adminTableproducts"]}})
    if (!response.ok) {
       return console.log("error")
    }
    else {
        const data = await response.json()
        return data
    }
}

const page = async(props) => {
    const url=props.params.tableName
    const itemData=await getProducts(url)
  return <div style={{marginTop:"5px",display:"flex",width:"100%",justifyContent:"center",overflowX:"scroll",overflowX:"scroll",backgroundColor:"#f2f2f2"}}>
    <CustomTable item={itemData} key="adminPanelProductTable"/>
    </div>
}

export default page