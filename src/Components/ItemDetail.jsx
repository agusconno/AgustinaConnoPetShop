import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Flex } from '@chakra-ui/react';
import ItemCount from './ItemCount';
import { useCart } from '../context/CartContext'; // Importa el useCart hook

const ItemDetail = ({ productos }) => {
  const { id } = useParams();
  const { addItem, isInCart } = useCart(); // Usa el hook useCart

  const filteredProducts = productos.filter((producto) => producto.id == id);

  return (
    <Flex justifyContent="center" alignItems="center" minHeight="100vh">
      {filteredProducts.map((p) => {
        const isItemInCart = isInCart(p.id);

        return (
          <div key={p.id}>
            <Card
              bg='gray.200'   
              borderRadius='lg' 
              boxShadow='md' 
              p="2rem" 
              maxW="400px" 
              textAlign="center" 
              backgroundColor='#E7CBCB'
            >
              <CardHeader>
                <Heading size="md">{p.nombre}</Heading>
              </CardHeader>
              <CardBody>
                <Text>{p.description}</Text>
                <Text> $ {p.precio}</Text>
              </CardBody>
              <CardFooter>
                <ItemCount
                  producto={p} // Pasa el producto como prop
                  isItemInCart={isItemInCart} // Pasa la información sobre si el producto ya está en el carrito
                  addItemToCart={addItem} // Pasa la función para agregar el producto al carrito
                />
              </CardFooter>
              <Link to="/cart">Terminar mi compra</Link> {/* Agrega el botón para terminar la compra */}
            </Card>
          </div>
        );
      })}
    </Flex>
  );
};

export default ItemDetail;




