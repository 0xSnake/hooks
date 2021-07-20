import React, { useState, useEffect, useRef } from "react";

const useClick = (onClick) => {
  // if (typeof onClick !== "function") {
  //   return;
  // }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  });
  return element;
};

const App = () => {
  const sayhello = () => console.log("Hello");
  const title = useClick(sayhello);
  return (
    <div>
      <h1 ref={title}>Hello</h1>
    </div>
  );
};

export default App;