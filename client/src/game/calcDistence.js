export function calcDistance(player, obstacle) {
  let topDistance = player.top - obstacle.top;
  let leftDistance = player.left - obstacle.left;

  topDistance *= topDistance;
  leftDistance *= leftDistance;

  return Math.sqrt(topDistance + leftDistance);
}
