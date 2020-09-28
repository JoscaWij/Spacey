import { DIRECTIONKEYS, DIRECTIONS } from "./GameLoop";

export default function rotatePlayer(player, keyState) {
  console.log(keyState);
  switch (keyState) {
    case DIRECTIONKEYS.UP:
      player.direction = DIRECTIONS.JUMPING;
      break;
    case DIRECTIONKEYS.RIGHT:
      player.direction = DIRECTIONS.RIGHT;
      break;
    case DIRECTIONKEYS.LEFT:
      player.direction = DIRECTIONS.LEFT;
      break;
    default:
      player.direction = DIRECTIONS.FRONT;
      break;
  }
}
