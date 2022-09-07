import React from "react";
import ItemCount from "../ItemCount/itemCount";
import Item from "../ItemListContainer/Item";

const ItemDetail = ({producto}) => {

const onAdd = () => {
    alert("Has agregado un elemento al carrito")
}

return (
    <div>
        <Item producto={producto}/>
        <ItemCount stock= {7} initial= {0} onAdd= {onAdd} />
    </div> 
)    
}

export default ItemDetail;