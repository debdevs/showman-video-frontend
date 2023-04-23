import React from 'react';
import '../../../../App.css';
import './ProductCard.css';
import ProductCardButton from '../../atoms/ProductCardButton/ProductCardButton';
import ProductCardViewButton from '../../atoms/ProductCardViewButton/ProductCardViewButton';
import ImageFXElement from '../../atoms/ImageFXElement/ImageFXElement';
import ProductRatingDisplay from '../../atoms/ProductRatingDisplay/ProductRatingDisplay';
import ProductPriceDisplay from '../../atoms/ProductPriceDisplay/ProductPriceDisplay';
const ProductCard = ({ title, image, template_link }) => {
  return (
    < div className="vertical_product_display_card_background_animation">
      <div className='product_basic_box'>
        <div className = 'product_basic_image_fx_container'>
          <div className='product_basic_image'>
            <img
              alt=""
              className="product-basic-category-box-image"
              src={image}
            />
          </div>
          <div className='product_basic_inset_shadow'/>
          <div className='product_basic_cover_outline' product_basic_cover_outline id="myDiv">
            <product-basic-shine />
          </div>
        </div>
        <div className='product_basic_info_container' >
          <div className='vertical_product_display_card_info_contents'>
            <div className='left_items'>
            <ImageFXElement image={image}/>
            </div>
            <div className='right_items'>
              <div className='top_texts'>
                <h2 className="product_title outfit">{title}</h2>
                <h2 className="product_crumbs outfit">{"social ∙ overlay"}</h2>
              </div>
              <div className='bottom_row'>
                <ProductPriceDisplay/>
                <ProductRatingDisplay/>
              </div>
              
              <ProductCardViewButton button_text={'VIEW'} />
            </div>
            
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
