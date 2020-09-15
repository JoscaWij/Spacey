export default function movePlayer(keyCode, player) {
  const offsetExtent = 3;

  if (keyCode === "ArrowRight") {
    player.offsetX += offsetExtent;
  }
  if (keyCode === "ArrowLeft") {
    player.offsetX -= offsetExtent;
  }
  if (keyCode === "Space") {
    console.log("jumping");
  }
}
