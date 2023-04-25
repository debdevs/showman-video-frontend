import React from 'react'
import './SortButton.css'
const SortButton = ({button_text = "Show 5 More"}) => {
  return (
    <button className='sort_button'>
       {button_text}
    </button>
  )
}

export default SortButton