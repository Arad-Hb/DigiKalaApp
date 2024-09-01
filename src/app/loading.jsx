import Loading from '@/components/features/Loading'
import { GetID } from '@/repository/GetID'
import React from 'react'

const loading = () => {
  return (
    <Loading key={GetID()}/>
  )
}

export default loading