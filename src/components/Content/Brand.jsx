import React from 'react'
import "./cards.scss"

import one from "../Assets/Svg/one.svg"
import two from "../Assets/Svg/two.svg"
import three from "../Assets/Svg/three.svg"
import four from "../Assets/Svg/four.svg"

const Brand = () => {

    const Data = [
        {
            img: one,
            text1: "Earn upto ",
            text2:"10%",
            text3:" Rewards"
        },
        {
            img: two,
            text1: "Earn upto ",
            text2:"22.5%",
            text3:" Cashback"
        },
        {
            img: three,
            text1: "Earn upto ",
            text2:"10%",
            text3:" Rewards"
        },
        {
            img: four,
            text1: "Earn upto ",
            text2:"8%",
            text3:" Rewards"
        }
    ]

  return (
    <div className='brand'>
      <div>The flash prices are calculated based on the number of existing discount codes applied. You may find price difference if all available codes are not applied.</div>
      <div>Continue Browsing</div>
      <div>Brands you viewed recently and every new thing about them</div>
      <div className='card-logo'>
        {
            Data.map((el)=>{
                return(
                    <div className='twocard'>
                      <div>
                        <img src={el.img} />
                      </div>
                      <div>
                        <div>
                          <div>{el.text1}</div>
                          <div>{el.text2}</div>
                          <div>{el.text3}</div>
                        </div>
                      </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Brand