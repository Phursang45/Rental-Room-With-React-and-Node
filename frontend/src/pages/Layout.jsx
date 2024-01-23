import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='flex-col min-h-screen p-4'>
        <Header />
        <Outlet/>
    </div>
  )
}

export default Layout