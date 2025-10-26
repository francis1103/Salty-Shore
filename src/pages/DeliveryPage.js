import React from 'react';
import { useCart } from '../context/CartContext';
import './DeliveryPage.css';

const deliveryItems = [
  { name: 'Fresh Shrimp (1kg)', price: 500, img: '/Fresh Shrimp.jpeg' },
  { name: 'Raw Crab (1kg)', price: 600, img: '/Raw Crab.jpeg' },
  { name: 'Salmon Fillet (500g)', price: 700, img: '/Salmon Fillet.jpeg' },
  { name: 'Prawn Pack (1kg)', price: 550, img: '/Prawn Pack.jpeg' },
  { name: 'Fresh Octopus (1kg)', price: 900, img: '/Fresh Octopus.jpeg' },
  { name: 'Lobster (Whole)', price: 1200, img: '/Lobster.jpeg' },
  { name: 'Tuna Steak (500g)', price: 650, img: '/Tuna Steak.jpeg' },
  { name: 'Squid Rings (1kg)', price: 480, img: '/Squid Rings.jpeg' },
  { name: 'Fresh Mussels (1kg)', price: 430, img: '/Fresh Mussels.jpeg' },
  { name: 'Sea Bass (Whole)', price: 850, img: '/Sea Bass.jpeg' },
  { name: 'Pomfret Fish (500g)', price: 500, img: '/Pomfret Fish.jpeg' },
  { name: 'Anchovies (Dry, 250g)', price: 300, img: '/Anchovies.jpeg' },
  { name: 'Mackerel (1kg)', price: 420, img: '/Mackerel.jpeg' },
  { name: 'King Fish Slices (500g)', price: 750, img: '/King Fish Slices.jpeg' },
  { name: 'Fresh Clams (1kg)', price: 390, img: '/Fresh Clams.jpeg' },
];

const DeliveryPage = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
    alert(`✅ ${item.name} added to cart!`);
  };

  return (
    <div className="delivery-container">
      {/* Video Background */}
      <video autoPlay muted loop className="video-bg">
        <source src="/ocean-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Form */}

      {/* Delivery Item Cards */}
      <div className="delivery-grid">
        {deliveryItems.map((item, idx) => (
          <div key={idx} className="delivery-card">
            <img src={item.img} alt={item.name} />
            <p><strong>{item.name}</strong></p>
            <p>₹{item.price}</p>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryPage;
