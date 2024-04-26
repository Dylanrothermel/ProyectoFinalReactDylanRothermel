import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';
import ItemDetail from '../itemDetail/ItemDetail';
import { doc, getDoc, query } from 'firebase/firestore';
import { db } from '../../config/firebase';

const ItemDetailContainer = () => {
    const [ product, setProduct ] = useState({});
    const {productId} = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProduct = async() => {
          const queryRef = doc(db, "productos", productId); // agarra la base de datos(db) la coleccion(productos) y el id del producto

          const response = await getDoc(queryRef);

          const newItem ={
            ...response.data(),
            id: response.id
          };
          setProduct(newItem);
          setLoading(false);
        };
        getProduct()
    }, []);
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
  );
};

export default ItemDetailContainer