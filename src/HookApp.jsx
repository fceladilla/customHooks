import React from "react";

import { FetchApp } from "./components/FetchApp";
import { CounterApp } from "./components/CounterApp";
import { FormsApp } from "./components/FormsApp";

export const HookApp = () => {
  return (
    <>
      <h1>Aplicacion de Hooks</h1>
      <hr />
      <h2>lista de usuarios:</h2>
      <FetchApp />
      <hr />
      <CounterApp />
      <hr />
      <FormsApp />
    </>
  );
};
