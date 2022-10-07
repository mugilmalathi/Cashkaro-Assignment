import React from 'react'
import "./pre.scss"

import pre1 from "../Assets/Svg/pre1.svg"
import pre2 from "../Assets/Svg/pre2.svg"

const PreNav = () => {
  return (
    <div className='pre'>
      <div> <img src={pre1} /></div>
      <div><img src={pre2} /></div>
    </div>
  )
}

export default PreNav