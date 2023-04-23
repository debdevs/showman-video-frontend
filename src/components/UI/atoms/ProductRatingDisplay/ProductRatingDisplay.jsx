import React from 'react'
import './ProductRatingDisplay.css'
import {ReactComponent as RatingStar} from '../../../../assets/images/MdStars.svg'
const ProductRatingDisplay = ({rating = "4.6/5", icon}) => {
  return (
    <div className='product_rating_display_parent'>
        
        <RatingStar/>
        <p className='rating_display'>{rating}</p>

    </div>
  )
}

export default ProductRatingDisplay