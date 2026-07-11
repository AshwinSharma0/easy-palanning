import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import VenuesPage from './pages/VenuesPage';
import FoodPage from './pages/FoodPage';
import DecorationPage from './pages/DecorationPage';
import EstimatePage from './pages/EstimatePage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import EnquiryPage from './pages/EnquiryPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/venues" element={<VenuesPage />} />
          <Route path="/food" element={<FoodPage />} />
          <Route path="/decoration" element={<DecorationPage />} />
          <Route path="/estimate" element={<EstimatePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/enquiry" element={<EnquiryPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
