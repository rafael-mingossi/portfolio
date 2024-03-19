"use client";
import React from "react";

const Error = ({ error, reset }: any) => {
  return (
    <div>
      {error.message}
      {/*///// RESET IS USED TO RETRY THE FETCH /////*/}
      <button onClick={reset}>Retry</button>
    </div>
  );
};

export default Error;
