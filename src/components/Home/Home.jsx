import React from 'react'
import Card1 from '../Content/Card1'
import Card2 from '../Content/Card2'
import Card3 from '../Content/Card3'
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

      <Card2 />

      <Card3 />
      
    </div>
  )
}

export default Home