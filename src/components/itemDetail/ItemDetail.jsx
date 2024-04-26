import React, { useContext, useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Flex, Box, Text, Heading, Image, Button} from '@chakra-ui/react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';

const ItemDetail = ({categoria, descripcion, img, nombre, precio, stock, id}) => {
  const { addItem, cart } = useContext(CartContext); // traes addItem y cart de cartContext usando usecontext
  const [ cantidad, setCantidad] = useState(0);
  const onAdd = (quantity) => {


    const item ={ //agarro las propiedades de ItemDetail que me interesa mostrar en el carrito
      id,
      stock,
      nombre,
      precio
    };
    addItem(item, quantity); //llamas addItem y le pasas lo que hay en item y quantity
    
    setCantidad(quantity);
  };
  return (
    <Card maxW='md'>
    <CardHeader>
        <Flex spacing='4' >
        <Flex flex='1' gap='4'  flexWrap='wrap'>
            <Box>
            <Heading size='sm'>{nombre}</Heading>
            <Text>Categoría: {categoria}</Text>
            </Box>
        </Flex>
        </Flex>
    </CardHeader>
    <CardBody>
        <Text>
        {descripcion}
        </Text>
        <Text>
        ${precio}
        </Text>
        <Text>
        Stock disponible: {stock}
        </Text>
    </CardBody>
    <Image
        objectFit='cover'
        src={img}
        alt='Chakra UI'
    />

    <CardFooter
        justify='space-between'
        flexWrap='wrap'
        sx={{
        '& > button': {
            minW: '136px',
        },
        }}
    >

    </CardFooter>
    {
            cantidad > 0 ?
            <Button bg={'green'}>
              <Link to='/cart'>Ir al carrito</Link> 
            </Button>
                :
                <ItemCount stock={stock} initialValue={1} onAdd={onAdd} />
        }
    </Card>
  );
};

export default ItemDetail
