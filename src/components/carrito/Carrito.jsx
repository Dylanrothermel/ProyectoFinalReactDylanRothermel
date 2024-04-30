import React, { useContext } from 'react';
import CartContext from "../../context/CartContext";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
    Heading,
    Flex
  } from '@chakra-ui/react';

import { Link } from 'react-router-dom';

const Carrito = () => {
    const { cart, getTotal, clearCart, removeItem} = useContext(CartContext);
    if(cart.length === 0) {
      return(
          <Flex direction={'column'} align={'center'} mt={10}>
              <Heading>Todavía no agregaste productos al carrito</Heading>
              <Heading><Link to='/'>Ver productos</Link></Heading>
          </Flex>
      )
  }else {
    return (
      <TableContainer>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>Nombre</Th>
                  <Th>Cantidad</Th>
                  <Th>Precio</Th>
                  <Th>Subtotal</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                  {
                    cart.map((producto) => (
                      <Tr key={producto.id}>
                        <Td>{producto.nombre}</Td>
                        <Td>{producto.quantity}</Td>
                        <Td>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'ARG', maximumFractionDigits: 0,  minimumFractionDigits: 0 }).format(producto.precio)}</Td>
                        <Td>{new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'ARG', maximumFractionDigits: 0,  minimumFractionDigits: 0 }).format(producto.precio * producto.quantity)}</Td>
                        <Td><Button onClick={() => removeItem(producto.id)}> Eliminar</Button></Td>
                      </Tr>
                    ))
                  }
                  
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>Total de la compra: ${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'ARG', maximumFractionDigits: 0,  minimumFractionDigits: 0 }).format(getTotal())}</Th>
                  <Th><Button onClick={() => clearCart()}>Vaciar</Button></Th>
                  <Th><Link to="/checkout">Finalizar compra</Link></Th>
                </Tr>
              </Tfoot>
            </Table>
        </TableContainer>
    )
  };
};

export default Carrito