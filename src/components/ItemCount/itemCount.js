import React, { useState, useEffect } from "react";
import estilos from "../ItemDetailContainer/ItemDetailContainer.module.css";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    setCount(initial);
  }, [initial]);

  const sumar = () => {
    count < stock && setCount(count + 1);
  };

  const restar = () => {
    count > initial && setCount(count - 1);
  };

  return (
    <div className={estilos.card}>
      <button className={estilos.boton} onClick={sumar}>
        +
      </button>
      <button className={estilos.boton} onClick={restar}>
        -
      </button>
      <p> Cantidad en carrito: {count} </p>
      <button className={estilos.boton} onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
