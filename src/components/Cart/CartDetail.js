import estilos from "./cartstyle.module.css";
import { NavLink } from "react-router-dom";

const CartDetail = ({ cart, removeItem, total, clearCart }) => {
  return (
    <div className={estilos.totalcart}>
      {cart.length === 0 ? (
        <div className={estilos.cartMessa}>
          <h3>El carrito está vacío</h3>
          <NavLink to="/">Home</NavLink>
        </div>
      ) : (
        <div className={estilos.cart}>
          {cart.map((prod) => (
            <div className={estilos.cartProd} key={prod.id}>
              <h2>{prod.title}</h2>
              <h3>Cantidad: {prod.cantidad}</h3>
              <h3>Precio $ {prod.price}</h3>
              <button onClick={() => removeItem(prod.id)}>
                Eliminar producto
              </button>
            </div>
          ))}
          <h3>Total: $ {total}</h3>
          <button onClick={clearCart}>Vaciar carrito</button>
        </div>
      )}
    </div>
  );
};

export default CartDetail;
