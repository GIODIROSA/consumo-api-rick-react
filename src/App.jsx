import { useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario";
import PintarPersonajes from "./components/PintarPersonajes";


function App() {
  const [nombre, setNombre] = useState("");

  return (
    <div className="container">
      <h1>Aplicación de Rick and Morty</h1>
      <Formulario setNombre={setNombre} />
      <button className="btn btn-success mt-2" onClick={() => setNombre("")}>
        Reiniciar
      </button>
      <PintarPersonajes nombre={nombre} />
      
    </div>
  );
}

export default App;
