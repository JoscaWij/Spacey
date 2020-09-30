export default function drawPlattforms(context, PLATTFOMRHEIGHT, plattforms) {
  context.fillStyle = "#00cc66";
  plattforms.map((plattform) =>
    context.fillRect(
      plattform.left,
      plattform.top,
      plattform.width,
      PLATTFOMRHEIGHT
    )
  );
}
