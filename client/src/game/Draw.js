export default function draw(context) {
  context.fillStyle = "#000000";
  context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  context.fillStyle = "#ff0167";
  context.fillRect(30, 30, 30, 30);
}
