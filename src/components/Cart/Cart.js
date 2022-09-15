import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Form from "../Form/Form";


const Cart = () => {

const {cart, clearCart, removeItem} = useContext(CartContext)

return (
    <div>
    {
        cart.map ((prod)=> (
            <div key={prod.id}>
            <h2>{prod.title}</h2>
            <button onClick={()=> removeItem(prod.id)}>Eliminar elemento</button>
            </div>
))})
<button onClick={clearCart}>Vaciar carrito</button>
<Form/>
</div>
)}

export default Cart;