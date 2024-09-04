import React from "react";

export const IncrementComponent = React.memo(({ increment }) => {
  console.log("Me estoy redibujando");

  return (
    <>
      <button className="btn btn-danger" onClick={() => increment(1)}>
        Incrementar+1
      </button>
    </>
  );
});
