import React from 'react'
import Item from '../item/item'

const ItemList = ({data}) => {
    
  return (
    <div className='itemListt'>
        {data.map((el) => (
          <div key={el.id}>
            <Item {...el} />
          </div>
        ))}
    </div>
  )
}

export default ItemList