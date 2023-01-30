import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { RouterProvider, } from "react-router-dom";
import Router from './services/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);