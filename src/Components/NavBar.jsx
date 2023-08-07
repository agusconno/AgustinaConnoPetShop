import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Spacer, Heading, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import CartWidget from './CartWidget';
import marca from '../assets/perritoI.jpg';

const NavBar = () => {
  return (
    <Flex
      style={{
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        backgroundColor: '#C88EA7',
        height: '60px', 
        alignItems: 'center', 
        padding: '0 10px', 
      }}
    >
      <Box>
        <Link to={'/'}>
          <img src={marca} alt="imagen logo" width='60px' style={{ borderRadius: '50%', maxWidth: '60px' }} />
        </Link>
      </Box>
      <Box marginLeft='0px'>
        <Menu isLazy>
          <MenuButton textColor='white' padding='5px' fontSize='16px'> 
            Servicios
          </MenuButton>
          <MenuList>
            <MenuItem fontSize='14px'> 
              <Link to={`/category/${'cat1'}`}>Peluquería</Link>
            </MenuItem>
            <MenuItem fontSize='14px'> 
              <Link to={`/category/${'cat2'}`}>Ropa</Link>
            </MenuItem>
            <MenuItem fontSize='14px'> 
              <Link to={`/category/${'cat3'}`}>Accesorios</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Spacer />
      <Box>
        <Heading size='lg' fontSize='40px' textColor='white' marginLeft='-150px'>
          Pet-Store "Mordelon"
        </Heading>
      </Box>
      <Spacer />
      <Link to={'/cart'}>
        <CartWidget />
      </Link>
    </Flex>
  );
};

export default NavBar;
