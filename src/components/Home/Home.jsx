import React from 'react'
import Brand from '../Content/Brand'
import Card1 from '../Content/Card1'
import Card2 from '../Content/Card2'
import Card3 from '../Content/Card3'
import MobileCards from '../Content/MobileCards'
import NewOnCash from '../Content/NewOnCash'
import Offer from '../Content/Offer'
import Slide from '../Content/Slide'
import Trending from '../Content/Trending'
import Ustra from '../Content/Ustra'
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

      <Card2 />

      <Card3 />

      <Brand />

      <NewOnCash />

      <Offer />

      <Trending />

      <MobileCards />

      <Ustra />
      
    </div>
  )
}

export default Home