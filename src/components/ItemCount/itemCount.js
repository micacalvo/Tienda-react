import React, {useState, useEffect} from 'react';

const ItemCount = ({stock, initial = 1, onAdd}) => {

const [count, setCount] = useState(initial)

useEffect(() => {
    setCount(initial)
}, [initial]);
  

const sumar = () => {
    //setCount(count + 1)
    count < stock && setCount(count + 1);
};

const restar = () => {
    count > initial && setCount(count -1)
};

    return (
    <div>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <p> Cantidad en carrito: {count} </p>
        <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
    )
}

export default ItemCount;