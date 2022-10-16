import React from 'react';
import './TemplatesCarouselHero.css';
import TemplatesCarousel, {
  CarouselItem,
} from '../../UI/organisms/TemplatesCarousel/TemplatesCarousel';
const TemplatesCarouselHero = () => {
  return (
    <section className="templates-carousel-hero">
      <fade-bg />
      <TemplatesCarousel>
        <CarouselItem>1</CarouselItem>
      </TemplatesCarousel>
    </section>
  );
};

export default TemplatesCarouselHero;
