import React from "react";
import styled from "@emotion/styled";
import { PageWrapper } from "../components/PageWrapper";
import EndPage from "./EndPage";
import Gameviewport from "./../game/GameViewport";
import lostInSpaceImageSrc from "../assets/playerJumping.png";
import finishedGameImageSrc from "../assets/asteronautRakete.png";

const GameWrapper = styled(PageWrapper)`
  justify-content: center;
`;

function GamePage() {
  const [isGameFinished, setIsGameFinished] = React.useState(false);
  const [isPlayerLost, setIsPlayerLost] = React.useState(false);
  return (
    <>
      {!isGameFinished && !isPlayerLost && (
        <GameWrapper>
          <Gameviewport
            gameFinished={(state) => setIsGameFinished(state)}
            playerLost={(state) => setIsPlayerLost(state)}
          />
        </GameWrapper>
      )}
      {isGameFinished && (
        <EndPage
          imageSrc={finishedGameImageSrc}
          text="YAY! The player is safe"
        />
      )}
      {isPlayerLost && (
        <EndPage
          imageSrc={lostInSpaceImageSrc}
          text="Oh no! The astronaut is lost in space!"
        />
      )}
    </>
  );
}

export default GamePage;
