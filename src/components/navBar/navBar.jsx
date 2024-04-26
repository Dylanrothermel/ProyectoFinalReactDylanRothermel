import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Button, Heading, Flex, Spacer} from '@chakra-ui/react';
import { TiArrowSortedDown } from "react-icons/ti";
import CartWidget from '../cartWidget/cartWidget';
import "./navBar.css";
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <Flex justifyContent={'center'} alignItems={'center'} bg={'grey'}>
      
      <Heading><Link to='/'>Tienda</Link></Heading>
      <Spacer />
        <Menu>
            <MenuButton as={Button} rightIcon={<TiArrowSortedDown />}>
                Productos
            </MenuButton>
            <Spacer />
            <MenuList>
                <MenuItem><Link to={'/category/laptops'}>Laptops</Link></MenuItem>
                <MenuItem><Link to ={'/category/mouses'}>Mouses</Link></MenuItem>
                <MenuItem><Link to ={'/category/teclados'}>Teclados</Link></MenuItem>
                <MenuItem><Link to ={'/category/auriculares'}>Auriculares</Link></MenuItem>
            </MenuList>
        </Menu>
        <CartWidget />
    </Flex>
  );
};



export default NavBar