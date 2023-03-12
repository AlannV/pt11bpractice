import { SUMA_ACTION, RESTA_ACTION } from "../action-types";

const initialState = {
  numero: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUMA_ACTION:
      return {
        ...state,
        numero: state.numero + action.payload,
      };
    case RESTA_ACTION:
      return {
        ...state,
        numero: state.numero - action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
