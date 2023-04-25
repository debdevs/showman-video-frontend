import React from 'react'
import './FilterChecklistItem.css'
const FilterChecklistItem = ({title = "Social Media Default", number = '2', id = "checkbox_item"}) => {
  return (
 
        <label class="filter_check_list_item_parent">
        <input type="checkbox" name="checkbox" id = 'check'/>
        <h1>
        {title}
        </h1>
        <h2>
        {number}
        </h2>
       
        </label>


  )
}

export default FilterChecklistItem