export default function movePlayer(event) {
  const KEY = {
    LEFT: 37,
    RIGHT: 39,
    SPACE: 32,
  };

  if (event.keyCode === KEY.RIGHT) {
    console.log("walking right");
  }
  if (event.keyCode === KEY.LEFT) {
    console.log("walking left");
  }
  return;
}
