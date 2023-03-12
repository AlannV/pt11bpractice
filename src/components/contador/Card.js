import React from "react";
import { Link } from "react-router-dom";

export const Card = () => {
  return (
    <div>
      Card
      <Link to="/formulario">
        <button>Ir a Formulario</button>
      </Link>
    </div>
  );
};
