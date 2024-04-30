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
      

      const response = await getDocs(queryRef);

      const products = response.docs.map((doc) => { 
        const newObj = { 
          ...doc.data(), 
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
    <div >
      
      {
        loading ?
        <Flex justify={'center'} align={'center'} h={'90vh'}>
          <Spinner size={'xl'}/>
        </Flex>
          :

        <>
        <ItemList data={data} />
        </>
      }
    </div>
  );
};

export default ItemListContainer