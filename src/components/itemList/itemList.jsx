import React from 'react';
import Item from '../item/item';
import { Wrap, Spacer} from '@chakra-ui/react';


const ItemList = ({data}) => {
    
  return (
    <Wrap m={'20'}>
        {data.map((el) => (
          <div key={el.id}>
            <Item {...el} />
          </div>
        ))}
    </Wrap>
  )
}
// className='itemList'
export default ItemList