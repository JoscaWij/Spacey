import backgroundImageSrc from "./../assets/backgroundImage.png";

const backgroundImage = new Image();
backgroundImage.src = backgroundImageSrc;

export default function draw(context) {
  context.beginPath();
  context.drawImage(
    backgroundImage,
    0,
    0,
    800,
    1280,
    0,
    0,
    context.canvas.width,
    context.canvas.height
  );
  context.fillStyle = "#000000";
  context.fill();
  context.closePath();

  //floor
  context.fillStyle = "#ff0167";
  context.fillRect(0, 500, context.canvas.width, 4);
}
