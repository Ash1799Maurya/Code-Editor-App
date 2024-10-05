import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Import React Router components
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>  {/* BrowserRouter handles routing */}
      <Routes>
        <Route path="*" element={<App />} />  {/* '*' wildcard route renders App for all paths */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
