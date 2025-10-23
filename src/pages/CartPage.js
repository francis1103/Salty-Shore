import React, { useContext, useState } from 'react';
import { DeliveryContext } from '../context/DeliveryContext';
import './CartPage.css';

function CartPage() {
  const { cart, clearCart } = useContext(DeliveryContext);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    pincode: '',
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrder = () => {
    const { name, phone, address, pincode } = formData;

    if (!name || !phone || !address || pincode.length !== 6) {
      alert('Please fill all fields correctly (6-digit pincode)');
      return;
    }

    setOrderPlaced(true);
    clearCart();
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
                      <div>
                        <p><strong>{item.name}</strong></p>
                        <p>₹{item.price}</p>
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
                  <button onClick={handleOrder}>Place Order</button>
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
