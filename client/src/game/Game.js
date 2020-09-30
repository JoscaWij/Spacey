import React, { useEffect, useRef } from "react";
import {
  gameLoop,
  player,
  activeKeys,
  DIRECTION_KEYS,
  DIRECTIONS,
} from "./GameLoop";
import rotatePlayer from "./rotatePlayer";
import styled from "@emotion/styled";

export const CANVAS_SIZE = {
  width: 375,
  height: 1500,
};

function resizeCanvas(canvas, CANVAS_SIZE) {
  //based on Ipone 6/7/8
  /*   canvas.width = 375;
  canvas.height = 667; */

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

const Game = (props) => {
  const [viewportTopPosition, setViewportTopPosition] = React.useState("300px");
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    resizeCanvas(canvas, CANVAS_SIZE);

    gameLoop(canvas, setViewportTopPosition);
    console.log(viewportTopPosition);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [viewportTopPosition]);

  return <GameCanvas ref={canvasRef} top={viewportTopPosition} />;
};

export default Game;

const GameCanvas = styled.canvas`
  background: #fff;
  position: relative;
  top: ${(props) => `${props.top}px`};
`;
