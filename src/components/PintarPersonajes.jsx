import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const PintarPersonajes = ({ nombre }) => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    consumirApi(nombre);
  }, [nombre]);

  const consumirApi = async (nombre) => {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`
      );
      if (!res.ok) {
        return Swal.fire({
          title: "Error!",
          text: "Personaje no encontrado",
          icon: "error",
        });
      }

      const datos = await res.json();
      console.log(datos.results);
      setPersonajes(datos.results);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return (
    <div className="container">
      <h2>{nombre}</h2>
    </div>
  );
};

export default PintarPersonajes;
