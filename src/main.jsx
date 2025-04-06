import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import 'react-modal-video/scss/modal-video.scss';
import './index.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
