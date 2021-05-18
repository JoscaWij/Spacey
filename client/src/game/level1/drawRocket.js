import rocketImageSrc from "./../../assets/rocket.png";

const rocketImage = new Image();
rocketImage.src = rocketImageSrc;

export const rocket = {
  left: 230,
  top: 113,
  width: 50,
  height: 100,
};

export default function drawRocket(context) {
  context.beginPath();
  context.drawImage(
    rocketImage,
    0,
    0,
    540,
    1130,
    rocket.left,
    rocket.top,
    rocket.width,
    rocket.height
  );
  context.fillStyle = "#000";
  context.fill();
  context.closePath();
}
