import React from 'react';
import Item from './Item';
import { Flex } from '@chakra-ui/react'; 

const ItemList = ({ productos }) => {
  return (
    <Flex align="center" justify="center" height="100vh">
      {productos.map((p) => (
        <Item
          key={p.id}
          id={p.id}
          nombre={p.nombre}
          description={p.description}
          precio={p.precio}
          src={p.src}
        />
      ))}
    </Flex>
  );
};

export default ItemList;



