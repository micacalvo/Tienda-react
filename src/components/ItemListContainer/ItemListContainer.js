import estilos from './itemlistcontainer.module.css';
import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import RingLoader from "react-spinners/RingLoader";
import { collection, getDocs, query, where } from 'firebase/firestore';
import {db} from '../../firebaseConfig';

const ItemListContainer = ({ saludo }) => {

   // useState para almacenar los productos    
   const [productos, setProductos] = useState([]);
   //console.log(productos)

   const [loading, setLoading] = useState(true)
   
   const { categoryName } = useParams();
  console.log(categoryName)

useEffect(() => {
    //Petición de datos a Firebase
    
    const itemCollection = collection(db, "productos");
    //const q = query(itemCollection, where("category", "==", categoryName))
    
    //Filtro de productos por categoría 
    const prodFiltrados = categoryName ? query(itemCollection, where("category", "==", categoryName)) : itemCollection  

    getDocs(prodFiltrados).then((res) => {
        //console.log(res)
        //console.log(res.docs)
       const products = res.docs.map((prod) => {
        //console.log(prod.data())
            return {
                id: prod.id,
                ...prod.data(),
            }
}); setProductos(products)
})
.catch((error) => {
    console.log(error)
})
.finally(() => {
setLoading(false)
}) 
}, [categoryName])

//console.log(products)

return (
<div style={{display:'grid', placeItems:'center'}} className={estilos.bodyContainer}> 
    { loading ? <><RingLoader color='green' size={100}/></>
    : <> 
       <h2 className={estilos.saludo}>{saludo}</h2>
       <ItemList productos={productos}/></>
    }
</div>
)
}

export default ItemListContainer;

