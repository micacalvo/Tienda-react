import { FiShoppingCart } from "react-icons/fi";
import React from "react";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import estilos from "./navbar.module.css"

const CartWidget = () => {
    const { cartUnidad } = useContext(CartContext);

    return (
        <div className={estilos.imgCart}>
            <FiShoppingCart
                style={{color: "black" }}
            />
            {cartUnidad() === 0 ? "" : cartUnidad()}
        </div>
    );
};

export default CartWidget;
