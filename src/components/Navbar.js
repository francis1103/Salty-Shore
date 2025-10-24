import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Navbar.css';

function Navbar() {
  const { cart } = useCart();
  
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <h2 className="logo">🌊 Salty Shore</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Dine at Shore</Link>
        <Link to="/delivery">Order to Home</Link>
        <Link to="/cart" className="cart-link">
          Cart {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
