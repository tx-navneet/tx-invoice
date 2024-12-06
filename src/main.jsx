import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Import Dropify CSS and JS


// Import jQuery (Dropify depends on it)
// import $ from 'jquery';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
