import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ordersService } from '../services/ordersService';
import './AdminOrders.css';

function AdminOrders() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if admin is logged in
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin/login');
      return;
    }
    fetchOrders();
  }, [navigate]);

  const fetchOrders = async () => {
    try {
      const data = await ordersService.getAllOrders();
      setOrders(data);
      setError(null);
    } catch (err) {
      console.error('Failed to fetch orders:', err);
      setError('Failed to load orders');
    } finally {
      setLoading(false);
    }
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      await ordersService.updateOrderStatus(orderId, newStatus);
      fetchOrders(); // Refresh the list
      alert('Order status updated!');
    } catch (err) {
      console.error('Failed to update order:', err);
      alert('Failed to update order status');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    navigate('/admin/login');
  };

  if (loading) return <div className="admin-orders"><h2>Loading orders...</h2></div>;
  if (error) return <div className="admin-orders"><h2>{error}</h2></div>;

  return (
    <div className="admin-orders">
      <div className="admin-header">
        <h1>📦 Order Management</h1>
        <button className="logout-button" onClick={handleLogout}>
          🚪 Logout
        </button>
      </div>
      
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order._id} className="order-card">
              <div className="order-header">
                <h3>Order #{order._id.slice(-6)}</h3>
                <span className={`status-badge ${order.status}`}>
                  {order.status}
                </span>
              </div>
              
              <div className="customer-info">
                <p><strong>Customer:</strong> {order.customerName}</p>
                <p><strong>Phone:</strong> {order.phone}</p>
                <p><strong>Address:</strong> {order.address}, {order.pincode}</p>
                <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}</p>
              </div>

              <div className="order-items">
                <h4>Items:</h4>
                {order.items.map((item, idx) => (
                  <div key={idx} className="order-item">
                    <img src={item.img} alt={item.name} />
                    <span>{item.name}</span>
                    <span>x{item.quantity}</span>
                    <span>₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="order-footer">
                <p className="total"><strong>Total: ₹{order.totalAmount}</strong></p>
                <div className="status-buttons">
                  <button 
                    onClick={() => updateOrderStatus(order._id, 'confirmed')}
                    disabled={order.status === 'confirmed'}
                  >
                    Confirm
                  </button>
                  <button 
                    onClick={() => updateOrderStatus(order._id, 'preparing')}
                    disabled={order.status === 'preparing'}
                  >
                    Preparing
                  </button>
                  <button 
                    onClick={() => updateOrderStatus(order._id, 'delivered')}
                    disabled={order.status === 'delivered'}
                  >
                    Delivered
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminOrders;
