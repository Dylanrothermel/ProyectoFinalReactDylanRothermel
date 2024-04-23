import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Button, Heading} from '@chakra-ui/react';
import { TiArrowSortedDown } from "react-icons/ti";
import CartWidget from '../cartWidget/cartWidget';
import "./navBar.css";
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className='navbar'>
      
      <Heading><Link to='/'>Tienda</Link></Heading>
        <Menu>
            <MenuButton as={Button} rightIcon={<TiArrowSortedDown />}>
                Productos
            </MenuButton>
            <MenuList>
                <MenuItem><Link to={'/category/laptops'}>Laptops</Link></MenuItem>
                <MenuItem><Link to ={'/category/mouses'}>Mouses</Link></MenuItem>
                <MenuItem><Link to ={'/category/teclados'}>Teclados</Link></MenuItem>
                <MenuItem><Link to ={'/category/auriculares'}>Auriculares</Link></MenuItem>
            </MenuList>
        </Menu>
        <CartWidget />
    </div>
  )
}

export default NavBar