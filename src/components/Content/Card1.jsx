import React from 'react'
import "./cards.scss"
import bar from "../Assets/Svg/bar.svg"

const Card1 = () => {
  return (
    <div className='card1'>
      <div>Hi Ayushman,</div>
      <div>₹100 Confirmed Cashback + Rewards can be earned by doing single or multiple transactions.</div>
      <div><img src={bar} /></div>
    </div>
  )
}

export default Card1