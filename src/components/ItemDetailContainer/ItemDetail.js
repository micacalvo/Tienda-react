import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import ItemCount from "../ItemCount/itemCount";
import estilos from "./ItemDetailContainer.module.css";

const ItemDetail = ({ product }) => {
  const [cantidad, setCantidad] = useState(0);

  const { addItem, cantidadProd } = useContext(CartContext);

  const onAdd = (cantAgregada) => {
    setCantidad(cantAgregada);
    addItem(product, cantAgregada);
  };

  const quantityProd = cantidadProd(product.id);

  return (
    <div className={estilos.itemDetail}>
      <img src={product.img} alt="Imagenes de mis productos" />
      <h4>{product.title} </h4>
      <h3>{product.description} </h3>
      <p>${product.price}</p>
      <p>Stock: {product.stock}</p>

      {cantidad === 0 ? (
        <ItemCount stock={product.stock} initial={quantityProd} onAdd={onAdd} />
      ) : (
        <Link to="/cart">
          <button className={estilos.boton}>Ir al carrito</button>
        </Link>
      )}
    </div>
  );
};

export default ItemDetail;
