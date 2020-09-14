export default function movePlayer(event, player) {
  const KEY = {
    LEFT: 37,
    RIGHT: 39,
    SPACE: 32,
  };

  const offsetExtent = 3;

  if (event.keyCode === KEY.RIGHT) {
    player.offset += offsetExtent;
  }
  if (event.keyCode === KEY.LEFT) {
    player.offset -= offsetExtent;
  }
  return player.offset;
}
