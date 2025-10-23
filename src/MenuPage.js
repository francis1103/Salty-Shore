import React from 'react';
import './MenuPage.css';
import { Link } from 'react-router-dom';

const seafoodItems = [
  { name: 'Shrimp', img: 'shrimp.jpeg' },
  { name: 'Crab', img: 'crab.jpeg' },
  { name: 'Salmon', img: 'salmon.jpeg' },
  { name: 'Oysters', img: 'oyster.jpeg' },
  { name: 'Prawn', img: 'prawn.jpeg' },
  { name: 'Octopus', img: 'octopus.jpeg' },
];

function MenuPage() {
  return (
    <div className="menu-page">
      <h2>Seafood Menu</h2>
      <div className="menu-grid">
        {seafoodItems.map((item, index) => (
          <Link to={`/seafood/${item.name}`} key={index} className="menu-card">
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
