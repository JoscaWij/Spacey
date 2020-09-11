import React, { useRef } from "react";

const Game = (props) => {
  const canvasRef = useRef(null);

  return <canvas ref={canvasRef} {...props} />;
};

export default Game;
