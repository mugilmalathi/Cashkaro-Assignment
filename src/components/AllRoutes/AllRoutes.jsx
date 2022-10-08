import React from 'react'
import { Route, Routes } from 'react-router'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default AllRoutes