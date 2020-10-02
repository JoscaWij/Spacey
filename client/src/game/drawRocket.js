import rocketImageSrc from "./../assets/rocket.png";

const rocketImage = new Image();
rocketImage.src = rocketImageSrc;

export default function drawRocket(context) {
  context.beginPath();
  context.drawImage(rocketImage, 0, 0, 540, 1130, 230, 110, 50, 100);
  context.fillStyle = "#000";
  context.fill();
  context.closePath();
}
