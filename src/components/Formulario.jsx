import React from "react";
import { useFormulario } from "../hooks/useFormulario";

import Swal from "sweetalert2";

const Formulario = ({ setNombre }) => {
  const [inputs, handleChange, reset] = useFormulario({
    nombre: "",
  });

  const { nombre } = inputs;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre.trim()) {
      return Swal.fire({
        title: "Error!",
        text: "Nombre obligatorio",
        icon: "error",
      });
    }

    setNombre(nombre.trim().toLowerCase());

    reset();
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-2"
            name="nombre"
            placeholder="Ingresa el personaje"
            value={nombre}
            onChange={handleChange}
          />
          <button className="btn btn-info" type="submit">
            Buscar
          </button>
        </form>
      </div>
    </>
  );
};

export default Formulario;
