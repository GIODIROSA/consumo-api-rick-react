import { useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario";
import PintarPersonajes from "./components/PintarPersonajes";

function App() {
  const [nombre, setNombre] = useState("");

  // pendiente
  // useEffect(() => {
  //   if (localStorage.getItem("nombreApi")) {
  //     setNombre(JSON.parse(localStorage.getItem("nombreApi")));
  //   }
  //    localStorage.setItem("nombreApi", JSON.stringify(nombre));
  // }, [nombre]);

  return (
    <div className="container">
      <h1>Aplicación de Rick and Morty</h1>
      <Formulario setNombre={setNombre} />
      <div className="container">
        <button className="btn btn-success mt-2" onClick={() => setNombre("")}>
          Reiniciar
        </button>
      </div>

      <PintarPersonajes nombre={nombre} />
    </div>
  );
}

export default App;
