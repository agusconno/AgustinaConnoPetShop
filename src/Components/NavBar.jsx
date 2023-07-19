import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button, Box } from '@chakra-ui/react'
import CartWidget from './CartWidget'
import { Flex, Spacer } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import cart from '../assets/perrito.jpg'




const NavBar = () => {
  return (
    <Flex style={{
      backgroundColor: '#C88EA7',
    }}>
      <Box>
        <img src={cart} alt="imagen logo" width='80px'/>
      </Box>
      <Box>
      <Menu isLazy>
          <MenuButton textColor='white' padding='10px'>Servicios</MenuButton>
          <MenuList>
            <MenuItem>Peluquería</MenuItem>
            <MenuItem>Ropa</MenuItem>
            <MenuItem>Accesorios</MenuItem>
            <MenuItem>Contacto</MenuItem>
          </MenuList>
      </Menu>
      </Box>
      <Spacer/>
        <Box>
        <Heading size='lg' fontSize='35px' textColor='white' marginLeft='-120px'>
        Pet-Store "Mordelon"
        </Heading>
        </Box> 
      <Spacer/>
        <CartWidget/>
    </Flex>
  )
}

export default NavBar
