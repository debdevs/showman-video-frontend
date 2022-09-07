import React from 'react'
import BasicButton from '../../atoms/BasicButton/BasicButton'
import '../../../../App.css';
import'./HomeSearchBox.css'
const HomeSearchBox = () => {
  return (
    <parent-container>
    <input className='search-input'></input>
    <BasicButton/>
    </parent-container>
  )
}

export default HomeSearchBox