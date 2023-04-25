import React from 'react'
import './FilterGroup.css'
import FilterChecklistItem from '../../atoms/FilterChecklistItem/FilterChecklistItem'
import FilterHeadingGroup from '../../atoms/FilterHeadingGroup/FilterHeadingGroup'
import FilterButton from '../../atoms/FilterButton/FilterButton'
const FilterGroup = ({title = "title", icon}) => {
  return (
    <div className='filter_group_parent'>
        <FilterHeadingGroup title ={title} icon ={icon}/>
        <div className='filter_items'>
        <FilterChecklistItem/>
        <FilterChecklistItem/>
        <FilterChecklistItem/>
        <FilterChecklistItem/>
        </div>
        <FilterButton/>
    </div>
  )
}

export default FilterGroup