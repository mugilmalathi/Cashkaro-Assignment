import React from 'react'
import "./footer.scss"

import up from "../Assets/Svg/thumbs_up.svg"
import down from "../Assets/Svg/thumbs_down.svg"

const Footer = () => {
  return (
    <div className='footer'>
      <div>Is this offer useful?</div>
      <div><img src={down} /></div>
      <div><img src={up} /></div>
      <div></div>
    </div>
  )
}

export default Footer