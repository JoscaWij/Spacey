import React, { useEffect, useRef } from "react";
import { useParams } from "react-router";

function resizeCanvas(canvas) {
  canvas.width = document.body.clientWidth;
  canvas.height = window.innerHeight;
}

const Game = () => {
  const canvasRef = useRef(null);

  let { levelnumber } = useParams();

  useEffect(() => {
    const canvas = canvasRef.current;
    resizeCanvas(canvas);

    console.log(levelnumber);
  });

  return <canvas ref={canvasRef} />;
};

export default Game;
