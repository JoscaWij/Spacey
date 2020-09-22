import backgroundImageSrc from "./../assets/backgroundImage.png";

const backgroundImage = new Image();
backgroundImage.src = backgroundImageSrc;

export default function draw(context) {
  //floor
  context.fillStyle = "#ff0167";
  context.fillRect(0, 500, context.canvas.width, 4);
}
