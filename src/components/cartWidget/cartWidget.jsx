import React, {useContext} from 'react';
import { CiShoppingCart } from "react-icons/ci";
import "./cartwidget.css";
import Context from "../../context/CartContext";
import { Link } from 'react-router-dom';
import { Flex, Text } from '@chakra-ui/react';
const CartWidget = () => {
  const { getQuantity } = useContext(Context)
  return (
    <Flex mr={3} justify={"center"} align={"center"}>
        <Link to="/cart"><CiShoppingCart  className='cartWidget'/></Link>
        <Text className='cantidad' ml={2}>{getQuantity()}</Text>
    </Flex>
  )
}

export default CartWidget