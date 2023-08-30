import React, { useState } from 'react';

const ItemCount = ({ producto, isItemInCart, addItemToCart }) => {
  const [count, setCount] = useState(0);
  const [showAddButton, setShowAddButton] = useState(false); // Nuevo estado para controlar la visibilidad del botón "Agregar al carrito"

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    setShowAddButton(true); // Mostrar el botón "Agregar al carrito" al aumentar la cantidad
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleAddToCart = () => {
    addItemToCart(producto, count); // Agrega el producto al carrito con la cantidad seleccionada
    setShowAddButton(false); // Ocultar el botón "Agregar al carrito" después de agregar al carrito
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button style={{
          borderRadius: '10%',
          width: '60px',
          height: '60px',
          marginRight: '20px',
          backgroundColor: '#E48586', 
          color: 'white', 
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', 
          transition: 'background-color 0.3s ease', 
          fontSize: '24px', 
        }}
        onClick={handleIncrement}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#D76162')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#E48586')} 
       >+</button>
      <p>Cantidad: {count}</p>
      <button style={{
          borderRadius: '10%',
          width: '60px',
          height: '60px',
          marginLeft: '20px',
          backgroundColor: '#E48586', 
          color: 'white', 
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', 
          transition: 'background-color 0.3s ease', 
          fontSize: '24px', 
        }}
        onClick={handleDecrement}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#D76162')} 
        onMouseOut={(e) => (e.target.style.backgroundColor = '#E48586')}  >-</button>
      {!isItemInCart && count > 0 && ( // Muestra el botón solo si no está en el carrito y la cantidad es mayor que 0
        <button onClick={handleAddToCart}>Agregar al carrito</button>
      )}
    </div>
  );
};

export default ItemCount;