import React from "react";
import {Link} from 'react-router-dom';

const Item = ({producto}) => {
    console.log(producto)

return (
        <div>
            <img src={producto.img} alt="Imagenes de mis productos" />
        <div>
            <h4>{producto.title} </h4>               
            <h3>{producto.description} </h3>
            <p>${producto.price}</p>
            <p>Stock: {producto.stock}</p>
            
            <Link to={`/item/${producto.id}`}>     
                <button>Ver detalles</button>
            </Link>
        </div>
        </div>
)
}
export default Item;