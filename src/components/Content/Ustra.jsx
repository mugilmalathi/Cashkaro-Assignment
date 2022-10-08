import React from 'react'
import "./cards.scss"

import ustra_logo from "../Assets/Svg/ustra_logo.svg"
import ustra from "../Assets/Svg/ustra.svg"
import truck from "../Assets/Svg/truck.svg"

const Ustra = () => {
  return (
    <div className='ustra'>
      <div><img src={ustra_logo} /></div>
      <div><img src={ustra} /></div>
      <div>⚡️ Detan Cream</div>
      <div><div>₹350 ₹645</div><div>19 hours left</div></div>
      <div>15% off code + Flat 17% cashback</div>
      <div><img src={truck} /></div>
    </div>
  )
}

export default Ustra