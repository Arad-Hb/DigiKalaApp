'use client'
import Cookies from "js-cookie"
import { useSelector } from "react-redux"

export const Authentication=()=>{
   
    const data=useSelector(state=>state.userReducer)
    const jwt=Cookies.get('jwt')
    if(jwt===undefined || jwt===null){
        return null
    }
    else{
        return data.user
    }
}
export const AdminAuthentication=()=>{
   
    const adminIsLogedIn=Cookies.get('admin')
    if(adminIsLogedIn===undefined || adminIsLogedIn===null){
        return false
    }
    else{
        return true
    }
}