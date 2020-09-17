export default function drawPlattforms(context) {
  const plattformHeight = 10;

  const plattforms = [
    {
      width: 50,
      left: 10,
      top: 400,
    },
    {
      width: 50,
      left: 100,
      top: 400,
    },
    {
      width: 80,
      left: 300,
      top: 350,
    },
    {
      width: 100,
      left: 100,
      top: 300,
    },
    {
      width: 60,
      left: 10,
      top: 200,
    },
    {
      width: 70,
      left: 100,
      top: 100,
    },
  ];

  context.fillStyle = "#00cc66";
  plattforms.map((plattform) =>
    context.fillRect(
      plattform.left,
      plattform.top,
      plattform.width,
      plattformHeight
    )
  );
}
