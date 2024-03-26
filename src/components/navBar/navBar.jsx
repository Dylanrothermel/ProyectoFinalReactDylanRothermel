import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, Button, Heading} from '@chakra-ui/react'
import { TiArrowSortedDown } from "react-icons/ti"
import CartWidget from '../cartWidget/cartWidget'
import "./navBar.css"
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div className='navbar'>
      <div>
        <img src="https://w7.pngwing.com/pngs/337/572/png-transparent-dying-light-techland-dead-island-pure-farming-2018-video-game-dead-island-game-orange-logo.png" alt="Logo" style={{width : "150px"}}/>
      </div>
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