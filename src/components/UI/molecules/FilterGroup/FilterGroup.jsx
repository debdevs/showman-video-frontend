import React from 'react'
import './FilterGroup.css'
import FilterChecklistItem from '../../atoms/FilterChecklistItem/FilterChecklistItem'
const FilterGroup = () => {
  return (
    <div className='filter_group_parent'>
        <FilterChecklistItem/>
        <FilterChecklistItem/>
        <FilterChecklistItem/>
        <FilterChecklistItem/>
    </div>
  )
}

export default FilterGroup