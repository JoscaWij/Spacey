import playerImageSrc from "./../assets/playerSpriteSheet.png";
import playerImageSrc2 from "./../assets/PlayerOnRocket.png";

const playerImage = new Image();

let srcMesurements = {
  srcWidth: 0,
  srcHeight: 0,
};

function getSrcMeasurements(levelnumber) {
  switch (levelnumber) {
    case "2":
      return (srcMesurements = {
        srcWidth: 200,
        srcHeight: 200,
      });
    default:
      return (srcMesurements = {
        srcWidth: 180,
        srcHeight: 240,
      });
  }
}

export default function drawPlayer(player, context, levelnumber) {
  const { width, height, left, top, direction } = player;

  getSrcMeasurements(levelnumber);
  const startCol = 0;

  switch (levelnumber) {
    case "2":
      playerImage.src = playerImageSrc2;
      break;
    default:
      playerImage.src = playerImageSrc;
  }

  const directionRows = {
    FRONT: 0,
    LEFT: 1,
    RIGHT: 2,
    JUMPING: 3,
  };
  const startRow = directionRows[direction] || directionRows.FRONT;

  const srcX = srcMesurements.srcWidth * startCol;
  const srcY = srcMesurements.srcHeight * startRow;

  context.beginPath();
  context.drawImage(
    playerImage,
    srcX,
    srcY,
    srcMesurements.srcWidth,
    srcMesurements.srcHeight,
    left,
    top,
    width,
    height
  );
  context.fillStyle = "#ff0167";
  context.fill();
  context.closePath();
}
