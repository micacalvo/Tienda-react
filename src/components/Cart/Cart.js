import React, { useContext, useState } from "react";
import CartDetail from "./CartDetail";
import { CartContext } from "../../Context/CartContext";
import Form from "../Form/Form";

const Cart = () => {
  const [idCompra, setIdCompra] = useState("");
  const { cart, clearCart, removeItem, totalCart } = useContext(CartContext);

  const total = totalCart();

  const compraId = (id) => {
    setIdCompra(id);
  };

  if (idCompra) {
    return <h3>Gracias por su compra, su ID es: {idCompra}</h3>;
  }

  return (
    <>
      <CartDetail
        cart={cart}
        total={total}
        clearCart={clearCart}
        removeItem={removeItem}
      />
      <Form
        cart={cart}
        total={total}
        clearCart={clearCart}
        compraId={compraId}
      />
    </>
  );
};

export default Cart;
