import React, { createContext, useState, useContext } from 'react';

// Create the context
const CartContext = createContext();

// Create the provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems(prevItems => {
      // Check if the item is already in the cart
      const existingItem = prevItems.find(cartItem => cartItem.name === item.name);
      if (existingItem) {
        // If it exists, update the quantity
        return prevItems.map(cartItem =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // Otherwise, add the new item with a quantity of 1
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemName) => {
    setCartItems(prevItems => prevItems.filter(item => item.name !== itemName));
  };
  
  // Function to clear the entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};