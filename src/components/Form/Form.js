import React from "react";
import estilos from "./form.module.css";
import RingLoader from "react-spinners/RingLoader";
import { useState } from "react";
import { db } from "../../firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const Form = ({ cart, total, clearCart, compraId }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [direccion, setDireccion] = useState("");
  const [email, setEmail] = useState("");
  const [emailRepeat, setEmailRepeat] = useState("");
  const [loading, setLoading] = useState(false);

  const enviarSubmit = (event) => {
    event.preventDefault();
    if (email === emailRepeat) {
      const order = {
        buyer: {
          nombre: nombre,
          apellido: apellido,
          direccion: direccion,
          email: email,
        },
        items: cart,
        total: total,
        date: serverTimestamp(),
      };

      const ordersCollecction = collection(db, "orders");
      addDoc(ordersCollecction, order)
        .then((res) => {
          compraId(res.id);
          clearCart();
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(true);
        });
    } else {
      alert("Los datos ingresados de email deben ser idénticos");
    }
  };

  const nombreIngresado = (event) => {
    setNombre(event.target.value);
  };
  const apellidoIngresado = (event) => {
    setApellido(event.target.value);
  };
  const direccionIngresada = (event) => {
    setDireccion(event.target.value);
  };
  const emailIngresado = (event) => {
    setEmail(event.target.value);
  };
  const emailRepetido = (event) => {
    setEmailRepeat(event.target.value);
  };

  return (
    <div className={estilos.form}>
      <form action="" onSubmit={enviarSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          name="nombre"
          value={nombre}
          onChange={nombreIngresado}
        />
        <input
          type="text"
          placeholder="Apellido"
          name="apellido"
          value={apellido}
          onChange={apellidoIngresado}
        />
        <input
          type="text"
          placeholder="Direccion"
          name="direccion"
          value={direccion}
          onChange={direccionIngresada}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={emailIngresado}
        />
        <input
          type="text"
          placeholder="Repita email"
          name="emaildos"
          value={emailRepeat}
          onChange={emailRepetido}
        />
        <button>Enviar</button>
      </form>
      {loading && <RingLoader color="green" size={100} />}
    </div>
  );
};

export default Form;
