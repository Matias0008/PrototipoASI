import React from "react";
import Logo from "../images/workout.png";
import "./Nav.css";

function Nav() {
  return (
    <nav
      id="sidebarMenu"
      class="collapse sidebar collapse bg-white"
      style={{
        padding: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        alignItems: "center",
      }}
    >
      <img
        src={Logo}
        alt="Logo workout"
        style={{
          width: "150px",
          height: "150px",
        }}
      />
      <h1
        style={{
          fontSize: "3.2rem",
          marginBottom: 0,
        }}
      >
        Workout
      </h1>
      <p
        style={{
          marginTop: "-5px",
        }}
      >
        Academia de calistenia
      </p>
      <div class="position-sticky">
        <div class="list-group list-group-flush mx-3 mt-4">
          <a
            href="#"
            class="list-group-item list-group-item-action py-2 ripple"
            aria-current="true"
          >
            <span>Panel principal</span>
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action py-2 ripple"
          >
            <span>Registrar inscripcion</span>
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action py-2 ripple active"
          >
            <span>Registrar Inscripcion a Campeonato</span>
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action py-2 ripple"
          >
            <span>Registrar alumno</span>
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action py-2 ripple"
          >
            <span>Analiticas</span>
          </a>
          <a
            href="#"
            class="list-group-item list-group-item-action py-2 ripple"
          >
            <span>SEO</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
