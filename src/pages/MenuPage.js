import React from 'react';
import './MenuPage.css';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of Link

const seafoodItems = [
  {
    name: 'Shrimp',
    img: '/shrimp.jpeg',
  },
  {
    name: 'Crab',
    img: '/crab.jpeg',
  },
  {
    name: 'Salmon',
    img: '/salmon.jpeg',
  },
  {
    name: 'Oysters',
    img: '/oyster.jpeg',
  },
  {
    name: 'Prawn',
    img: '/prawn.jpeg',
  },
  {
    name: 'Octopus',
    img: '/octopus.jpeg',
  },
  {
    name: 'Mussels',
    img: '/mussels.jpeg',
  },
  {
    name: 'Lobster',
    img: '/lobster.jpeg',
  },
  {
    name: 'Tuna',
    img: '/tuna.jpeg',
  },
  {
    name: 'Squid',
    img: '/squid.jpeg',
  },
];

function MenuPage() {
  const navigate = useNavigate();

  const handleViewDishes = (name) => {
    navigate(`/seafood/${name}`);
  };

  return (
    <div className="menu-page">
      <h2>Seafood Menu</h2>
      <div className="menu-grid">
        {seafoodItems.map((item, index) => (
          <div key={index} className="menu-card">
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
            <button
              onClick={() => handleViewDishes(item.name)}
              className="view-button"
            >
              View Dishes
            </button>
          </div>
        ))}
      </div>
    </div>

    
  );
}

export default MenuPage;
