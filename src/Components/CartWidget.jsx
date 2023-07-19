import { ShoppingCartOutlined } from '@ant-design/icons'
import { Flex, Box, Spacer } from '@chakra-ui/react'
import React from 'react'



const CartWidget = () => {
  return (
    <Flex>
       <Box>
       <ShoppingCartOutlined style={{fontSize:'45px'}}/>
       </Box>
        <Spacer/>
      <Box>
      <p>3</p>
      </Box> 
      
    </Flex>
  )
}

export default CartWidget
