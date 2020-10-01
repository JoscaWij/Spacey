import drawPlanetside from "./drawPlanetside";
import drawPlattforms from "./drawPlattforms";
import drawPlayer from "./drawPlayer";
import letPlayerStandOnPlatform from "./letPlayerStandOnPlatform";
import { PLATFOMRHEIGHT, platforms } from "./platforms";

function clearCanvas(canvas, context) {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

export const GRAVITY = 7;

export const activeKeys = {};

export const DIRECTION_KEYS = {
  RIGHT: "ArrowRight",
  LEFT: "ArrowLeft",
  UP: "Space",
};

export const DIRECTIONS = {
  FRONT: "FRONT",
  RIGHT: "RIGHT",
  LEFT: "LEFT",
  JUMPING: "JUMPING",
};

export const player = {
  width: 30,
  height: 50,
  left: 10,
  top: 1850,
  oldTop: 200,
  speedX: 150,
  speedY: 400,
  isJumping: false,
  isAbleToJump: false,
  direction: DIRECTIONS.FRONT,
};

const floor = 1980;

let lastDrawingAt = null;

export const gameLoop = (canvas) => {
  const context = canvas.getContext("2d");
  clearCanvas(canvas, context);
  drawPlanetside(canvas, context, floor);
  drawPlattforms(context, PLATFOMRHEIGHT, platforms);

  drawPlayer(player, context);
  if (!lastDrawingAt) {
    lastDrawingAt = Date.now();
  }
  const timeSinceLastDrawing = Date.now() - lastDrawingAt;
  let offsetX = 0;
  if (activeKeys[DIRECTION_KEYS.RIGHT]) {
    offsetX = (player.speedX * timeSinceLastDrawing) / 1000;
  } else if (activeKeys[DIRECTION_KEYS.LEFT]) {
    offsetX = (-player.speedX * timeSinceLastDrawing) / 1000;
  }
  let offsetY = GRAVITY;
  if (player.isJumping) {
    offsetY = (-player.speedY * timeSinceLastDrawing) / 1000;
  }

  player.left += offsetX;
  player.top += offsetY;

  const isPlayerOnFloor = player.top > floor - player.height;

  if (isPlayerOnFloor) {
    player.top = floor - player.height;
    player.isAbleToJump = true;
    if (player.direction === DIRECTIONS.JUMPING) {
      player.direction = DIRECTIONS.FRONT;
    }
  }

  const isPlayerOnPlatform = letPlayerStandOnPlatform(player, platforms);

  if (!isPlayerOnFloor && !isPlayerOnPlatform) {
    player.isAbleToJump = false;
  }

  lastDrawingAt = Date.now();

  requestAnimationFrame(() => gameLoop(canvas));
};
