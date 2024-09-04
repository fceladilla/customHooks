import React from "react";

import { FetchComponent } from "./components/FetchComponent";
import { CounterComponent } from "./components/CounterComponent";
import { FormsComponent } from "./components/FormsComponent";
import { CalculoPesadoComponent } from "./components/CalculoPesadoComponent";
import { CallbackComponent } from "./components/CallbackComponent";

export const HookApp = () => {
  return (
    <>
      {/* <h1>Aplicacion de Hooks</h1>
      <hr />
      <h2>lista de usuarios:</h2>
      <FetchComponent />
      <hr />
      <CounterComponent />
      <hr />
      <FormsComponent />
      <hr />
      <CalculoPesadoComponent />
      <hr /> */}
      <CallbackComponent />
    </>
  );
};
