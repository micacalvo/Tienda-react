import React, {useState} from "react";
import { Link } from 'react-router-dom';
import ItemCount from "../ItemCount/itemCount";

const ItemDetail = ({ product }) => {

const [cantidad, setCantidad] = useState(0)

const onAdd = (cantidad) => {
 setCantidad(cantidad)
}

return (
    <div>
        <img src={product.img} alt="Imagenes de mis productos" />        
            <h4>{product.title} </h4>               
            <h3>{product.description} </h3>
            <p>${product.price}</p>
            <p>Stock: {product.stock}</p>
            
        { cantidad === 0 ? <ItemCount stock= {product.stock} initial= {0} onAdd= {onAdd}/> 
            : <Link to='/cart'><button>Ir al carrito</button></Link>
        }      
    </div> 
)    
}

export default ItemDetail;