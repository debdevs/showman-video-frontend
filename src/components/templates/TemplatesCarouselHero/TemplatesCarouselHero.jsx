import React, { useContext } from 'react';
import './TemplatesCarouselHero.css';
import MotionCarousel, {
  CarouselItem,
} from '../../UI/organisms/MotionCarousel/MotionCarousel';
import gaming from '../../../assets/images/f0c3c841c7c85883e0ceec610e446e81e5b84aa5e1c70891686ed3bdb98c7880.webp';
import gaming1 from '../../../assets/images/wallpapersden.com_k-destiny-2_3840x2160.jpg';
import social from '../../../assets/images/fashion-banner.webp';
import CarouselText from '../../UI/molecules/CarouselText/CarouselText';
import categories from '../../category_data';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';
import { TemplatesContext } from '../../../Contexts/TemplatesPageContext';
const TemplatesCarouselHero = () => {
  const { activeIndex, setActiveIndex } = useContext(TemplatesContext);
  return (
    <section className="templates-carousel-hero">
      <fade-bg1 />
      <MotionCarousel>
        {categories &&
          categories
            .filter((category) => category.id === activeIndex + 1)
            .map((category, key) => (
              <CarouselItem>
                <item-container className="item-container">
                  <img src={category.image} className="cover-image" />
                  <box-shadow-overlay className="box-shadow-overlay" />
                  <CarouselText
                    header={category.title}
                    subtext={category.tagline}
                    description={category.description}
                  />
                </item-container>
              </CarouselItem>
            ))}
      </MotionCarousel>
    </section>
  );
};

export default TemplatesCarouselHero;
