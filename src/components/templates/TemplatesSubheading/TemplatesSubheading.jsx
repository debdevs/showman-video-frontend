import React, { useContext } from 'react';
import { useState } from 'react';
import { Context } from 'react';
import '../../../App.css';
import './TemplatesSubheading.css';
import TemplatesCategoryCard from '../../UI/molecules/TemplatesCategoryCard/TemplatesCategoryCard';
import ProductCard from '../../UI/molecules/ProductCard/ProductCard';
import Footer from '../Footer/Footer';
import FilterSection from '../../UI/molecules/FilterSection/FilterSection';
import FilterBoxSection from '../../UI/molecules/FilterBoxSection/FilterBoxSection';
import ToolTipMediaButton from '../../UI/molecules/ToolTipMediaButton/ToolTipMediaButton';
import { motion, useAnimation } from 'framer-motion/dist/framer-motion';
import { TemplatesContext } from '../../../Contexts/TemplatesPageContext';
import categories from '../../category_data.js';
import products_templates from '../../test_product_data.js';
import HomeSearchBox from '../../UI/molecules/HomeSearchBox/HomeSearchBox';
import TemplatesSearchBox from '../../UI/molecules/TemplatesSearchBox/TemplatesSearchBox';
import { useInView } from 'react-intersection-observer';

import { useEffect } from 'react';
import FiltersContainer from '../../UI/organisms/FiltersContainer/FiltersContainer';
const products = [
  { id: 1, title: 'Weddings' },
  { id: 2, title: 'Real Estate' },
  { id: 3, title: 'Gaming' },
  { id: 4, title: 'Social Media' },
  { id: 5, title: 'Real Estate' },
];

const TemplatesSubheading = () => {
  const { isActive, setIsActive } = useContext(TemplatesContext);
  const { clickedId, setClickedId } = useContext(TemplatesContext);
  const { activeIndex, setActiveIndex } = useContext(TemplatesContext);

  let acClass = 'product-category-box';
  const control = useAnimation();
  const [ref, inView] = useInView();

  const boxVariant = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
    initial: { opacity: 0, rotateX: -50, rotateY: -50 },
    animate: { opacity: 1, rotateX: 0, rotateY: 0, control },
  };

  useEffect(() => {
    if (inView) {
      control.start('visible');
    }
  }, [control, inView]);

  return (
    <div>

      <section className="marketplace-content">
        <marketplace-content-parent>
          <fade-bg2 />

          <templates-category-card-parent>
            {categories.slice(0,5).map((category, key) => (
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
                  cover_image={category.image}
                  key={key}
                  cardClick={() => {
                    setClickedId(key);
                    setActiveIndex(key);
                  }}
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
          <div class="templates_subheading">
            <div class="cards_header">
            <template-button-array-area>
                <h2 className="outfit">Browse Templates</h2>
                <template-button-array>
                  {products_templates.slice(0, 2).map((product, key) => (
                    <ToolTipMediaButton
                      key={key}
                      title={product.title}
                      image={product.image}
                    />
                  ))}
                </template-button-array>
              </template-button-array-area>


            </div>
            <div class="product_card_grid">

            <product-card-container>
                {products_templates.map((product, key) => (
                  <motion.div
                    variants={boxVariant}
                    ref={ref}
                    className="cat-card-motion-1"
                    key={product.id}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.25 + key * 0.25 }}
                  >
                    <ProductCard title={product.title} image={product.image} />{' '}
                  </motion.div>
                ))}
              </product-card-container>

            </div>
            <div class="side_filter_items">
              <FiltersContainer/>
            </div>
          </div>
          <product-details-container>
            <product-filters-container>
              <TemplatesSearchBox/>
              <div className='sub_items'>
                <FilterSection />
                <FilterBoxSection />
              </div>

            </product-filters-container>

            <right-area>



            </right-area>
          </product-details-container>
        </marketplace-content-parent>
      </section>
      <Footer />
    </div>
  );
};

export default TemplatesSubheading;
