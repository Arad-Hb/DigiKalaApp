import React from 'react'
import styles from './TableRow.module.css'
import { TiEdit } from "react-icons/ti";
import { RiDeleteBin2Line } from "react-icons/ri";
import Image from 'next/image';

const TableRow = ({data,index}) => {
  return (
        <tr>
            <td className={`${styles.column}`}>{index}</td>
            <td className={`${styles.column}`}>{data.name.substring(0, 15)}{data.name.length > 15 ? "..." : null}</td>
            <td className={`${styles.column}`}>{data.description.substring(0, 15)}{data.description.length > 15 ? "..." : null}</td>
            <td className={`${styles.column}`}>{data.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
            <td className={`${styles.column}`}>{data.priceWithDiscount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
            <td className={`${styles.column}`}>{data.stock}</td>
            <td className={`${styles.column}`}><Image alt={data.name} width={40} height={50} src={data.indexImageUrl}/> </td>
            <td className={`${styles.column}`}><TiEdit className={`${styles.icon}`}/></td>
            <td className={`${styles.column}`}><RiDeleteBin2Line className={`${styles.icon}`}/></td>
        </tr>
  )
}

export default TableRow