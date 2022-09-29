import estilos from "./itemlistcontainer.module.css";
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);

  const [loading, setLoading] = useState(true);

  const { categoryName } = useParams();

  useEffect(() => {
    //Petición de datos a Firebase

    const itemCollection = collection(db, "productos");

    //Filtro de productos por categoría
    const prodFiltrados = categoryName
      ? query(itemCollection, where("category", "==", categoryName))
      : itemCollection;

    getDocs(prodFiltrados)
      .then((res) => {
        const products = res.docs.map((prod) => {
          return {
            id: prod.id,
            ...prod.data(),
          };
        });
        setProductos(products);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryName]);

  return (
    <div
      style={{ display: "grid", placeItems: "center" }}
      className={estilos.bodyContainer}
    >
      {loading ? (
        <>
          <RingLoader color="green" size={100} />
        </>
      ) : (
        <>
          <h2 className={estilos.saludo}>{saludo}</h2>
          <ItemList productos={productos} />
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
