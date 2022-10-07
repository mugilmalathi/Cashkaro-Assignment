import React from 'react'
import "./search.scss"

import search from "../Assets/Svg/search.svg"

const Search = () => {
    return (
        <div className='search'>
            <div className='search-in'>
              <div><img src={search} /></div>
              <div></div>
            </div>
        </div>
    )
}

export default Search