import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Categories = () => {
  const { categoria } = useParams();

  useEffect(() => {
    fetch("http://localhost:3000/productos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la respuesta de la red");
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) =>
        console.error("Error al obtener los productos:", error)
      );
  }, []);
  return <>nombre de producto:{categoria}</>;
};

export { Categories };
