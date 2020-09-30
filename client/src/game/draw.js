import backgroundImageSrc from "./../assets/backgroundImage.png";

const backgroundImage = new Image();
backgroundImage.src = backgroundImageSrc;

export default function draw(context, floor) {
  //floor
  context.fillStyle = "#ff0167";
  context.fillRect(0, floor, context.canvas.width, 4);
}
