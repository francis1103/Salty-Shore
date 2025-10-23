import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import SeafoodDetail from './pages/SeafoodDetail';
import DeliveryPage from './pages/DeliveryPage';
import CartPage from './pages/CartPage';
import Navbar from './components/Navbar'; // ✅

function App() {
  return (
    <Router>
      <Navbar /> {/* ✅ Navbar always visible */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/seafood/:name" element={<SeafoodDetail />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
