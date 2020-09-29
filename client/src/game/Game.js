import React, { useEffect, useRef } from "react";
import {
  gameLoop,
  player,
  keyState,
  DIRECTION_KEYS,
  DIRECTIONS,
} from "./GameLoop";
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
  keyState[event.code] = true;
  const direction = directionKeyCodes[event.code];
  if (direction) {
    rotatePlayer(player, direction);
  }

  if (keyState[DIRECTION_KEYS.UP] && player.isAbleToJump) {
    player.isJumping = true;
    player.isAbleToJump = false;
    setTimeout(() => {
      player.isJumping = false;
    }, 300);
  }
}

function handleKeyUp(event) {
  keyState[event.code] = false;
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
