import React, { useState } from 'react';

const ItemCount = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button
        style={{
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
      >
        +
      </button>
      <p>Cantidad: {count}</p>
      <button
        style={{
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
        onMouseOut={(e) => (e.target.style.backgroundColor = '#E48586')} 
      >
        -
      </button>
    </div>
  );
};

export default ItemCount;



