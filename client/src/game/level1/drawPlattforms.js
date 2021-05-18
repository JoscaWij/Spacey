import platformImageSrc from "./../../assets/asteroid.png";

const platformImage = new Image();
platformImage.src = platformImageSrc;

export default function drawPlattforms(context, PLATTFOMRHEIGHT, plattforms) {
  context.beginPath();
  plattforms.map((plattform) =>
    context.drawImage(
      platformImage,
      0,
      0,
      825,
      346,
      plattform.left,
      plattform.top,
      plattform.width,
      PLATTFOMRHEIGHT
    )
  );
  context.fillStyle = "#00cc66";
  context.fill();
  context.closePath();
}
