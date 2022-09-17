import products from "../../mock/products";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import estilos from "./ItemDetailContainer.module.css";
import { useParams } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";

const ItemDetailContainer = () => {

const [product, setProduct] = useState({})
const [loading, setLoading] = useState(true)

const {idProd} = useParams();
//console.log(idProd)
//const idNum = Number(idProd)   

useEffect(() => {
    const getProduct = () => new Promise ((resolve, reject) => {
    const productFind = idProd ? products.find((prod) => prod.id === idProd) : products
    setTimeout(() => { resolve (productFind);}, 2000);
});

getProduct()
.then((data) => {
    setProduct(data)
    setLoading(false)
})

.catch((error) => {
    console.error(error)
});

return () => {
    setLoading(true)
}
}, [idProd])

//console.log(product)
return (
    <div className= {estilos.itemDetailCont}>
        { loading ? <RingLoader color='green' size={100}/> : <ItemDetail product={product}/>     
        }
    </div>
) 
}

export default ItemDetailContainer; 