// Bootstrap CSS & JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// AOS (Animate On Scroll)
import 'aos/dist/aos.css';
import AOS from 'aos';
import './index.css';

// React & ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Main App
import App from './App';

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
});

// Render the App
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
