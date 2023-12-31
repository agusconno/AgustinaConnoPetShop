import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <Flex
      align="center"
      justify="center"
      height="100vh"
      
    >
      <motion.h1
        style={{
          fontSize: '80px',
          fontFamily: 'Arial, sans-serif',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        }}
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
      >
        Bienvenidos 🐈🐾
      </motion.h1>
    </Flex>
  );
};

export default Home;


