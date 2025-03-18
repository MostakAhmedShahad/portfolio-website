import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import { BrowserRouter } from 'react-router-dom'; // Add this
import App from './App';
import './index.css';

// Use createRoot instead of ReactDOM.render
const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);