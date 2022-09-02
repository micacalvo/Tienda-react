import products from "../../mock/products";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import estilos from "./ItemDetailContainer.module.css";

const ItemDetailContainer = () => {

const [product, setProduct] = useState({})
    
useEffect(() => {
    const getProduct = new Promise ((resolve, reject) => {
    const productChoose =  products.find((prod) => prod.id === 1)
    setTimeout(() => resolve(productChoose), 2000) 
});

getProduct
.then ((data) => {
    setProduct(data)
})

.catch((error) => {
    console.error(error)
})
}, [])

//console.log(product)
return (
    <div className= {estilos.itemDetailCont}>
    <ItemDetail product={product}/>
    </div>
) 
}

export default ItemDetailContainer; 