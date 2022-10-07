import React from 'react'
import Card1 from '../Content/Card1'
import Slide from '../Content/Slide'
import Navbar from '../Navbar/Navbar'
import PreNav from '../PreNav/PreNav'
import Search from '../Search/Search'
import "./Home.scss"

const Home = () => {
  return (
    <div className='home'>

      <PreNav />

      <Navbar />

      <Search />

      <Card1 />

      <Slide />
      
    </div>
  )
}

export default Home