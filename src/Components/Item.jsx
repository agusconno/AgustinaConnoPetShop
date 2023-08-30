import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Item = ({ nombre, description, id, precio, category, src }) => {
  return (
    <>
      <Flex direction={{ base: 'column', sm: 'row' }}>
        <Card
          bg="#E7CBCB" 
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          mx={3} 
          my={3} 
        >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src={src} // Utiliza el atributo src para mostrar la imagen del producto
          />
          <Stack>
            <CardBody>
              <Heading size='sm'>{nombre}</Heading>
              <Text py='1'>
                {description}
                {category}
              </Text>
            </CardBody>
            <CardFooter>
              <Button variant='solid' colorScheme='blue'>
                <Link to={`/Item/${id}`}>
                  Detalle
                </Link>
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      </Flex>
    </>
  );
};

export default Item;
