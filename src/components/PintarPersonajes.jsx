import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Personaje from "../components/Personaje";
import Loading from "./Loading";

const PintarPersonajes = ({ nombre }) => {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    consumirApi(nombre);
  }, [nombre]);

  const consumirApi = async (nombre) => {
    setLoading(true);
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
      //console.log(datos.results);
      //para traerse los antiguos datos y los nuevos
      // setPersonajes((old) => [...old,...datos.results]);
      // para cambiar el orden
      //setPersonajes((old) => [...datos.results,...old]);
      setPersonajes(datos.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }
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
