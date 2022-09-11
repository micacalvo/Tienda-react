import products from "../../mock/products";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import estilos from "./ItemDetailContainer.module.css";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

const [product, setProduct] = useState({})

const {idProd} = useParams()
//const idNum = Number(idProd)   

useEffect(() => {
    const getProduct = new Promise ((resolve, reject) => {
    const productFind =  products.find((prod) => prod.id === Number(idProd))
    setTimeout(() => {resolve(idProd ? productFind : products);}, 2000);
});

getProduct
.then ((data) => {
    setProduct(data)
})

.catch((error) => {
    console.error(error)
})
}, [idProd])

console.log(product)
return (
    <div className= {estilos.itemDetailCont}>
    <ItemDetail product={product}/>
    </div>
) 
}

export default ItemDetailContainer; 