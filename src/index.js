import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Page1 from './components/Page1';
import Page2 from './components/pages/Page2/Page2';
import HomePage from './components/pages/HomePage/HomePage';
import App from './App';
import './assets/fonts/IstokWeb-Regular.ttf';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
