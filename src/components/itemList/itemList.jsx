import React from 'react';
import Item from '../item/item';
import { Wrap, Spacer, Flex, Box} from '@chakra-ui/react';


const ItemList = ({data}) => {
    
  return (
    <Wrap justify={'center'} align={'center'} mt={'20'} mb={'20'} spacing={'7'}>
        {data.map((el) => (
          <Box key={el.id}>
            <Item {...el} />
          </Box>
        ))}
    </Wrap>
  );
};
export default ItemList