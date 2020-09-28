import React, { useEffect, useRef } from "react";
import {
  gameLoop,
  player,
  /* DIRECTIONS, */ keyState,
  DIRECTIONKEYS,
} from "./GameLoop";
/* import rotatePlayer from "./rotatePlayer"; */

function resizeCanvas(canvas) {
  //based on Ipone 6/7/8
  canvas.width = 375;
  canvas.height = 667;
}

function handleKeyDown(event) {
  /*   const direction = directionKeyCodes[event.code]; */
  keyState[event.code] = true;
  const keyIsStillPressed = event.repeat;

  if (keyState[DIRECTIONKEYS.UP] && !keyIsStillPressed) {
    player.jumping = true;
    setTimeout(() => {
      player.jumping = false;
    }, 300);
  }
  /*   if (direction) {
    rotatePlayer(player, direction);
  } */
}

function handleKeyUp(event) {
  /*   const direction = directionKeyCodes[event.code]; */
  keyState[event.code] = false;
  /*   if (direction && direction === player.direction) {
    rotatePlayer(player, DIRECTIONS.FRONT);
  } */
}

const Game = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    resizeCanvas(canvas);

    gameLoop(canvas);

    window.addEventListener("keydown", handleKeyDown, true);
    window.addEventListener("keyup", handleKeyUp, true);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return <canvas ref={canvasRef} {...props} />;
};

export default Game;
