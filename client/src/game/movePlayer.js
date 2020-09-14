export default function movePlayer(event, player) {
  const KEY = {
    LEFT: 37,
    RIGHT: 39,
    SPACE: 32,
  };

  if (event.keyCode === KEY.RIGHT) {
    player.speed -= 1;
  }
  if (event.keyCode === KEY.LEFT) {
    player.speed += 1;
  }
  return player.speed;
}
