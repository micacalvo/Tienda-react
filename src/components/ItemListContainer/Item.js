import React from "react";

const Item = (producto) => {
    return (
        <div>
            {
            <div>
               <h4>{producto.title} </h4>
               <img src={producto.img} alt="Imagenes de mis productos" />
               <p>{producto.description} </p>
               <p>${producto.price}</p>
               </div>
            }
        </div>
        
    )
}

export default Item;