import React, { useState, useEffect, useMemo } from 'react';
import './MenuPage.css';
import { useNavigate } from 'react-router-dom';
import { itemsService } from '../services/itemsService';

// Categories for filtering
const categories = ['All', 'Fish', 'Shellfish', 'Crustacean', 'Mollusc'];

// Fallback data in case API fails
const fallbackItems = [
  { name: 'Shrimp', img: '/shrimp.jpeg' },
  { name: 'Crab', img: '/crab.jpeg' },
  { name: 'Salmon', img: '/salmon.jpeg' },
  { name: 'Oysters', img: '/oyster.jpeg' },
  { name: 'Prawn', img: '/prawn.jpeg' },
  { name: 'Octopus', img: '/octopus.jpeg' },
  { name: 'Mussels', img: '/mussels.jpeg' },
  { name: 'Lobster', img: '/lobster.jpeg' },
  { name: 'Tuna', img: '/tuna.jpeg' },
  { name: 'Squid', img: '/squid.jpeg' },
];

function MenuPage() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await itemsService.getAllItems();
        setItems(data.length > 0 ? data : fallbackItems);
      } catch (err) {
        console.error('Failed to fetch items:', err);
        setError('Failed to load menu items');
        setItems(fallbackItems); // Use fallback data if API fails
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const handleViewDishes = (name) => {
    navigate(`/seafood/${name}`);
  };

  // Filter items based on search query and category
  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [items, searchQuery, selectedCategory]);

  if (loading) {
    return (
      <div className="menu-page">
        <div className="menu-header">
          <h2>Seafood Menu</h2>
          <div className="loading-spinner" />
        </div>
      </div>
    );
  }

  return (
    <div className="menu-page">
      <div className="menu-header">
        <h2>Seafood Menu</h2>
        {error && <p className="error-message">{error}</p>}
      </div>

      <div className="menu-controls">
        <input
          type="text"
          placeholder="Search seafood..."
          className="search-bar"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        
        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="menu-grid">
        {filteredItems.map((item, index) => (
          <div key={index} className="menu-card">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            {item.description && <p>{item.description}</p>}
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
