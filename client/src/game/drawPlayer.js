export default function drawPlayer(player, context) {
  const { width, height, left, top } = player;
  context.fillStyle = "#ff0167";
  context.fillRect(left, top, width, height);
}
