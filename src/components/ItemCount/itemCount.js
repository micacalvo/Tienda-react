import React, {useState} from 'react';

const ItemCount = ({stock, initial, onAdd}) => {

const [count, setCount] = useState(0)

const sumar = () => {
    //setCount(count + 1)
    count < stock ? setCount(count + 1) : alert ("El máximo de este producto es 7");
};

const restar = () => {
    count > initial && setCount(count -1)
};

    return (
    <div>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <p> {count} </p>
        <button onClick={onAdd}>Agregar al carrito</button>
    </div>
    )
}

export default ItemCount;