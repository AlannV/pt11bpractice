import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Formulario = () => {
  let numero = useSelector((state) => state.numero);
  return (
    <div>
      Formulario
      {numero}
      <Link to="/contador">
        <button>Ir a contador</button>
      </Link>
    </div>
  );
};
