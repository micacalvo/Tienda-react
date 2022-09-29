import React from "react";
import { Link } from 'react-router-dom';
import estilos from "../ItemListContainer/itemlistcontainer.module.css"

const Item = ({ producto }) => {
   console.log(producto)

return (
        <div className={estilos.card}>
            <img src={producto.img} alt="Imagenes de mis productos" />        
            <h4>{producto.title} </h4>               
            <h3>{producto.description} </h3>
            <p>${producto.price}</p>
            
            <Link to={`/detail/${producto.id}`}><button className={estilos.boton}> Ver detalles </button></Link>
        </div>        
)
}
export default Item;