import React, { useEffect, useRef } from "react";
import draw from "./Draw";

const Game = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    draw(context);
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Game;
