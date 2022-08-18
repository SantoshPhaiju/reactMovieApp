import React from "react";
import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [color, setColor] = useState("white");
  const style = {
    backgroundColor: color,
  };

  const getColor = (color) => {
    setColor(color);
  };
  return (
    <>
      <div className="container">
        <div className="box" style={style}></div>

        <Child getColor={getColor} />
      </div>
    </>
  );
};

export default Parent;
