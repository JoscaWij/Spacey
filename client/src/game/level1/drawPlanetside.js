import planetsideImageSrc from "./../../assets/planet.png";

const planetsideImage = new Image();
planetsideImage.src = planetsideImageSrc;

export default function drawPlanetside(canvas, context, floor) {
  const planetsideTop = floor - 40;
  const planetsideHeight = canvas.height - planetsideTop;
  context.beginPath();
  context.drawImage(
    planetsideImage,
    0,
    0,
    1030,
    147,
    0,
    planetsideTop,
    canvas.width,
    planetsideHeight
  );
  context.fillStyle = "#000";
  context.fill();
  context.closePath();
}
