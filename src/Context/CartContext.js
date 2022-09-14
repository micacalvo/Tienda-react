import { useState } from "react";
import { createContext } from "react";
import products from "../mock/products";

export const CartContext = createContext();

const CartProvider = (props) => {
    //console.log(props)

//Setear el estado
    const [cart, setCart] = useState([]);

//Funciones

const addItem = (product, cantAgregada) => {
   //console.log(product, cantAgregada)
   //Objeto nuevo 
   //console.log ({...product, cantAgregada}
    setCart([...cart, {...product, cantAgregada}])
    console.log ([...cart, {...product, cantAgregada}])
}

const isInCart = (id) => {
    const producIgual = cart.find (product => product.id === id)
    console.log(producIgual)
}

const removeItem = (id) => {
    const productRemove = cart.filter((prod) => prod.id === id)
    setCart(productRemove)
    console.log(productRemove)
}

const clearCart = () => {
    setCart([])
    console.log([...cart])
}

return (
    <CartContext.Provider value={{cart, addItem, isInCart, removeItem, clearCart}}>
        {props.children}
    </CartContext.Provider>
)
}

export default CartProvider;