import React, { createContext, useState } from 'react';

export const DeliveryContext = createContext();

export const DeliveryProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <DeliveryContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </DeliveryContext.Provider>
  );
};
