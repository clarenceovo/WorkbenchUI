import React from 'react';
import { createRoot } from 'react-dom/client';

import 'bootswatch/dist/darkly/bootstrap.min.css';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine-dark.css';
import './index.css';

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
