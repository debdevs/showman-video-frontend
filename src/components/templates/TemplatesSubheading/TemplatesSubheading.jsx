import React from 'react';
import '../../../App.css';
import './TemplatesSubheading.css';
import TemplatesCategoryCard from '../../UI/molecules/TemplatesCategoryCard/TemplatesCategoryCard';
import ProductCard from '../../UI/molecules/ProductCard/ProductCard';
import Footer from '../Footer/Footer';
import FilterSection from '../../UI/molecules/FilterSection/FilterSection';
import ToolTipButton from '../../UI/molecules/ToolTipButton/ToolTipButton';
const TemplatesSubheading = () => {
  return (
    <div>
      <section className="marketplace-content">
        <marketplace-content-parent>
          <fade-bg />
          <templates-category-card-parent>
            <TemplatesCategoryCard className="cat-card" title="Weddings" />
            <TemplatesCategoryCard className="cat-card" title="Real Estate" />
            <TemplatesCategoryCard className="cat-card" title="Gaming" />
            <TemplatesCategoryCard className="cat-card" title="Social Media" />
            <TemplatesCategoryCard className="cat-card" title="Real Estate" />
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
