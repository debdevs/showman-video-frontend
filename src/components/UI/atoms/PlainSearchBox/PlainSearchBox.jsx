import React from 'react'
import './PlainSearchBox.css'
import { BsSearch } from 'react-icons/bs'
const PlainSearchBox = () => {
  return (
    <div className='plain_search_box_container'>
       <input type='search' placeholder={"search all templates"}></input>
       <BsSearch className='plain_search_box_icon'/>
    </div>
  )
}

export default PlainSearchBox