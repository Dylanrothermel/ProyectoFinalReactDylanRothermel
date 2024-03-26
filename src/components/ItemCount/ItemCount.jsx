import { Button } from '@chakra-ui/react'
import React from 'react'
import useCounter from '../../hooks/useCounter'
import "./itemCount.css"


const ItemCount = ({stock, initialValue}) => {
    const {count, incrementar, decrementar} = useCounter(stock, initialValue)
  return (
    <div className='itemCount'>
        <Button className="btnCounter"onClick={decrementar} colorScheme='blue'>-</Button>
        <h2>{count}</h2>
        <Button className="btnCounter"onClick={incrementar} colorScheme='blue'>+</Button>
    </div>
  )
}

export default ItemCount