import { SUMA_ACTION, RESTA_ACTION } from "../action-types";

export const sumar = (numero) => {
  return {
    type: SUMA_ACTION,
    payload: numero,
  };
};

export const restar = (numero) => {
  return {
    type: RESTA_ACTION,
    payload: numero,
  };
};
