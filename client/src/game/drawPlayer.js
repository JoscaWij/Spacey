import playerImageSrc from "./../assets/playerSpriteSheet.png";
import playerImageSrc2 from "./../assets/PlayerOnRocket.png";

const playerImage = new Image();

export default function drawPlayer(player, context, levelnumber) {
  const { width, height, left, top, direction } = player;

  console.log(levelnumber);
  switch (levelnumber) {
    case "2":
      playerImage.src = playerImageSrc2;
      break;
    default:
      playerImage.src = playerImageSrc;
  }

  const srcWidth = 180;
  const srcHeight = 240;
  const startCol = 0;

  const directionRows = {
    FRONT: 0,
    LEFT: 1,
    RIGHT: 2,
    JUMPING: 3,
  };
  const startRow = directionRows[direction] || directionRows.FRONT;

  const srcX = srcWidth * startCol;
  const srcY = srcHeight * startRow;

  context.beginPath();
  context.drawImage(
    playerImage,
    srcX,
    srcY,
    srcWidth,
    srcHeight,
    left,
    top,
    width,
    height
  );
  context.fillStyle = "#ff0167";
  context.fill();
  context.closePath();
}
