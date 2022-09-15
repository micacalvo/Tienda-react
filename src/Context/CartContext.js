import { useState } from "react";
import { createContext } from "react";
import products from "../mock/products";

export const CartContext = createContext();

const CartProvider = (props) => {
    //console.log(props)

//Setear el estado
    const [cart, setCart] = useState([]);

//Funciones
//1) Agregar al carrito
const addItem = (product, cantAgregada) => {
   //console.log(product, cantAgregada)
   //Objeto nuevo 
   //console.log ({...product, cantAgregada}
if (isInCart(product.id)) {
    sumaCantidad(product, cantAgregada)
    console.log('ya esta en el carrito')
} else {
    setCart([...cart, {...product, cantAgregada}])
}}
//console.log ([...cart, {...product, cantAgregada}])

//Esta en el carrito?
const isInCart = (id) => {
    return cart.some (product => product.id === id)
}

//Suma cantidades
const sumaCantidad = (product, cantAgregada) => {
    const cartActualizado = cart.map((prod) => {
        if (prod.id === product.id) {
            const cartNuevo = {
                ...prod,
                cantidad: prod.cantidad + cantAgregada,
            };
            return cartNuevo;
        } else {
            return prod;
        }
})
setCart(cartActualizado)
}
console.log (cart)

const removeItem = (id) => {
    const productRemove = cart.filter((prod) => prod.id !== id)
    setCart(productRemove)
}
console.log(cart)

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