import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Flex, Box, Text, Heading, Image, Button, IconButton } from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({categoria, descripcion, img, nombre, precio, stock}) => {
  return (
    <Card maxW='md'>
  <CardHeader>
    <Flex spacing='4'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>

        <Box>
          <Heading size='sm'>{nombre}</Heading>
          <Text>Categoria: {categoria}</Text>
        </Box>
      </Flex>
      <IconButton
        variant='ghost'
        colorScheme='gray'
        aria-label='See menu'
      />
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
      Stock: {stock}
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
    <ItemCount stock={stock} initialValue={1}/>
  }
</Card>
  )
}

export default ItemDetail
