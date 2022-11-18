import React from 'react';
import '../../../../App.css';
import './ProductCard.css';
import ProductCardButton from '../../atoms/ProductCardButton/ProductCardButton';
import ProductCardViewButton from '../../atoms/ProductCardViewButton/ProductCardViewButton';
const ProductCard = ({ title, image, template_link }) => {
  return (
    <product-basic-animation-box className="site-img">
      <product-basic-box>
        <product-basic-image-fx-container>
          <product-basic-image>
            <img
              alt=""
              className="product-basic-category-box-image"
              src={image}
            ></img>
          </product-basic-image>
          <product-basic-inset-shadow />
          <product-basic-cover-outline id="myDiv">
            <product-basic-shine />
          </product-basic-cover-outline>
        </product-basic-image-fx-container>
        <product-basic-info-container>
          <h2 className="product-title outfit">{title}</h2>
          <ProductCardViewButton button_text={'VIEW'} />
        </product-basic-info-container>
      </product-basic-box>
    </product-basic-animation-box>
  );
};

export default ProductCard;
