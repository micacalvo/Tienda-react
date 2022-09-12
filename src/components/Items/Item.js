import React from "react";
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
   console.log(producto)

return (
        <div>
            <img src={producto.img} alt="Imagenes de mis productos" />        
            <h4>{producto.title} </h4>               
            <h3>{producto.description} </h3>
            <p>${producto.price}</p>
            
            <Link to={`/detail/${producto.id}`}><button> Ver detalles </button></Link>
        </div>        
)
}
export default Item;