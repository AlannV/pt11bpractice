import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Prueba } from "./Prueba";

export const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [edad, setEdad] = useState(0);
  const [select, setSelect] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleNombre = (e) => {
    setNombre(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleEdad = (e) => {
    setEdad(e.target.value);
  };

  const handleOpcion = (e) => {
    setSelect(e.target.value);
  };

  const handleDescripcion = (e) => {
    setDescripcion(e.target.value);
  };

  console.log(nombre);
  console.log(password);
  console.log(edad);
  console.log(select);
  console.log(descripcion);

  return (
    <div>
      Formulario
      <form>
        <input
          type="text"
          name="nombre"
          onChange={(e) => handleNombre(e)}
          placeholder="ingrese su nombre"
        />

        <input
          type="password"
          name="password"
          onChange={(e) => handlePassword(e)}
          placeholder="ingrese su contraseña"
        />

        <input
          type="number"
          name="edad"
          placeholder="ingrese su edad"
          onChange={(e) => handleEdad(e)}
        />

        <select name="opciones" onChange={(e) => handleOpcion(e)}>
          <option value="opcion 1">opcion uno</option>
          <option value="opcion 2">opcion dos</option>
          <option value="opcion 3">opcion tres</option>
        </select>

        <input
          type="textarea"
          name="descripcion"
          placeholder="ingrese una descripcion"
          onChange={(e) => handleDescripcion(e)}
        />
      </form>
      <Prueba name="alan" lastName="vargas" />
      <Link to="/contador">
        <button>Ir a contador</button>
      </Link>
    </div>
  );
};
