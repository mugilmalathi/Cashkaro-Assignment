import React from 'react'
import "./nav.scss"
import logo from "../Assets/Svg/logo.svg"
import refer from "../Assets/Svg/refer.svg"


const Navbar = () => {
  return (
    <div className='nav'>
      <div> <img src={logo} /></div>
      <div><img src={refer} /></div>
    </div>
  )
}

export default Navbar