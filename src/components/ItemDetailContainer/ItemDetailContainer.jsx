import React, { useEffect, useState } from 'react'
import { getProductsById } from '../../Data/productosAsync'
import { useParams } from 'react-router-dom'
import { Spinner } from '@chakra-ui/react'
import ItemDetail from '../itemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [ product, setProduct ] = useState({})
    const {productId} = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProductsById(productId)
            .then((el) => setProduct(el))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [])
  return (
    <div>
      {
        loading ?
        <Spinner />:

        <>
        <ItemDetail {...product}/>
        </>
      }
    </div>
  )
}

export default ItemDetailContainer