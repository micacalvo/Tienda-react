import React from 'react';
import estilos from "./form.module.css";
import { useState } from 'react';

const Form = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [email, setEmail] = useState("");

    const enviarSubmit = (e) => {
        e.preventDefault()
       //console.log(e)
    };

    const nombreIngresado = (event) => {
        setNombre(event.target.value)
       //console.log(event.target.value)
    };
    const apellidoIngresado = (event) => {setApellido(event.target.value)};
    const phoneIngresado = (event) => {setphoneNumber(event.target.value)};
    const emailIngresado = (event) => {setEmail(event.target.value)};

return (
    <div className={estilos.form}>
        <form action="" onSubmit={enviarSubmit}>
            <input type="text" placeholder='Nombre' value={nombre} onChange={nombreIngresado}/>
            <input type="text" placeholder='Apellido' value={apellido} onChange={apellidoIngresado}/>
            <input type="number" placeholder='Celular' value={phoneNumber} onChange={phoneIngresado}/>
            <input type="text" placeholder='Email' value={email} onChange={emailIngresado}/>
            <button>Enviar</button>
        </form>
    </div>
)
}

export default Form;