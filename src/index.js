import React from 'react'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import './assets/fonts/IstokWeb-Regular.ttf';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);