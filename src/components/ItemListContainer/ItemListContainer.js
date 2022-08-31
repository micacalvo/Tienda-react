import estilos from './itemlistcontainer.module.css';
import products from '../../mock/products';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';

const ItemListContainer = (props) => {

// useState para almacenar los productos    
   const [productos, setProductos] = useState([]);

useEffect(() => {
    //Petición de datos    
   const request = new Promise ((resolve, reject) => {
   setTimeout(()=> resolve(products), 2000)
});
 
request
.then((data) => { 
  setProductos(data)
})
 
.catch((error)=> {
    console.error(error)
})
}, [])   

//console.log(productos)

return (
<main className={estilos.bodyContainer}>
    <h2>{props.saludo}</h2>
    <ItemList productos={productos}/>
</main>
)
}

export default ItemListContainer;