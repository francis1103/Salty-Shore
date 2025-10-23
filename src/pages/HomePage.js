import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      {/* ✅ Collage Background */}
      <div className="collage-wrapper">
        {[...Array(50)].map((_, idx) => (
          <img
            key={idx}
            src={`/bg${(idx % 30) + 1}.jpeg`} // Uses 30 images, looped for 50 placements
            alt={`bg${idx + 1}`}
            className="collage-img"
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
              transform: `rotate(${Math.random() * 30 - 15}deg)`
            }}
          />
        ))}
      </div>

      {/* ✅ Overlay Content */}
      <div className="overlay">
        <h1 className="title">🌊 Sea to Shore</h1>
        <p className="tagline">Your ocean-to-table seafood experience</p>
        <div className="button-group">
          <button onClick={() => navigate('/menu')}>Dine at the Shore</button>
          <button onClick={() => navigate('/delivery')}>Order to Home</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
