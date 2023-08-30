import  { createContext, useContext, useState } from 'react';

// Crea el contexto
const CartContext = createContext();

// Hook personalizado para acceder al contexto
export const useCart = () => {
  return useContext(CartContext);
};

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Agregar un item al carrito
  const addItem = (item, quantity) => {
    const newItem = { ...item, quantity };
    setCartItems(prevItems => [...prevItems, newItem]);
  };

  // Remover un item del carrito por su id
  const removeItem = itemId => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  // Limpiar el carrito
  const clearCart = () => {
    setCartItems([]);
  };

  // Verificar si un item está en el carrito
  const isInCart = itemId => {
    return cartItems.some(item => item.id === itemId);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, clearCart, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
