export default function movePlayer(keyCode, player) {
  const offsetXExtent = 3;
  const offsetYExtent = 16;

  if (keyCode === "ArrowRight") {
    player.offsetX += offsetXExtent;
  }
  if (keyCode === "ArrowLeft") {
    player.offsetX -= offsetXExtent;
  }
  if (keyCode === "Space") {
    console.log("jumping");
    player.offsetY -= offsetYExtent;
  }
  console.log(player.offsetY);
}
