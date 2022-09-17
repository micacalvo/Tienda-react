import React, {useState} from "react";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "../../Context/CartContext";
import ItemCount from "../ItemCount/itemCount";

const ItemDetail = ({ product }) => {

const [cantidad, setCantidad] = useState(0)

//Uso el contexto de CartContext
const { addItem, cantidadProd } = useContext(CartContext)

const onAdd = (cantAgregada) => {
setCantidad(cantAgregada)
addItem(product, cantAgregada)
};

const quantityProd = cantidadProd(product.id)

return (
    <div>
        <img src={product.img} alt="Imagenes de mis productos" />        
            <h4>{product.title} </h4>               
            <h3>{product.description} </h3>
            <p>${product.price}</p>
            <p>Stock: {product.stock}</p>
            
        { cantidad === 0 ? <ItemCount stock= {product.stock} initial= {quantityProd} onAdd= {onAdd}/> 
            : <Link to='/cart'><button>Ir al carrito</button></Link>
        }      
    </div> 
)    
}

export default ItemDetail;