import React, { useEffect, useRef } from "react";
import { gameLoop, player, DIRECTIONS } from "./GameLoop";
import rotatePlayer from "./rotatePlayer";

function resizeCanvas(canvas) {
  //based on Ipone 6/7/8
  canvas.width = 375;
  canvas.height = 667;
}

const directionKeyCodes = {
  ArrowRight: DIRECTIONS.RIGHT,
  ArrowLeft: DIRECTIONS.LEFT,
  Space: DIRECTIONS.JUMPING,
};

function handleKeyDown(event) {
  const direction = directionKeyCodes[event.code];
  if (direction) {
    rotatePlayer(player, direction);
  }
}

function handleKeyUp(event) {
  const direction = directionKeyCodes[event.code];
  if (direction && direction === player.direction) {
    rotatePlayer(player, DIRECTIONS.FRONT);
  }
}

const Game = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    resizeCanvas(canvas);

    gameLoop(canvas);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Game;
