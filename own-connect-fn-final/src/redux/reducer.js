import { CounterActionTypes } from "./types";

const INITIAL_STATE = {
  counterValue: 0
}

const reducer = (state=INITIAL_STATE, action) => {
  const { type } = action;
  switch(type) {
    case CounterActionTypes.INCREMENT_QTY: 
      return {
        ...state,
        counterValue: state.counterValue + 1
      };
    case CounterActionTypes.DECREMENT_QTY:
      return {
        ...state,
        counterValue: state.counterValue - 1
      };
    default:
      return state;
  }
}

export default reducer;