import ItemList from '../itemList/itemList';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner, Flex, Box } from '@chakra-ui/react';
import { collection, getDocs, query, where} from 'firebase/firestore';
import { db } from '../../config/firebase';



const ItemListContainer = ({ title }) => {
  const [data, setData] = useState([]);
  const { categoryId } = useParams();
  const [ loading, setLoading ] = useState(true);



  

  useEffect(() => {
    setLoading(true);
    const getData = async() => {
      const queryRef = !categoryId ? collection(db, "productos") : query(collection(db, "productos"), where("categoria", "==", categoryId));
      // si no hay categoria va a traer todos los productos, si hay categoria va a hacer una query en la collecion, va a traer aquellos productos donde la categoria sea igual al categoryId

      const response = await getDocs(queryRef);

      const products = response.docs.map((doc) => { // agarrar docs de el array de response
        const newObj = { // crear un nuevo documento
          ...doc.data(), // string operator de la data y hay que ponerle id
          id: doc.id
        };
        return newObj
      });
      setData(products);
      setLoading(false);
    };

    getData()
  }, [categoryId]);

  return (
    <Flex >
      
      {
        loading ?
        <Spinner />:

        <>
        <h1>{title}</h1>
        <ItemList data={data} />
        </>
      }
    </Flex>
  );
};

export default ItemListContainer