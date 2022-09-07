import estilos from './itemlistcontainer.module.css';
import products from '../../mock/products';
import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {

// useState para almacenar los productos    
   const [productos, setProductos] = useState([]);

   const {categoryId} = useParams();
   //console.log(categoryId)

useEffect(() => {
    //Petición de datos    
   const request = new Promise ((resolve, reject) => {
   
   const prodFiltrados = products.filter((prod) => prod.category === categoryId) 

   setTimeout(()=> resolve(categoryId ? prodFiltrados : products), 500)
});
 
request
.then((data) => { 
  setProductos(data)
})
 
.catch((error)=> {
    console.error(error)
})
}, [categoryId])   

//console.log(productos)

return (
<main className={estilos.bodyContainer}>
    <h2>{props.saludo}</h2>
    <ItemList productos={productos}/>
</main>
)
}

export default ItemListContainer;