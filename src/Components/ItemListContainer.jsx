import React from 'react'
import { Flex, Box, Spacer } from '@chakra-ui/react'

const ItemListContainer =  ({greeting}) => {
  return (
    <Flex>
        <Spacer/>
      <p>{greeting}</p>
      <Spacer/>
    </Flex>
  )
}

export default ItemListContainer
