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
        }
    ]

  return (
    <div className='slide'>
      {
        Images.map((el)=>{
            return(
                <div key={el.id}>
                  <img src={el.img} />
                </div>
            )
        })
      }
    </div>
  )
}

export default Slide