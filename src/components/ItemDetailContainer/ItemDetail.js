import React from "react";
import ItemCount from "../ItemCount/itemCount";

const ItemDetail = ({product}) => {

    const onAdd = () => {
        alert("Has agregado un elemento al carrito")
    }

    return (
        <div>
            <img src={product.img} alt="" />
            <div>
                <h4>{product.title}</h4>
                <h3>${product.price}</h3>
                <p>{product.description}</p>
                <p>Stock:{product.stock}</p>
                <ItemCount stock= {7} initial= {0} onAdd= {onAdd} />
            </div>
        </div>
    )    
}

export default ItemDetail;