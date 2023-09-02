import { useState } from 'react';
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { Box, Button, FormControl, FormLabel, Input, Text, Flex } from '@chakra-ui/react';

const SendOrder = () => {
  const [name, setName] = useState('');
  const [direccion, setDireccion] = useState('');
  const [email, setEmail] = useState('');
  const [orderId, setOrderId] = useState(null);
  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(ordersCollection, order).then(({ id }) =>
      setOrderId(id)
    );
  };

  const order = {
    name,
    direccion,
    email,
  };

  const ordersCollection = collection(db, 'order');

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Box p="4" borderWidth="2px" borderRadius="md" borderColor="black">
        <Text fontSize="xl" fontWeight="bold" mb="4">
          Enviando Orden
        </Text>
        <form onSubmit={handleSubmit}>
          <FormControl id="name" mb="4">
            <FormLabel>Nombre y Apellido</FormLabel>
            <Input
              borderColor="black"
              borderWidth="2px"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl id="direccion" mb="4">
            <FormLabel>Dirección</FormLabel>
            <Input
              borderColor="black"
              borderWidth="2px"
              type="text"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
          </FormControl>
          <FormControl id="email" mb="4">
            <FormLabel>Email</FormLabel>
            <Input
              borderColor="black"
              borderWidth="2px"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <Button fontSize="xs" colorScheme="blue" type="submit" style={{ marginLeft: "55px" }}>
            Enviar Información
          </Button>
        </form>
        {orderId && (
          <Text mt="4">
            Número de orden: {orderId}
          </Text>
        )}
      </Box>
    </Flex>
  );
};

export default SendOrder;

   
  
  
  
  
  
  