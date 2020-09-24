import React, { useEffect, useRef } from "react";
import drawPlanetside from "./drawPlanetside";
import { gameLoop, player, DIRECTIONS } from "./GameLoop";
import movePlayer from "./movePlayer";
import rotatePlayer from "./rotatePlayer";

function resizeCanvas(canvas) {
  //based on Ipone 6/7/8
  canvas.width = 375;
  canvas.height = 667;
}

function handleKeyDown(event) {
  movePlayer(event.code, player);
  rotatePlayer(event.code, player, DIRECTIONS);
}

const Game = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    resizeCanvas(canvas);
    drawPlanetside();

    gameLoop(canvas);

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Game;
