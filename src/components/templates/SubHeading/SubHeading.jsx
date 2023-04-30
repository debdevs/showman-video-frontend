import React from 'react';
import './SubHeading.css';
import '../../../App.css';
import FeatureItems from '../../UI/molecules/FeatureItems/FeatureItems';
import EtsyInfoItems from '../../UI/molecules/EtsyInfoItems/EtsyInfoItems';
import FrontCategoryCard from '../../UI/molecules/FrontCategoryCard/FrontCategoryCard';
import BaseImageDisplay from '../../UI/atoms/BaseImageDisplay/BaseImageDisplay';
import HomeCategoryCard from '../../UI/molecules/HomeCategoryCard/HomeCategoryCard';

import { motion, useAnimation } from 'framer-motion/dist/framer-motion';
import { TemplatesContext } from '../../../Contexts/TemplatesPageContext';
import categories from '../../category_data.js';
import products_templates from '../../test_product_data.js';

import { useInView } from 'react-intersection-observer';

import { useEffect, useContext } from 'react';


const SubHeading = () => {


  const { isActive, setIsActive } = useContext(TemplatesContext);
  const { clickedId, setClickedId } = useContext(TemplatesContext);
  const { activeIndex, setActiveIndex } = useContext(TemplatesContext);
  const { sortButtonClicked, setSortButtonClicked } = useContext(TemplatesContext);
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
    <div className='subheading_container_parent' >
    <div className='subheading_container' >
    <div className='left_items'>

    </div>
    <div className='right_items'>
    {categories.slice(0,4).map((category, key) => (
              <motion.div
                className="cat-card-motion"
                key={category.id}
                initial={{ opacity: 0, traslateX: -50, translateY: -50 }}
                animate={{ opacity: 1, traslateX: 0, translateY: 0 }}
                transition={{ duration: 1, delay: 0.25 + key * 0.25 }}
              >
                <HomeCategoryCard
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
                  home_product_category_box_className={
                    key === clickedId
                      ? 'home_product_category_box_clicked'
                      : 'home_product_category_box'
                  }
                  home_product_category_animation_box_className={
                    key === clickedId
                      ? 'home_product_category_animation_box_clicked'
                      : 'home_product_category_animation_box'
                  }
                  home_product_category_image_fx_container_className={
                    key === clickedId
                      ? 'home_product_category_image_fx_container_clicked'
                      : 'home_product_category_image_fx_container'
                  }
                  home_product_category_cover_outline_className={
                    key === clickedId
                      ? 'home_product_category_cover_outline_clicked'
                      : 'home_product_category_cover_outline'
                  }
                />
              </motion.div>
            ))}
    </div>
    </div>
    </div>
  );
};

export default SubHeading;
