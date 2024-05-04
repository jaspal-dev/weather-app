import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './style.css';
import ThemeProvider from './themes';

const root = createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
