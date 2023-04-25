import React from 'react'
import './FiltersContainer.css'
import FilterGroup from '../../molecules/FilterGroup/FilterGroup'
import {ReactComponent as StyleTag} from '../../../../assets/images/MdStyleAccent.svg'
const FiltersContainer = () => {
  return (
    <div className='filters_container_parent'>
        <FilterGroup title = "Category"/>
        <FilterGroup title='Style' icon = {<StyleTag/>}/>
    </div>
  )
}

export default FiltersContainer