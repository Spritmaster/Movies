import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const Homelayout = () => {
  return (
    <div className='flex flex-col h-[100%]'>
    <Header/>
        <main className='grow-1'>
        <Outlet/>
        </main>
    </div>
  )
}

export default Homelayout