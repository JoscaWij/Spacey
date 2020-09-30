import { CANVAS_SIZE } from "./Game";
import { player } from "./GameLoop";

export const VIEWPORT_SIZE = {
  width: 375,
  height: 667,
};

export const calcViewportTopOffset = () => {
  if (player.top > CANVAS_SIZE.height - 0.5 * VIEWPORT_SIZE.height) {
    return -(CANVAS_SIZE.height - VIEWPORT_SIZE.height);
  } else {
    return 100;
  }
};