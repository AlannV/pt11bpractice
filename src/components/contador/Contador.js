import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { restar, sumar } from "../../redux/actions";
import { Link } from "react-router-dom";

export const Contador = () => {
  const dispatch = useDispatch();

  const num = useSelector((state) => state.numero);

  const suma = () => {
    dispatch(sumar(15));
  };

  const resta = () => {
    dispatch(restar(30));
  };

  return (
    <div>
      <button onClick={resta}>-</button>

      <h1>{num}</h1>

      <button onClick={suma}>+</button>
      <Link to="/formulario">
        <button>ir a formulario</button>
      </Link>
    </div>
  );
};
