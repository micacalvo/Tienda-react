import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Form from "../Form/Form";


const Cart = () => {

const {cart, clearCart, removeItem} = useContext(CartContext)

return (
//cart debo mapearlo    
<div>
    <Form/>
    <button onClick={removeItem}>Eliminar elemento</button>
    <button onClick={clearCart}>Vaciar carrito</button>
</div>

)
}

export default Cart;