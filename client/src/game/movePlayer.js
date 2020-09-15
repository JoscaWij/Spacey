export default function movePlayer(keyCode, player) {
  const KEY = {
    LEFT: 37,
    RIGHT: 39,
    SPACE: 32,
  };

  const offsetExtent = 3;

  if (keyCode === KEY.RIGHT) {
    player.offset += offsetExtent;
  }
  if (keyCode === KEY.LEFT) {
    player.offset -= offsetExtent;
  }
}
