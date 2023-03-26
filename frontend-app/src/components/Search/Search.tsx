import React from 'react'
import Sprite from '../Sprite/Sprite'
import './Search.scss'

const Search = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Что вас интересует?" />
      <div className="submit-search">
        <Sprite id="search" />
      </div>
    </div>
  )
}

export default Search
