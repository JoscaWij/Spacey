export default function movePlayer(keyCode, player) {
  const offsetExtent = 3;

  if (keyCode === "ArrowRight") {
    player.offset += offsetExtent;
  }
  if (keyCode === "ArrowLeft") {
    player.offset -= offsetExtent;
  }
  if (keyCode === "Space") {
    console.log("jumping");
  }
}
