import React from 'react'
import './ProductPriceDisplay.css'
import {ReactComponent as PriceTag} from '../../../../assets/images/BsTagsFill.svg'
const ProductPriceDisplay = ({price = "$5", icon}) => {
  return (
    <div className='product_price_display_parent'>
        
        <PriceTag/>
        <p className='price_display'>{price}</p>

    </div>
  )
}

export default ProductPriceDisplay