import React from 'react'
import './FilterHeadingGroup.css'
import {ReactComponent as AccentTag} from '../../../../assets/images/BsTagsFillAccent.svg'
const FilterHeadingGroup = ({title= "Category", icon = <AccentTag/>}) => {
  return (
    <div className='filter_heading_group_parent'>    
        {icon}
        <h1>{title}</h1>
    </div>
  )
}

export default FilterHeadingGroup