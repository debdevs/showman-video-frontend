import React from 'react';
import '../../../../App.css';
import './ProductCard.css';
import ProductCardButton from '../../atoms/ProductCardButton/ProductCardButton';
const ProductCard = ({ title, image, template_link }) => {
  return (
    <product-basic-animation-box className="site-img">
      <product-basic-box>
        <product-basic-image-fx-container>
          <product-basic-image>
            <img className="product-basic-category-box-image" src={image}></img>
          </product-basic-image>
          <product-basic-inset-shadow />
          <product-basic-cover-outline id="myDiv">
            <product-basic-shine />
          </product-basic-cover-outline>
        </product-basic-image-fx-container>
        <product-basic-info-container>
          <h2 className="product-title istok-font">{title}</h2>
          <ProductCardButton />
        </product-basic-info-container>
      </product-basic-box>
    </product-basic-animation-box>
  );
};

export default ProductCard;
