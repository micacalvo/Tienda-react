import {FiShoppingCart} from 'react-icons/fi';
import React from 'react';
import { CartContext } from '../../Context/CartContext';
import { useContext } from 'react';

const CartWidget = () => {
    const {cartUnidad} = useContext (CartContext)

return (
    // Icono del carrito
<div> 
<FiShoppingCart style={{size: '40', alignItems:'center', color:"black"}}/>
{cartUnidad() === 0 ? '' : cartUnidad()}
</div>
)
}

export default CartWidget;