import React from 'react'
import "./cards.scss"

import delsey from "../Assets/Svg/delsey.svg"

const Trending = () => {
  return (
    <div className='trend'>
      <div>TRENDING</div>
      <div>Some of the most popular things people have been searching for on CashKaro</div>
      <div>
        <div>50% off sitewide on Myntra</div>
        <div>50% + 25% offcode on Khadi Essentials</div>
        <div>Sitewide sale, flat 20% off + 20% off code</div>
        <div>Espresso body wash by mCaffeine</div>
        <div>10% off sitewide on H&M</div>
      </div>
      <div><img src={delsey} /></div>
    </div>
  )
}

export default Trending