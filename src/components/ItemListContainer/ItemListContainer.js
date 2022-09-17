import estilos from './itemlistcontainer.module.css';
import products from '../../mock/products';
import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import RingLoader from "react-spinners/RingLoader";

const ItemListContainer = ({ saludo }) => {

   // useState para almacenar los productos    
   const [productos, setProductos] = useState([]);
   //console.log(productos)

   const [loading, setLoading] = useState(true)
   
   const { categoryId } = useParams();
   console.log(categoryId)

useEffect(() => {
    //Petición de datos    
   const request = () => new Promise ((resolve, reject) => {
   
   const prodFiltrados = categoryId ? products.filter(prod => prod.category === categoryId) : products

   setTimeout(() => { resolve(prodFiltrados);}, 2000);
});

request()
.then((data) => { 
  setProductos(data)
  setLoading(false)
})

.catch((error)=> {
    console.error(error)
});

return () => {
    setLoading(true);
}
}, [categoryId])  

console.log(productos)

return (
<div style={{display:'flex', justifyContent:'center'}} className={estilos.bodyContainer}> 
    { loading ? <><RingLoader color='green' size={100}/></>
    : <> 
       <h2 className={estilos.saludo}>{saludo}</h2>
       <ItemList productos={productos}/></>
    }
</div>
)
}

export default ItemListContainer;