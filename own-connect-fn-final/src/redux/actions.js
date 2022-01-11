import { CounterActionTypes } from "./types";

export const incrementQty = () => {
  return {
    type: CounterActionTypes.INCREMENT_QTY
  };
}

export const decrementQty = () => {
  return {
    type: CounterActionTypes.DECREMENT_QTY
  };
}