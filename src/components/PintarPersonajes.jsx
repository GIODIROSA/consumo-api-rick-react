import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Personaje from "../components/Personaje";

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
      <div className="row mt-2">
        {personajes.map((item) => (
          <Personaje key={item.id} personaje={item} />
        ))}
      </div>
    </div>
  );
};

export default PintarPersonajes;
