import { rocket } from "./level1/drawRocket";

export default function checkIfPlayerIsByRocket(player) {
  const playerCollidesOnXAchses =
    player.left + player.width > rocket.left &&
    player.left < rocket.left + rocket.width;
  const playerCollidesOnYAchses =
    player.top + player.height < rocket.top + rocket.height &&
    player.top > rocket.top;
  return playerCollidesOnXAchses && playerCollidesOnYAchses;
}
