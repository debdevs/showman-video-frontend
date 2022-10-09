import React from 'react';
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
  return (
    <div>
      <section className="marketplace-content">
        <marketplace-content-parent>
          <fade-bg />
          <templates-category-card-parent>
            {categories.map((category, i) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, traslateX: -50, translateY: -50 }}
                animate={{ opacity: 1, traslateX: 0, translateY: 0 }}
                transition={{ duration: 1, delay: 0.25 + i * 0.25 }}
              >
                <TemplatesCategoryCard
                  className="cat-card"
                  title={category.title}
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
