import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './meyer-reset.css';
import './App.css';
import HomePage from './components/pages/HomePage/HomePage';
import Page2 from './components/pages/Page2/Page2';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <main>
          <Routes>
            <Route path="/Page2" element={<Page2 />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
