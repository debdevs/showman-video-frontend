import React from 'react'
import './FilterButton.css'
const FilterButton = ({button_text = "Show 5 More"}) => {
  return (
    <button className='filter_button'>
       {button_text}
    </button>
  )
}

export default FilterButton