import React from 'react';
import '../../../App.css';
import './TemplatesSubheading.css';
import TemplatesCategoryCard from '../../UI/molecules/TemplatesCategoryCard/TemplatesCategoryCard';
import ProductCard from '../../UI/molecules/ProductCard/ProductCard';
const TemplatesSubheading = () => {
  return (
    <div>
      <section className="marketplace-content">
        <marketplace-content-parent>
          <fade-bg />
          <templates-category-card-parent>
            <TemplatesCategoryCard title="Weddings" />
            <TemplatesCategoryCard title="Real Estate" />
            <TemplatesCategoryCard title="Gaming" />
            <TemplatesCategoryCard title="Social Media" />
            <TemplatesCategoryCard title="Real Estate" />
          </templates-category-card-parent>
          <product-details-container>
            <product-filters-container></product-filters-container>
            <product-card-container>
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
          </product-details-container>
        </marketplace-content-parent>
      </section>
    </div>
  );
};

export default TemplatesSubheading;
