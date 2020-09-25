import draw from "./draw";
import drawPlattforms from "./drawPlattforms";
import drawPlayer from "./drawPlayer";
import { PLATTFOMRHEIGHT, plattforms } from "./plattforms";

function clearCanvas(canvas, context) {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

const GRAVITY = 7;

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
  top: 200,
  oldTop: 200,
  speedX: 30,
  speedY: 10,
  jumping: true,
  direction: DIRECTIONS.FRONT,
};

const floor = 500;

let lastDrawingAt = null;

export const gameLoop = (canvas) => {
  const context = canvas.getContext("2d");
  clearCanvas(canvas, context);
  draw(context);
  drawPlattforms(context, PLATTFOMRHEIGHT, plattforms);

  drawPlayer(player, context);
  if (!lastDrawingAt) {
    lastDrawingAt = Date.now();
  }
  const timeSinceLastDrawing = Date.now() - lastDrawingAt;
  let offsetX = 0;
  if (player.direction === DIRECTIONS.RIGHT) {
    offsetX = (player.speedX * timeSinceLastDrawing) / 1000;
  } else if (player.direction === DIRECTIONS.LEFT) {
    offsetX = (-player.speedX * timeSinceLastDrawing) / 1000;
  }
  let offsetY = GRAVITY;
  if (player.direction === DIRECTIONS.JUMPING && player.jumping) {
    offsetY = -player.speedY;
    setTimeout(() => stopPlayerJumping(), 1200);
  }

  player.left += offsetX;
  player.top += offsetY;

  if (player.top > floor - player.height) {
    player.top = floor - player.height;
    player.jumping = false;
    if (player.direction === DIRECTIONS.JUMPING) {
      player.direction = DIRECTIONS.FRONT;
    }
  }

  for (let index = 0; index < plattforms.length; index++) {
    let platform = plattforms[index];

    const isPlayerOnPlatform = checkIfPlayerIsOnPlatform(platform);

    if (isPlayerOnPlatform) {
      player.top = platform.top - player.height;
      player.jumping = false;
      if (player.direction === DIRECTIONS.JUMPING) {
        player.direction = DIRECTIONS.FRONT;
      }
    }
  }

  lastDrawingAt = Date.now();

  requestAnimationFrame(() => gameLoop(canvas));
};
function checkIfPlayerIsOnPlatform(platform) {
  const halfPlayerWidth = 0.5 * player.width;

  return (
    player.top > platform.top - player.height &&
    player.top - player.speedY < platform.top - 0.9 * player.height &&
    player.left > platform.left - halfPlayerWidth &&
    player.left < platform.left + platform.width - halfPlayerWidth
  );
}

const stopPlayerJumping = () => {
  player.jumping = false;
};
