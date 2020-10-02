import React from "react";
import EndPage from "../page/EndPage";
import lostInSpaceImageSrc from "./assets/playerJumping.png";
import finishedGameImageSrc from "./assets/asteronautRakete.png";

export default {
  title: "Game/Endscreens",
  component: EndPage,
};

export const LostInSpaceEnding = () => (
  <EndPage
    imageSrc={lostInSpaceImageSrc}
    text="Oh no! The astronaut is lost in space!"
  />
);

export const HappyEnding = () => (
  <EndPage imageSrc={finishedGameImageSrc} text="YAY! The player is safe" />
);
