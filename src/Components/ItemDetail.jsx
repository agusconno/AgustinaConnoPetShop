import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Flex } from '@chakra-ui/react';
import ItemCount from './ItemCount'; 

const ItemDetail = ({ productos }) => {
  console.log('productos:', productos);
  const { id } = useParams();

  const filteredProducts = productos.filter((producto) => producto.id == id);
  console.log('filteredProducts:', filteredProducts);

  return (
    <Flex justifyContent="center" alignItems="center" minHeight="100vh">
      {filteredProducts.map((p) => {
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
                {/* <Text>{p.category}</Text> */}
              </CardBody>
              <CardFooter>
                <ItemCount />
              </CardFooter>
            </Card>
          </div>
        );
      })}
    </Flex>
  );
};

export default ItemDetail;



