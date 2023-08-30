import React from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Flex, Box, Spacer } from '@chakra-ui/react';
import { useCart } from '../context/CartContext'; // Importa el hook useCart

const CartWidget = () => {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <Flex>
      <Box>
        <ShoppingCartOutlined style={{ fontSize: '35px' }} />
      </Box>
      <Spacer />
      <Box>
        <p>{totalItems}</p>
      </Box>
    </Flex>
  );
};

export default CartWidget;

