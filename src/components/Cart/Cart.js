import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Form from "../Form/Form";
import estilos from './cartstyle.module.css';


const Cart = () => {

const {cart, clearCart, removeItem} = useContext(CartContext)

return (
    <div className={estilos.cart}>
    {
        cart.map ((prod)=> (
            <div key={prod.id}>
            <h2>{prod.title}</h2>
            <h3>Cantidad: {prod.cantidad}</h3>
            <h3>Precio $ {prod.price}</h3>
            <button onClick={()=> removeItem(prod.id)}>Eliminar producto</button>
            </div>
))}
<button onClick={clearCart}>Vaciar carrito</button>
<Form/>
</div>
)}

export default Cart;