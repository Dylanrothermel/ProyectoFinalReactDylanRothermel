import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Stack, Image, Heading, Button, ButtonGroup, Divider, Text, Spacer } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
const Item = ({nombre, descripcion, precio, id, img}) => {
    const displayPrecio = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'ARG', maximumFractionDigits: 0, 
    minimumFractionDigits: 0 }).format(precio)
    
  return (
    <Card maxW={'sm'} boxShadow='dark-lg' p={'6'} rounded='md'>
    <CardBody>
        <Image
        src={img}
        borderRadius='lg'
        boxSize={'300'}
        width={'auto'}
        />
        <Stack mt='6' spacing='3'>
        <Heading size='md'>{nombre}</Heading>
        <Text>
            {descripcion}
        </Text>
        <Text color='blue.600' fontSize='2xl'>
            ${displayPrecio}
        </Text>
        </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
        <Link to={`/product/${id}`}><Button variant='solid' colorScheme='blue'>Ver detalle</Button></Link>
    </CardFooter>
    </Card>
    
  )
}

export default Item

{/* <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue'>
        <Link to={`/product/${id}`}> Ver detalle</Link>
        </Button>
        </ButtonGroup> */}