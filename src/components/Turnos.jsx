import React, { useMemo, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

function Turnos() {
  let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
  let profesores = [
    "Ronnie Coleman",
    "Chris Bumstead",
    "Andrea Larosa",
    "Arnold Schwarzenegger",
    "Phil Heath",
  ];
  let horarios = [
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];
  const [selected, setSelected] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  let hoy = new Date();
  let ahora = hoy.toLocaleString();
  const { buscar, datos } = useContext(AppContext);
  let titulo_disabled = !buscar ? "mb-4 disabled" : "mb-4";
  let titulo = buscar
    ? `Turnos disponibles: ${datos.categoria}`
    : "Turnos disponibles";

  return (
    <>
      <div
        className="d-flex justify-content-between align-items-center"
        style={{
          padding: 0,
        }}
      >
        <h1
          style={{
            padding: 0,
          }}
          className={titulo_disabled}
        >
          {titulo}
        </h1>
        <h3>{ahora}</h3>
      </div>

      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Dia</th>
            <th scope="col">Hora</th>
            <th scope="col">Profesor</th>
          </tr>
        </thead>
        <tbody>
          {dias.map((dia, index) => {
            let elegido =
              profesores[Math.floor(Math.random() * profesores.length)];
            return (
              <tr>
                <th scope="row">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                      disabled={!buscar}
                      onClick={() => {
                        setSelected({ ...selected, [index]: !selected[index] });
                      }}
                    />
                  </div>
                </th>
                <td>{dia}</td>
                <td>
                  {
                    <Select
                      horarios={horarios}
                      selected={selected}
                      setSelected={setSelected}
                      index={index}
                    />
                  }
                </td>
                <td>{elegido}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div
        className="d-flex w-100 justify-content-between"
        style={{ padding: 0 }}
      >
        <button
          type="button"
          class="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          style={{
            width: "250px",
          }}
        >
          Cancelar
        </button>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
          style={{
            width: "250px",
          }}
        >
          Registrar cobro
        </button>

        <div
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">
                  Registrar cobro
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="d-flex" style={{ gap: "60px" }}>
                  <div
                    class="d-flex flex-column"
                    style={{ flexGrow: "1", width: "50px" }}
                  >
                    <label for="exampleFormControlInput1" class="form-label">
                      N° Factura
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      value="5"
                      disabled={!buscar}
                    />
                  </div>
                  <div
                    class="d-flex flex-column justify-content-end mb-3"
                    style={{ width: "330px" }}
                  >
                    <label for="exampleFormControlInput1" class="form-label">
                      Fecha de cobro
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      value="14/11/2022 14:45"
                      disabled={!buscar}
                    />
                  </div>
                </div>

                <div class="d-flex" style={{ gap: "60px" }}>
                  <div
                    class="d-flex flex-column"
                    style={{ flexGrow: "1", width: "50px" }}
                  >
                    <label for="exampleFormControlInput1" class="form-label">
                      Monto
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      value="$5000"
                      disabled={!buscar}
                    />
                  </div>
                  <div
                    class="d-flex flex-column justify-content-end mb-3"
                    style={{ width: "330px" }}
                  >
                    <label for="exampleFormControlInput1" class="form-label">
                      Metodo de cobro
                    </label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected value="1">
                        Efectivo
                      </option>
                      <option value="2">Tarjeta de debito/credito</option>
                      <option value="3">Transferencia</option>
                      <option value="3">Codigo QR</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancelar
                </button>

                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModalToggle2"
                  href="#factura"
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="exampleModalToggle2"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel2"
          tabindex="-1"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">
                  Factura
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">Aca imprimimos la factura</div>
              <div class="modal-footer">
                <button
                  class="btn btn-primary"
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                >
                  Imprimir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Turnos;

function Select({ horarios, selected, setSelected, index }) {
  const { buscar } = useContext(AppContext);
  let disabled = selected[index] && buscar;
  console.log(disabled);
  return (
    <select
      class="form-select"
      aria-label="Seleccionar un horario"
      style={{ width: "150px" }}
      disabled={!disabled}
    >
      <option selected>Seleccionar</option>
      {horarios.map((horario) => {
        return <option value={horario}>{horario}</option>;
      })}
    </select>
  );
}
