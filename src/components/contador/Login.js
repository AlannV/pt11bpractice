import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div>
      Login
      <input />
      <input />
      <Link to="/contador">
        <button>Ingresar al sitio</button>
      </Link>
    </div>
  );
};
