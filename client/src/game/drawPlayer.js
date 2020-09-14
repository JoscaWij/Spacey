export default function drawPlayer(player, context) {
  const { width, height, offsetLeft, offsetTop } = player;
  context.fillStyle = "#ff0167";
  context.fillRect(offsetLeft, offsetTop, width, height);
}
