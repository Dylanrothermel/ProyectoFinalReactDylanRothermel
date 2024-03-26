import ItemList from '../itemList/itemList'
import React, { useEffect, useState } from 'react'
import { getProducts, getProductsByCategory} from '../../Data/productosAsync'
import { useParams } from 'react-router-dom'
import { Spinner } from '@chakra-ui/react'

const ItemListContainer = ({ title }) => {
  const [data, setData] = useState([])
  const { categoryId } = useParams()
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    const dataProducts = categoryId ? getProductsByCategory(categoryId) : getProducts()
    dataProducts
      .then ((el) => setData(el))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [categoryId])

  return (
    <div className='itemList'>
      {
        loading ?
        <Spinner />:

        <>
        <h1>{title}</h1>
        <ItemList data={data} />
        </>
      }
    </div>
  )
}

export default ItemListContainer