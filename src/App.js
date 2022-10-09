import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './meyer-reset.css';
import './App.css';
import HomePage from './components/pages/HomePage/HomePage';
import Page2 from './components/pages/Page2/Page2';
import TemplatesLandingPage from './components/pages/TemplatesLandingPage/TemplatesLandingPage';
import AnimatedRoutes from './components/AnimatedRoutes';
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <main>
          <AnimatedRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
