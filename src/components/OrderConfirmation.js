import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './OrderConfirmation.css';

function OrderConfirmation({ orderDetails, onClose }) {
  return (
    <div className="order-confirmation">
      <div className="confirmation-content">
        <h2>Order Confirmed! 🎉</h2>
        <div className="order-details">
          <p className="confirmation-message">
            Thank you for your order! Your delicious seafood will be prepared with care.
          </p>
          <div className="order-summary">
            <h3>Order Summary</h3>
            <ul>
              {orderDetails.items.map((item, index) => (
                <li key={index}>
                  {item.quantity}x {item.name} - ₹{item.price * item.quantity}
                </li>
              ))}
            </ul>
            <div className="order-total">
              <strong>Total:</strong> ₹{orderDetails.total}
            </div>
          </div>
          <div className="delivery-info">
            <h3>Delivery Details</h3>
            <p><strong>Name:</strong> {orderDetails.delivery.name}</p>
            <p><strong>Address:</strong> {orderDetails.delivery.address}</p>
            <p><strong>Phone:</strong> {orderDetails.delivery.phone}</p>
          </div>
        </div>
        <div className="confirmation-actions">
          <Link to="/menu" className="continue-shopping">
            Continue Shopping
          </Link>
          <button onClick={onClose} className="close-confirmation">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;