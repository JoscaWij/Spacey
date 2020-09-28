import checkIfPlayerIsOnPlatform from "./checkIfPlayerIsOnPlatform";
import { DIRECTIONS } from "./GameLoop";

const isPlayerOnAnyPlatform = (player, plattforms) => {
  for (let index = 0; index < plattforms.length; index++) {
    let platform = plattforms[index];

    const isPlayerOnPlatform = checkIfPlayerIsOnPlatform(platform);

    if (isPlayerOnPlatform) {
      player.top = platform.top - player.height;
      player.isAbleToJump = true;
      if (player.direction === DIRECTIONS.JUMPING) {
        player.direction = DIRECTIONS.FRONT;
      }
    }
  }
};

export default isPlayerOnAnyPlatform;
