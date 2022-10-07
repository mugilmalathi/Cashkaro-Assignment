import React from 'react'
import "./cards.scss"

import color from "../Assets/Svg/color.svg"

const NewOnCash = () => {
  return (
    <div className='new'>
      <div>New on CashKaro</div>
      <div>We are pleased to announce that we have brought these brands on CK for you</div>
      <div><img src={color} /></div>
    </div>
  )
}

export default NewOnCash