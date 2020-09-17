export default function drawPlattforms(context) {
  const plattform = {
    width: 50,
    height: 10,
    left: 10,
    top: 400,
  };

  context.fillStyle = "#00cc66";
  context.fillRect(
    plattform.left,
    plattform.top,
    plattform.width,
    plattform.height
  );
}
