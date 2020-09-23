import draw from "./draw";
import drawPlattforms from "./drawPlattforms";
import drawPlayer from "./drawPlayer";
import { PLATTFOMRHEIGHT, plattforms } from "./plattforms";
import calcDistance from "./calcDistance";

function clearCanvas(canvas, context) {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

const physics = {
  friction: 0.7,
  gravity: 1,
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
  top: 200,
  offsetX: 0,
  offsetY: 0,
  jumping: true,
  direction: DIRECTIONS.FRONT,
};

const floor = 500;

export const gameLoop = (canvas) => {
  const context = canvas.getContext("2d");
  clearCanvas(canvas, context);
  draw(context);
  drawPlattforms(context, PLATTFOMRHEIGHT, plattforms);

  drawPlayer(player, context);

  player.offsetX *= physics.friction;
  player.left += player.offsetX;
  player.offsetY += physics.gravity;
  player.top += player.offsetY;

  if (player.top > floor - player.height) {
    player.offsetY = 0;
    player.top = floor - player.height;
    player.jumping = false;
    if (player.direction === DIRECTIONS.JUMPING) {
      player.direction = DIRECTIONS.FRONT;
    }
  }

  plattforms.find((platform) => {
    let distance = calcDistance(player, platform);
    const collisionDistance =
      player.height * player.height +
      (platform.width - player.width) * (platform.width - player.width);
    if ((distance <= collisionDistance) & (player.top < platform.top)) {
      console.log("jumping on plattform");
    }
  });

  requestAnimationFrame(() => gameLoop(canvas));
};
