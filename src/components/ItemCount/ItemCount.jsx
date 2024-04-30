import { Button } from '@chakra-ui/react';
import React from 'react';
import useCounter from '../../hooks/useCounter';
import "./itemCount.css";
import Swal from 'sweetalert2';


const ItemCount = ({stock, initialValue, onAdd}) => {
    const {count, incrementar, decrementar} = useCounter(stock, initialValue);
    const notificacion = () => {
      Swal.fire({
        title: "Producto añadido al carrito",
        icon: "success"
      });
    };
  return (
    <div className='itemCount'>
        <button className="btnCounterMinus" onClick={decrementar}>-</button>
        <h2>{count}</h2>
        <button className="btnCounterPlus" onClick={incrementar}>+</button>
        <button className='btnAdd' onClick={() => {onAdd(count); notificacion(); }}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount