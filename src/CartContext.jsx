import React, { createContext, useState, useContext } from "react";


const CartContext = createContext();


export const useCart = () => useContext(CartContext);


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  
  const addToCart = (product) => {
    
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const placeOrder = () => {
    clearCart();
    alert("Order placed successfully!");
  };

  
  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, placeOrder }}>
      {children}
    </CartContext.Provider>
  );
};
