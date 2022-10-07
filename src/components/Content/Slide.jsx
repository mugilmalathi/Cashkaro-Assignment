import React from 'react'
import "./cards.scss"

import ajio from "../Assets/Images/ajio.png"
import amazon from "../Assets/Images/ajio.png"
import flipkart from "../Assets/Images/flipkart.png"
import meesho from "../Assets/Images/meesho.jpg"
import nykaa from "../Assets/Images/nykaa.png"
import tata from "../Assets/Images/tata.png"

const Slide = () => {

    const Images = [
        {
            id : 1,
            img : ajio
        },
        {
            id : 2,
            img : tata
        },
        {
            id : 3,
            img : nykaa
        },
        {
            id : 4,
            img : flipkart
        },
        {
            id : 5,
            img : amazon
        },
        {
            id : 6,
            img : meesho
        },
        {
            id : 7,
            img : ajio
        },
        {
            id : 8,
            img : tata
        },
        {
            id : 9,
            img : nykaa
        },
        {
            id : 10,
            img : flipkart
        },
        {
            id : 11,
            img : amazon
        },
        {
            id : 12,
            img : meesho
        },
        
    ]

  return (
    <div className='slide marquee-wrapper'>
      {
        Images.map((el)=>{
            return(
                <div className='marquee' key={el.id}>
                  <img src={el.img} />
                </div>
            )
        })
      }
    </div>
  )
}

export default Slide