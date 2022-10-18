import React from 'react';
import { useState } from 'react';
import '../../../App.css';
import './TemplatesSubheading.css';
import TemplatesCategoryCard from '../../UI/molecules/TemplatesCategoryCard/TemplatesCategoryCard';
import ProductCard from '../../UI/molecules/ProductCard/ProductCard';
import Footer from '../Footer/Footer';
import FilterSection from '../../UI/molecules/FilterSection/FilterSection';
import ToolTipButton from '../../UI/molecules/ToolTipButton/ToolTipButton';
import { motion } from 'framer-motion/dist/framer-motion';

const categories = [
  { id: 1, title: 'Weddings' },
  { id: 2, title: 'Real Estate' },
  { id: 3, title: 'Gaming' },
  { id: 4, title: 'Social Media' },
  { id: 5, title: 'Real Estate' },
];

const products = [
  { id: 1, title: 'Weddings' },
  { id: 2, title: 'Real Estate' },
  { id: 3, title: 'Gaming' },
  { id: 4, title: 'Social Media' },
  { id: 5, title: 'Real Estate' },
];

const TemplatesSubheading = () => {
  const [isActive, setIsActive] = useState(false);
  const [clickedId, setClickedId] = useState(-1);
  const handleClick = () => {
    // 👇️ toggle

    setIsActive(true);
    console.log(isActive);
  };
  let acClass = 'product-category-box';
  return (
    <div>
      <section className="marketplace-content">
        <marketplace-content-parent>
          <fade-bg />
          <templates-category-card-parent>
            {categories.map((category, key) => (
              <motion.div
                className="cat-card-motion"
                key={category.id}
                initial={{ opacity: 0, traslateX: -50, translateY: -50 }}
                animate={{ opacity: 1, traslateX: 0, translateY: 0 }}
                transition={{ duration: 1, delay: 0.25 + key * 0.25 }}
              >
                <TemplatesCategoryCard
                  className="cat-card"
                  title={category.title}
                  key={key}
                  cardClick={() => setClickedId(key)}
                  //() => console.log(key);
                  cat_card_container_className={
                    key === clickedId
                      ? 'cat_card_container_clicked'
                      : 'cat_card_container'
                  }
                  product_category_box_className={
                    key === clickedId
                      ? 'product_category_box_clicked'
                      : 'product_category_box'
                  }
                  product_category_animation_box_className={
                    key === clickedId
                      ? 'product_category_animation_box_clicked'
                      : 'product_category_animation_box'
                  }
                  product_category_image_fx_container_className={
                    key === clickedId
                      ? 'product_category_image_fx_container_clicked'
                      : 'product_category_image_fx_container'
                  }
                  product_category_cover_outline_className={
                    key === clickedId
                      ? 'product_category_cover_outline_clicked'
                      : 'product_category_cover_outline'
                  }
                />
              </motion.div>
            ))}
          </templates-category-card-parent>
          <product-details-container>
            <product-filters-container>
              <FilterSection />
            </product-filters-container>

            <right-area>
              <template-button-array-area>
                <h2 className="istok-font">Browse Templates</h2>
                <template-button-array>
                  <ToolTipButton />
                  <ToolTipButton />
                  <ToolTipButton />
                  <ToolTipButton />
                </template-button-array>
              </template-button-array-area>
              <product-card-container>
                <ProductCard title="Stylish Instagram Overlay" />
                <ProductCard title="Social Media" />
                <ProductCard title="Social Media" />
                <ProductCard title="Social Media" />
                <ProductCard title="Social Media" />
                <ProductCard title="Social Media" />
                <ProductCard title="Social Media" />
                <ProductCard title="Social Media" />
                <ProductCard title="Social Media" />
                <ProductCard title="Social Media" />
                <ProductCard title="Social Media" />
                <ProductCard title="Social Media" />
                <ProductCard title="Social Media" />
                <ProductCard title="Social Media" />
                <ProductCard title="Social Media" />
                <ProductCard title="Social Media" />
                <ProductCard title="Social Media" />
                <ProductCard title="Social Media" />
                <ProductCard title="Social Media" />
              </product-card-container>
            </right-area>
          </product-details-container>
        </marketplace-content-parent>
      </section>
      <Footer />
    </div>
  );
};

export default TemplatesSubheading;
