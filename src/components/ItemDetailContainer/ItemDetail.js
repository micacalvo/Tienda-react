import React from "react";
import ItemCount from "../ItemCount/itemCount";

const ItemDetail = ({ product }) => {

const onAdd = () => {
    alert("Has agregado un elemento al carrito")
}

return (
    <div>
        <img src={product.img} alt="Imagenes de mis productos" />        
            <h4>{product.title} </h4>               
            <h3>{product.description} </h3>
            <p>${product.price}</p>
            <p>Stock: {product.stock}</p>
        <ItemCount stock= {7} initial= {0} onAdd= {onAdd} />
    </div> 
)    
}

export default ItemDetail;