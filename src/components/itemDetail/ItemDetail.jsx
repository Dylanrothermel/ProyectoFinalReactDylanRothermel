import React, { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import "./itemDetail.css"

const ItemDetail = ({categoria, descripcion, img, nombre, precio, stock, id}) => {
  const { addItem, cart } = useContext(CartContext); 
  const [ cantidad, setCantidad] = useState(0);
  const onAdd = (quantity) => {


    const item ={ 
      id,
      stock,
      nombre,
      precio
    };
    addItem(item, quantity); 
    
    setCantidad(quantity);
  };
  return (
    
    <main>
      <div className="container">
        <div className="producat_wrapper">
          <div className="producat_image">
            <img src={img} alt="" />
          </div>
          <div className="producat_content">
            <h2>{nombre}</h2>
            <p className="producat_des">
              {descripcion}
            </p>
            <div className="qty">
            {
                cantidad > 0 ?
                <button className='btnCarrito'>
                  <Link to='/cart'>Ir al carrito</Link> 
                </button>
                    :
                    <ItemCount stock={stock} initialValue={1} onAdd={onAdd} />
        }
            </div>
          </div>
        </div>
      </div>
    </main>
      
        
    
      
      
    
  );
};

export default ItemDetail

{/* <div class="img_thumbnail">
              <img src={img} alt="" />
            </div> */}

{/* {
                cantidad > 0 ?
                <Button bg={'green'}>
                  <Link to='/cart'>Ir al carrito</Link> 
                </Button>
                    :
                    <ItemCount stock={stock} initialValue={1} onAdd={onAdd} />
        } */}

{/* <div className='detailContainer'>
        <img src= {img} alt="" />
        <div className='detailInfo'>
          <span>{nombre}</span>
          <span>Categoría: {categoria}</span>
        </div>
      </div> */}


{/* <Card maxW='lg'>
        <Flex flexDirection={"row"}>
          <Image
            objectFit='cover'
            src={img}
            alt='Chakra UI'
          />
          <Flex flexDirection={"column"} ml={"400"}>
            <Heading size={"sm"}>{nombre}</Heading>
            <Text>Categoría: {categoria}</Text>
          </Flex>
          
          
        </Flex>
        
      <CardHeader direction={"column"}>
          <Flex spacing='4'>
          <Flex flex='1' gap='4'  flexWrap='wrap'>
              <Box>
              <Heading size={"sm"}>{nombre}</Heading>
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
      

      <CardFooter
          justify='space-between'
          flexWrap='wrap'
          sx={{
          '& > button': {
              minW: '136px',
          },
          }}
      >

      </CardFooter> */}