import React, { useEffect } from 'react'
import { useAppContext } from '../Context/AppContext'
import { useLocation } from 'react-router-dom'

const Loading = () => {

const {navigate} = useAppContext()
let {search} = useLocation()
const query = new URLSearchParams(search)
const nextUrl = query.get('next') || 'my-orders';

useEffect(()=>{
    if(nextUrl){
        setTimeout(()=>{
            navigate(`/${nextUrl}`)
        },5000)
    }
},[nextUrl, navigate])

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='animate-spin rounded-full h-24 w-24 border-4 border-gray-300 border-t-[var(--color-primary)]'></div>
    </div>
  )
}

export default Loading
