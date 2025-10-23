import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">🌊 Salty Shore</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Dine at Shore</Link>
        <Link to="/delivery">Order to Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
}

export default Navbar;
