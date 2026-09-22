import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Carousle from '../components/Carousle'
import All from '../pages/All'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Carousle />
      < All/>
      {/* <Outlet /> */}
      <Footer />
    </div>
  )
}

export default Layout