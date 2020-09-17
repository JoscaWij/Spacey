export default function rotatePlayer(keyCode, player) {
  if (keyCode === "ArrowRight") {
    player.direction = "RIGHT";
  } else if (keyCode === "ArrowLeft") {
    player.direction = "LEFT";
  } else if (keyCode === "Space") {
    player.direction = "JUMPING";
  }
}
