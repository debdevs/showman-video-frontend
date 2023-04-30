import React from 'react';
import './AlternateSubHeading.css';
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


const AlternateSubHeading = () => {


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
    <div className='alternate_subheading_container_parent' >
    <div className='alternate_subheading_container' >
    <div className='left_items'>

    </div>
    <div className='right_items'>

    </div>
    </div>
    </div>
  );
};

export default AlternateSubHeading;
