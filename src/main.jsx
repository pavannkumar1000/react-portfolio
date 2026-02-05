import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// AOS
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from 'react'

import './index.css'
import App from './App'
import ReactDOM from 'react-dom/client'
import React from 'react'

AOS.init({
  duration: 1000,
  once: true,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
