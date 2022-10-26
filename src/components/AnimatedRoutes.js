import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import '../meyer-reset.css';
import '../App.css';
import HomePage from '../components/pages/HomePage/HomePage';
import Page2 from '../components/pages/Page2/Page2';
import TemplatesLandingPage from '../components/pages/TemplatesLandingPage/TemplatesLandingPage';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';
import Plans from './pages/Plans/Plans';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import EtsySimpleEditPage from './pages/EtsySimpleEditPage/EtsySimpleEditPage';
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/" element={<HomePage />} />
          <Route
            path="/template-landing-page"
            element={<TemplatesLandingPage />}
          />
          <Route path="/profile-page" element={<TemplatesLandingPage />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/etsy-edit" element={<EtsySimpleEditPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedRoutes;
