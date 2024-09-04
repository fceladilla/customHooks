import React from "react";
import { useCounter } from "../hooks/useCounter";

export const CounterComponent = () => {
  const { counter, increment, reset, decrement } = useCounter(0);

  return (
    <>
      <h1>Contador</h1>
      <h4>{counter}</h4>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => increment()}
      >
        Increment
      </button>{" "}
      <button type="button" className="btn btn-danger" onClick={() => reset()}>
        Reset
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => decrement()}
      >
        Decrement
      </button>
    </>
  );
};
