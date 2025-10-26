import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ordersService } from '../services/ordersService';
import './CartPage.css';

function CartPage() {
  const { cart, clearCart, removeFromCart, updateQuantity } = useCart();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    pincode: '',
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderLoading, setOrderLoading] = useState(false);
  const [orderError, setOrderError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrder = async () => {
    const { name, phone, address, pincode } = formData;

    if (!name || !phone || !address || pincode.length !== 6) {
      alert('Please fill all fields correctly (6-digit pincode)');
      return;
    }

    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    setOrderLoading(true);
    setOrderError(null);

    try {
      // Calculate total amount
      const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

      // Prepare order data
      const orderData = {
        customerName: name,
        phone,
        address,
        pincode,
        items: cart.map(item => ({
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          img: item.img,
          desc: item.desc
        })),
        totalAmount
      };

      // Send order to backend
      const response = await ordersService.createOrder(orderData);
      console.log('Order created:', response);

      // Clear cart and show success
      setOrderPlaced(true);
      clearCart();
    } catch (error) {
      console.error('Error placing order:', error);
      setOrderError('Failed to place order. Please try again.');
      alert('Failed to place order. Please try again.');
    } finally {
      setOrderLoading(false);
    }
  };

  return (
    <div className="cart-page">
      {/* 🎥 Video Background */}
      <video autoPlay muted loop className="video-bg">
        <source src="ocean-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="cart-content">
        <h2>Delivery Cart</h2>

        {orderPlaced ? (
          <div className="success-msg">
            ✅ Order placed successfully!
            <p>Thank you, {formData.name}! Your order will be delivered to:</p>
            <p>{formData.address}, Pincode: {formData.pincode}</p>
            <p>📞 {formData.phone}</p>
          </div>
        ) : (
          <>
            {cart.length === 0 ? (
              <p>Your cart is empty 🛒</p>
            ) : (
              <>
                <div className="cart-list">
                  {cart.map((item, index) => (
                    <div key={index} className="cart-item">
                      <img src={item.img} alt={item.name} />
                      <div className="item-details">
                        <h3 className="item-name">{item.name}</h3>
                        <p className="item-price">₹{item.price}</p>
                        <div className="quantity-controls">
                          <button
                            className="quantity-btn"
                            onClick={() => updateQuantity(item, item.quantity - 1)}
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            className="quantity-btn"
                            onClick={() => updateQuantity(item, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                        <button
                          className="remove-btn"
                          onClick={() => removeFromCart(item)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="checkout-form">
                  <h3>Enter Delivery Details</h3>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <textarea
                    name="address"
                    placeholder="Full Address"
                    value={formData.address}
                    onChange={handleChange}
                  ></textarea>
                  <input
                    type="text"
                    name="pincode"
                    placeholder="Pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                  />
                  {orderError && <p className="error-message">{orderError}</p>}
                  <button onClick={handleOrder} disabled={orderLoading}>
                    {orderLoading ? 'Placing Order...' : 'Place Order'}
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default CartPage;
