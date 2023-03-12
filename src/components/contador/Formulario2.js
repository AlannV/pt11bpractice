import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Prueba } from "./Prueba";

export const Formulario2 = () => {
  const [form, setForm] = useState({
    nombre: "",
    password: "",
    edad: 0,
    opciones: "",
    descripcion: "",
  });

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  console.log(form);

  return (
    <div>
      Formulario
      <form>
        <input type="text" name="nombre" onChange={(e) => handleInput(e)} />

        <input
          type="password"
          name="password"
          onChange={(e) => handleInput(e)}
        />

        <input type="number" name="edad" onChange={(e) => handleInput(e)} />

        <select name="opciones" onChange={(e) => handleInput(e)}>
          <option value="opcion 1">opcion uno</option>
          <option value="opcion 2">opcion dos</option>
          <option value="opcion 3">opcion tres</option>
        </select>

        <input
          type="textarea"
          name="descripcion"
          onChange={(e) => handleInput(e)}
        />
      </form>
      <Prueba name="alan" lastName="vargas" />
      <Link to="/contador">
        <button>Ir a contador</button>
      </Link>
    </div>
  );
};
