import React from 'react';
import { Flex, Box, Button, Text, Spacer, Card } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Importa el hook useCart

const Cart = () => {
  const { cartItems, removeItem, clearCart } = useCart();

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.precio * item.quantity, 0);
  };

  return (
    <Flex direction="column" alignItems="center" minHeight="100vh" padding="50px">
      <h1 style={{ fontSize: '48px', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>🐾</h1>
      
      {cartItems.length > 0 ? (
        <div>
          <Card
              bg='gray.200'   
              borderRadius='lg' 
              boxShadow='md' 
              p="2rem" 
              maxW="400px" 
              textAlign="center" 
              backgroundColor='#E7CBCB'
            >
              {cartItems.map((item) => (
            <Flex key={item.id} alignItems="center" py={2}>
              <Box flex={1}>
              
                <Text>{item.description}  {item.quantity}</Text>
                <Text>Precio unitario: ${item.precio}</Text>
              </Box>
              <Button colorScheme="#FF8551" onClick={() => removeItem(item.id)}>✖️</Button>
            </Flex>
          ))}
          <Text fontWeight="bold" fontSize="lg">Precio total: ${getTotalPrice()}</Text>
          <Button colorScheme="blue" onClick={clearCart}>Vaciar carrito</Button>
            </Card>
          
        </div>
      ) : (
        <div>
          <Card
              bg='gray.200'   
              borderRadius='lg' 
              boxShadow='md' 
              p="2rem" 
              maxW="400px" 
              textAlign="center" 
              backgroundColor='#E7CBCB'
            >
              <Text>No hay ítems en el carrito.</Text>
              <Link to="/">Volver a la tienda</Link>
            </Card>
          
        </div>
      )}
    </Flex>
  );
};

export default Cart;



