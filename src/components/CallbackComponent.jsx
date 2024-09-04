import React, { useCallback } from "react";
import { IncrementComponent } from "./IncrementComponent";
import { useState } from "react";

export const CallbackComponent = () => {
  const [counter, setCounter] = useState(0);

  const incrementarPadre = useCallback((val) => {
    setCounter((c) => c + val);
  }, []);

  return (
    <>
      <h1>Contador: {counter}</h1>
      <IncrementComponent increment={incrementarPadre} />
    </>
  );
};
