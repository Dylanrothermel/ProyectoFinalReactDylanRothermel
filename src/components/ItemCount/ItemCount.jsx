import { Button } from '@chakra-ui/react';
import React from 'react';
import useCounter from '../../hooks/useCounter';
import "./itemCount.css";
import Swal from 'sweetalert2';


const ItemCount = ({stock, initialValue, onAdd}) => {
    const {count, incrementar, decrementar} = useCounter(stock, initialValue)
    const notificacion = () => {
      Swal.fire({
        title: "Producto añadido al carrito",
        icon: "success"
      });
    }
  return (
    <div className='itemCount'>
        <Button className="btnCounter"onClick={decrementar} colorScheme='red'>-</Button>
        <h2>{count}</h2>
        <Button className="btnCounter"onClick={incrementar} colorScheme='green'>+</Button>
        <Button colorScheme='blue' ml={2} onClick={() => {onAdd(count); notificacion(); }}>Agregar al carrito</Button>
    </div>
  )
}

export default ItemCount