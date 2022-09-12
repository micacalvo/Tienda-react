import React from 'react';
import estilos from './itemlistcontainer.module.css';
import Item from '../Items/Item';

const ItemList = ({ productos }) => {
   console.log(productos)

return (
    <div className={estilos.itemList}> 
    {
    productos.map(producto => 
   <Item key={producto.id} 
         producto={producto} />
)}
</div>
)
}

export default ItemList;