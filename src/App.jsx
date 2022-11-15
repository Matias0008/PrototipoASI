import Datos from "./components/Datos";
import Nav from "./components/Nav";
import Turnos from "./components/Turnos";
import Campeonato from "./components/Campeonato";

import { createContext, useState } from "react";

export const AppContext = createContext();

function App() {
  const [buscar, setBuscar] = useState(false);
  const [documento, setDocumento] = useState("");
  const [datos, setDatos] = useState({
    nombre: "",
    telefono: "",
    categoria: "",
    email: "",
    nacimiento: "",
    tipoDoc: "Tipo documento",
    doc: "",
  });

  return (
    <>
      <AppContext.Provider
        value={{ buscar, setBuscar, documento, setDocumento, datos, setDatos }}
      >
        <>
          <Nav />
          <div
            className="container d-flex flex-column justify-content-between"
            style={{
              paddingTop: "1.5rem",
              minHeight: "96vh",
              paddingLeft: "250px",
              paddingRight: "",
            }}
          >
            <div
              class="row"
              style={{
                paddingBottom: "13px",
              }}
            >
              <Datos />
            </div>
            <hr></hr>
            <div className="row">
              <Campeonato />
              {/* <Turnos /> */}
            </div>
          </div>
        </>
      </AppContext.Provider>
    </>
  );
}

export default App;
