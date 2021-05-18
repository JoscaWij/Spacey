import { GRAVITY, player } from "./GameLoop";

export default function checkIfPlayerIsOnPlatform(platform) {
  const halfPlayerWidth = 0.5 * player.width;
  const playerTopOnLastDrawing =
    player.top - player.offSetY || player.top - GRAVITY;

  const playerFallsIntoPlatformRec = player.top > platform.top - player.height;

  const halfPlayerisMoreLeftThanLeftPlatformEdge =
    player.left > platform.left - halfPlayerWidth;

  const halfPlayerIsLessLeftThanRightPlatformEdge =
    player.left < platform.left + platform.width - halfPlayerWidth;

  const playerOnLastDrawingIs90PercentAbovePlatform =
    playerTopOnLastDrawing < platform.top - 0.9 * player.height;

  return (
    playerFallsIntoPlatformRec &&
    playerOnLastDrawingIs90PercentAbovePlatform &&
    halfPlayerisMoreLeftThanLeftPlatformEdge &&
    halfPlayerIsLessLeftThanRightPlatformEdge
  );
}
