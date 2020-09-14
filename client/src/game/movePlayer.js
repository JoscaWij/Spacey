export default function movePlayer(event, player) {
  const KEY = {
    LEFT: 37,
    RIGHT: 39,
    SPACE: 32,
  };

  const speedChange = 1.2;

  if (event.keyCode === KEY.RIGHT) {
    player.speed += speedChange;
  }
  if (event.keyCode === KEY.LEFT) {
    player.speed -= speedChange;
  }
  return player.speed;
}
