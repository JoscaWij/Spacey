import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import {
  gameLoop,
  player,
  activeKeys,
  DIRECTION_KEYS,
  DIRECTIONS,
} from "./GameLoop";
import rotatePlayer from "../rotatePlayer";
import { animation } from "./GameViewport";

export const CANVAS_SIZE = {
  width: 375,
  height: 2000,
};

const camera = {
  speed: 44.43,
  /* speed: (- VIEWPORT_SIZE.height + CANVAS_SIZE.height)/animation.duration, */
  bottom: CANVAS_SIZE.height,
  offsetY: 0,
  scrolling: false,
};

function resizeCanvas(canvas) {
  //based on Ipone 6/7/8
  canvas.width = CANVAS_SIZE.width;
  canvas.height = CANVAS_SIZE.height;
}

const directionKeyCodes = {
  [DIRECTION_KEYS.RIGHT]: DIRECTIONS.RIGHT,
  [DIRECTION_KEYS.LEFT]: DIRECTIONS.LEFT,
  [DIRECTION_KEYS.UP]: DIRECTIONS.JUMPING,
};

function handleKeyDown(event) {
  if (directionKeyCodes[event.code]) {
    activeKeys[event.code] = true;
    const direction = directionKeyCodes[event.code];
    if (direction) {
      rotatePlayer(player, direction);
    }

    if (activeKeys[DIRECTION_KEYS.UP] && player.isAbleToJump) {
      player.isJumping = true;
      player.isAbleToJump = false;
      setTimeout(() => {
        player.isJumping = false;
      }, 300);
    }
  }
}

function handleKeyUp(event) {
  if (directionKeyCodes[event.code]) {
    activeKeys[event.code] = false;
    const direction = directionKeyCodes[event.code];
    if (direction && direction === player.direction) {
      rotatePlayer(player, DIRECTIONS.FRONT);
    }
  }
}

const Game = ({
  isGameFinished,
  isPlayerLost,
  finishGame,
  playerLoses,
  resetGame,
  restartGame,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    resizeCanvas(canvas);

    const timeout =
      animation.duration * (animation.scrollStartPercentage / 100) * 1000;
    setTimeout(() => {
      camera.scrolling = true;
    }, timeout);

    gameLoop(
      canvas,
      finishGame,
      playerLoses,
      camera,
      resetGame,
      restartGame,
      timeout
    );

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [
    isGameFinished,
    isPlayerLost,
    finishGame,
    playerLoses,
    resetGame,
    restartGame,
  ]);

  return <canvas ref={canvasRef} />;
};

export default Game;

Game.propTypes = {
  isGameFinished: PropTypes.bool,
  isPlayerLost: PropTypes.bool,
  finishGame: PropTypes.func,
  playerLoses: PropTypes.func,
  resetGame: PropTypes.bool,
  restartGame: PropTypes.func,
};
