import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (password === '1234') {
      // Store admin session
      localStorage.setItem('adminLoggedIn', 'true');
      navigate('/admin/orders');
    } else {
      setError('Incorrect password!');
      setPassword('');
    }
  };

  return (
    <div className="admin-login">
      <div className="login-container">
        <div className="login-header">
          <h1>🔐 Admin Login</h1>
          <p>Enter password to access order management</p>
        </div>
        
        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <label>Admin Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              autoFocus
              required
            />
          </div>
          
          {error && <p className="error-message">{error}</p>}
          
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        
        <div className="login-hint">
          <small>Hint: Default password is 1234</small>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
