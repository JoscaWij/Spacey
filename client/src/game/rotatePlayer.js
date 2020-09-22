export default function rotatePlayer(keyCode, player, DIRECTIONS) {
  if (keyCode === "ArrowRight") {
    player.direction = DIRECTIONS.RIGHT;
  } else if (keyCode === "ArrowLeft") {
    player.direction = DIRECTIONS.LEFT;
  } else if (keyCode === "Space") {
    player.direction = DIRECTIONS.JUMPING;
  }
}
