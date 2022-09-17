import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
    //console.log(props)

//Setear el estado
    const [cart, setCart] = useState([]);

//Funciones
//1) Agregar al carrito
const addItem = (product, cantidad) => {
   //console.log(product, cantidad)
   //Objeto nuevo 
   //console.log ({...product, cantidad}
if (isInCart(product.id)) {
    sumaCantidad(product, cantidad)
    console.log('ya esta en el carrito')
} else {
    setCart([...cart, {...product, cantidad}])
}};
//console.log ([...cart, {...product, cantidad}])

//Esta en el carrito?
const isInCart = (id) => {
    return cart.some (product => product.id === id)
};

//Suma cantidades de cada producto generando cart nuevo
const sumaCantidad = (product, cantidad) => {
    const cartActualizado = cart.map((prod) => {
        if (prod.id === product.id) {
            const cartNuevo = {
                ...prod,
                cantidad: cantidad,
            };
            return cartNuevo;
        } else {
            return prod;
        }
})
setCart(cartActualizado)
};
//console.log (cart)

//Eliminar un producto
const removeItem = (id) => {
    const productRemove = cart.filter((prod) => prod.id !== id)
    setCart(productRemove)
};
//console.log(cart)

//Limpiar todo el carrito
const clearCart = () => {
    setCart([])
    console.log([...cart])
};

//Soluciona el problema de stock. Cuantas unidades estan en el carrito?
const cantidadProd = (id) => {
 const prodCant = cart.find ((prod)=> prod.id === id)
 return prodCant?.cantidad
}

//Total $ de cada producto (unidades) en cart widget
const cartUnidad = () => {
    let acc = 0
    cart.forEach((prod) => acc = acc + prod.cantidad)
    return acc;
}

//Total $ en carrito
const totalCart = () => {
    let acc = 0
    cart.forEach((prod) => acc = acc + (prod.price * prod.cantidad))
    return acc;
}

return (
    <CartContext.Provider value={{cart, addItem, isInCart, removeItem, clearCart, cantidadProd, totalCart, cartUnidad}}>
        {props.children}
    </CartContext.Provider>
)
}

export default CartProvider;