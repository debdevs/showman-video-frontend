import React from 'react';
import './TemplatesCarouselHero.css';
import TemplatesCarousel, {
  CarouselItem,
} from '../../UI/organisms/TemplatesCarousel/TemplatesCarousel';
import gaming from '../../../assets/images/f0c3c841c7c85883e0ceec610e446e81e5b84aa5e1c70891686ed3bdb98c7880.webp';
import gaming1 from '../../../assets/images/wallpapersden.com_k-destiny-2_3840x2160.jpg';
import social from '../../../assets/images/fashion-banner.webp';
import CarouselText from '../../UI/molecules/CarouselText/CarouselText';
import categories from '../../category_data';
const TemplatesCarouselHero = () => {
  return (
    <section className="templates-carousel-hero">
      <fade-bg1 />
      <TemplatesCarousel>
        {categories.map((category, key) => (
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
      </TemplatesCarousel>
    </section>
  );
};

export default TemplatesCarouselHero;
