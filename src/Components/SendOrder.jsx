import { useState } from 'react';
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { Box, Button, FormControl, FormLabel, Input, Text, Flex, VStack } from '@chakra-ui/react';

const SendOrder = () => {
  const [name, setName] = useState('');
  const [direccion, setDireccion] = useState('');
  const [email, setEmail] = useState('');
  const [orderId, setOrderId] = useState(null);
  const [orderSummary, setOrderSummary] = useState(null); 
  const db = getFirestore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const docRef = await addDoc(ordersCollection, {
      name,
      direccion,
      email,
    });

    setOrderId(docRef.id);

    const summary = {
      name,
      direccion,
      email,
    };

    setOrderSummary(summary);
  };

  const ordersCollection = collection(db, 'order');

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Box p="4" borderWidth="1px" borderRadius="md" width="400px" backgroundColor='#E7CBCB'>
        <Text fontSize="xl" fontWeight="bold" mb="4" textAlign="center">
          Enviando Orden
        </Text>
        {orderId ? (
          <VStack spacing="2" mb="4" alignItems="flex-start" >
            <Text fontWeight="bold" fontSize="lg">Resumen de la Compra:</Text>
            <Text>Nombre y Apellido: {orderSummary.name}</Text>
            <Text>Dirección de Envío: {orderSummary.direccion}</Text>
            <Text>Email: {orderSummary.email}</Text>
          </VStack>
        ) : (
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
            <Button fontSize="sm" colorScheme="blue" type="submit" width="100%">
              Enviar Información
            </Button>
          </form>
        )}
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


   
  
  
  
  
  
  