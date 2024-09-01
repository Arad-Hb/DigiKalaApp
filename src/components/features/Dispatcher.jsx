'use client'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addId } from '@/redux/features/slices/menuSlice'
import { addItem, decreaseItem, increaseItem, removeItem } from '@/redux/features/slices/shoppingCartSlice'
import { setAdminIsLogedOut } from '@/redux/features/slices/AdminSlice'


const Dispatcher = ({children,event,action,value}) => {
  const [Event, setEvent] = useState();
  const [Action, setAction] = useState();
  const [Value, setValue] = useState();

  useEffect(() => {

    setEvent(event)
    setAction(action)
    setValue(value)

  }, [event,action,value])

   const dispatch= useDispatch()
   const OnClickHandler=()=>{
    Event==='onClick' &&  dispatchHandler(Action,Value)
   }
   const OnMouseEnterHandler=()=>{
    Event==='onMouseEnter' &&  dispatchHandler(Action,Value)
   }
   const dispatchHandler=(Action,Value)=>{
    Action==='addId' && dispatch(addId(Value))
    Action==='addItem' && dispatch(addItem(Value))
    Action==='decreaseItem' && dispatch(decreaseItem(Value))
    Action==='removeItem' && dispatch(removeItem(Value))
    Action==='increaseItem' && dispatch(increaseItem(Value))
    Action==='setAdminIsLogedOut' && dispatch(setAdminIsLogedOut())
   }
  return (
    <div onClick={()=>OnClickHandler()} onMouseEnter={()=>OnMouseEnterHandler()}>{children}</div>
  )
}

export default Dispatcher