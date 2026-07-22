import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import Careers from './pages/Careers';
import FAQs from './pages/FAQs';
import Settings from './pages/Settings';
import ListProperty from './pages/ListProperty';
import Legal from './pages/Legal';
import { FavoritesProvider } from './context/FavoritesContext';

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="properties" element={<Properties />} />
            <Route path="properties/:id" element={<PropertyDetails />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="careers" element={<Careers />} />
            <Route path="faqs" element={<FAQs />} />
            <Route path="settings" element={<Settings />} />
            <Route path="list-property" element={<ListProperty />} />
            <Route path="privacy-policy" element={<Legal pageType="privacy" />} />
            <Route path="privacy" element={<Legal pageType="privacy" />} />
            <Route path="terms-of-service" element={<Legal pageType="terms" />} />
            <Route path="terms" element={<Legal pageType="terms" />} />
            <Route path="sitemap" element={<Legal pageType="sitemap" />} />
            <Route path="legal" element={<Legal pageType="privacy" />} />
            <Route path="*" element={<Legal />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;
