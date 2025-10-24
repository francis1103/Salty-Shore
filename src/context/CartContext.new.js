import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem('cart');
    const parsedCart = savedCart ? JSON.parse(savedCart) : [];
    console.log('Loaded cart from storage:', parsedCart);
    return parsedCart;
  } catch (error) {
    console.error('Error loading cart from storage:', error);
    return [];
  }
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(loadCartFromStorage);

  useEffect(() => {
    console.log('Cart items updated:', cartItems);
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    console.log('Attempting to add item:', item);
    if (!item || !item.name || !item.price) {
      console.error('Invalid item data:', item);
      return;
    }

    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(i => i.name === item.name);
      
      if (existingItemIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        };
        console.log('Updated existing item:', updatedItems);
        return updatedItems;
      }
      
      const newItem = {
        name: item.name,
        price: item.price,
        img: item.img,
        desc: item.desc,
        quantity: 1
      };
      console.log('Adding new item:', newItem);
      return [...prevItems, newItem];
    });
  };

  const removeFromCart = (item) => {
    setCartItems(prevItems => 
      prevItems.filter(i => i.name !== item.name)
    );
  };

  const updateQuantity = (item, quantity) => {
    if (quantity < 1) {
      removeFromCart(item);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(i =>
        i.name === item.name
          ? { ...i, quantity }
          : i
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const contextValue = {
    cart: cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};