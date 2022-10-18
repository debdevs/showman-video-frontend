import React from 'react';
import './TemplatesCarouselHero.css';
import TemplatesCarousel, {
  CarouselItem,
} from '../../UI/organisms/TemplatesCarousel/TemplatesCarousel';
import gaming from '../../../assets/images/f0c3c841c7c85883e0ceec610e446e81e5b84aa5e1c70891686ed3bdb98c7880.webp';
import social from '../../../assets/images/fashion-banner.webp';
import CarouselText from '../../UI/molecules/CarouselText/CarouselText';
const TemplatesCarouselHero = () => {
  return (
    <section className="templates-carousel-hero">
      <fade-bg1 />
      <TemplatesCarousel>
        <CarouselItem>1</CarouselItem>
        <CarouselItem>
          <item-container className="item-container">
            <img src={gaming} className="cover-image" />
            <box-shadow-overlay className="box-shadow-overlay" />
            <CarouselText
              header="Gaming"
              subtext="You wanna rock? Let’s go."
              description="From overlays to streaming screens, make your mark with Showman"
            />
          </item-container>
        </CarouselItem>
        <CarouselItem>
          {' '}
          <item-container className="item-container">
            <img src={social} className="cover-image" />
            <box-shadow-overlay className="box-shadow-overlay" />
            <CarouselText
              header="Social Media"
              subtext="Catch some eyes."
              description="Templates to wow any crowd. Catch some eyes with these stylish templates"
            />
          </item-container>
        </CarouselItem>
        <CarouselItem>4</CarouselItem>
        <CarouselItem>5</CarouselItem>
      </TemplatesCarousel>
    </section>
  );
};

export default TemplatesCarouselHero;
