import React from 'react'
import "./cards.scss"

import left from "../Assets/Svg/left.svg"
import right from "../Assets/Svg/right.svg"

const Card3 = () => {
  return (
    <div className='card3'>
      <div className='card3-in'>
        <div className='grad'>

          <div><img src={left} /></div>

        </div>
        <div className='grad'>

          <div><img src={left} /></div>
        
        </div>
      </div>
    </div>
  )
}

export default Card3