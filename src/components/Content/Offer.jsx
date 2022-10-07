import React from 'react'
import "./cards.scss"

import SimpleImageSlider from "react-simple-image-slider"

import slide from "../Assets/Svg/slide.svg"

const Offer = () => {

    const images = [
        { url: slide },
        { url: slide },
        { url: slide },
        { url: slide },
        { url: slide },
        { url: slide },
        { url: slide },
      ];

  return (
    <div className='offer'>
       <div>OFFER/STORIES </div>
       <div>Offers that you can’t miss. This is a sample text that should explain the offers.</div>
       <div>
        <SimpleImageSlider
            width={300}
            height={500}
            images={images}
            showBullets={true}
            showNavs={true}
        />
       </div>
    </div>
  )
}

export default Offer