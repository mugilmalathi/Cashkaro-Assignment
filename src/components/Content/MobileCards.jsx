import React from 'react'
import "./cards.scss"

import mob1 from "../Assets/Svg/mobile1.svg"
import mob2 from "../Assets/Svg/mobile2.svg"
import mob3 from "../Assets/Svg/mobile3.svg"
import mob4 from "../Assets/Svg/mobile4.svg"
import mob5 from "../Assets/Svg/mobile5.svg"
import mob6 from "../Assets/Svg/mobile6.svg"

const MobileCards = () => {

    const Data = [
        {
            img: mob1,
            text1: "Apple iPhone 13",
            text2:"8% Cashback"
        },
        {
            img: mob2,
            text1: "OPPO F17",
            text2:"12% Cashback"
        },
        {
            img: mob3,
            text1: "Galaxy A23",
            text2:"3% Cashback"
        },
        {
            img: mob4,
            text1: "One+ Nord 5G",
            text2:"8% Cashback"
        },
        {
            img: mob5,
            text1: "Samsung S22 Ultra",
            text2:"12% Cashback"
        },
        {
            img: mob6,
            text1: "OPPO F21",
            text2:"3% Cashback"
        }
    ]

  return (
    <div className='mobile'>
      <div>BEST SELLERS: MOBILES</div>
      <div>We bring you the best brands that we think will bring great value to your life.</div>
      <div>
        {
            Data.map((el)=>{
                return(
                    <div>
                    <img src={el.img} />
                    <div>{el.text1}</div>
                    <div>{el.text2}</div>
                    </div>
                )
            })
        }
      </div>
      <div>View More --></div>
    </div>
  )
}

export default MobileCards