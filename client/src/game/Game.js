import React, { useEffect, useRef } from "react";
import { useParams } from "react-router";
import { gameLoop2 } from "./level2/GameLoop2";

function resizeCanvas(canvas) {
  canvas.width = document.body.clientWidth;
  canvas.height = window.innerHeight;
}

function chooseGameLoop(levelnumber, canvas) {
  switch (levelnumber) {
    case "2":
      return gameLoop2(canvas, levelnumber);
    default:
      return console.error("No gameloop found for this level");
  }
}

const Game = () => {
  const canvasRef = useRef(null);

  let { levelnumber } = useParams();

  useEffect(() => {
    const canvas = canvasRef.current;
    resizeCanvas(canvas);
    chooseGameLoop(levelnumber, canvas);
  });

  return <canvas ref={canvasRef} />;
};

export default Game;
