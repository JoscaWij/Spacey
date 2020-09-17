export default function drawPlattforms(context) {
  const plattforms = [
    {
      width: 50,
      height: 10,
      left: 10,
      top: 400,
    },
    {
      width: 50,
      height: 10,
      left: 100,
      top: 400,
    },
  ];

  context.fillStyle = "#00cc66";
  plattforms.map((plattform) =>
    context.fillRect(
      plattform.left,
      plattform.top,
      plattform.width,
      plattform.height
    )
  );
}
