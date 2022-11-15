import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

function Datos() {
  const { buscar, setBuscar, documento, setDocumento, datos, setDatos } =
    useContext(AppContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (documento == 42391606) {
      setBuscar(true);
      setDatos({
        nombre: "Bruno Costa",
        telefono: "154121375",
        categoria: "Principiante",
        email: "brunocosta9@gmail.com",
        nacimiento: "11/08/2000",
        tipoDoc: "DNI",
        doc: "42391606",
      });
    } else {
      setBuscar(false);
      setDatos({
        nombre: "",
        telefono: "",
        categoria: "",
        email: "",
        nacimiento: "",
        tipoDoc: "Tipo documento",
        doc: "",
      });
    }
  };

  return (
    <>
      <div
        class="col-5 d-flex"
        style={{
          padding: "0",
        }}
      >
        <form onSubmit={handleSubmit}>
          <div
            className="d-flex flex-column text-center "
            style={{
              width: "320px",
              height: "100%",
              justifyContent: "space-between",
            }}
          >
            <h1 className="mb-5">Buscar alumno</h1>
            <div>
              <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupSelect01">
                  Tipo Documento
                </label>
                <select class="form-select" id="inputGroupSelect01">
                  <option selected>DNI</option>
                  <option value="1">Pasaporte</option>
                  <option value="2">Libreta civica</option>
                </select>
              </div>
              <input
                type="text"
                class="form-control"
                aria-label="Example text with two button addons"
                placeholder="Numero de documento"
                style={{ marginBottom: "1rem" }}
                value={documento}
                onChange={(e) => {
                  setDocumento(e.target.value);
                }}
              />
              <button type="submit" class="btn btn-primary w-100 mb-2">
                Buscar
              </button>
              {/* Esto no va porque es para el campeonato */}
              {/* <hr /> */}
              {/* <h1 className="mb-4">Registrar alumno</h1>
              <button type="button" class="btn btn-primary w-100 mt-2">
                Registrar nuevo alumno
              </button> */}
            </div>
          </div>
        </form>
      </div>
      <div class="col-7">
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <div className="d-flex flex-column " style={{ width: "350px" }}>
            <h1 className="mb-3">Datos básicos</h1>
          </div>
          <div class="row g-3">
            <InputDatos
              xxl={4}
              lg={6}
              md={12}
              label="nombre"
              nombre={"Nombre y apellido"}
              buscar={buscar}
              value={datos.nombre}
            />
            <InputDatos
              xxl={4}
              lg={6}
              md={12}
              label="celular"
              nombre={"Celular"}
              buscar={buscar}
              value={datos.telefono}
            />
            <InputDatos
              xxl={4}
              lg={6}
              md={12}
              label="categoría"
              nombre={"Categoría"}
              buscar={buscar}
              value={datos.categoria}
            />

            <InputDatos
              xxl={6}
              lg={6}
              md={12}
              label="email"
              nombre={"Email"}
              buscar={buscar}
              value={datos.email}
            />
            <InputDatos
              xxl={6}
              lg={12}
              md={12}
              label="fechanacimiento"
              nombre={"Fecha de nacimiento"}
              buscar={buscar}
              value={datos.nacimiento}
            />
            <div class="col-xxl-6 col-lg-12 col-md-12 mb-4">
              <label for="tipoydocumento" class="form-label">
                Tipo y número de documento
              </label>
              <div class="input-group">
                <label class="input-group-text" for="inputGroupSelect01">
                  {datos.tipoDoc}
                </label>
                <input
                  id="apellido"
                  type="text"
                  class="form-control"
                  disabled
                  value={datos.doc}
                />
              </div>
            </div>
          </div>
          <div className="d-flex w-100 justify-content-end">
            <button
              type="button"
              class="btn btn-primary"
              disabled={!buscar}
              style={{ width: "250px" }}
            >
              Modificar alumno
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

function InputDatos({ xxl, lg, md, label, nombre, buscar, value }) {
  return (
    <div className={`col-xxl-${xxl} col-lg-${lg} col-md-${md}`}>
      <label for={label} class="form-label">
        {nombre}
      </label>
      <input
        id={label}
        type="text"
        class="form-control"
        disabled
        value={value}
      />
    </div>
  );
}

export default Datos;
