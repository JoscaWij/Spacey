import React from "react";
import styled from "@emotion/styled";
import { PageWrapper } from "../components/PageWrapper";
import EndPage from "./EndPage";
import Gameviewport from "./../game/GameViewport";
import lostInSpaceImageSrc from "../assets/playerJumping.png";
import finishedGameImageSrc from "../assets/asteronautRakete.png";
import BackToMenuButton from "../components/BackToMenuButton";

const GameWrapper = styled(PageWrapper)`
  justify-content: center;
`;

function GamePage() {
  const [isPlayerLost, setIsPlayerLost] = React.useState(false);
  const [isGameFinished, setIsGameFinished] = React.useState(false);
  return (
    <>
      {!isGameFinished && !isPlayerLost && (
        <GameWrapper>
          <BackToMenuButton />
          <Gameviewport
            isGameFinished={isGameFinished}
            isPlayerLost={isPlayerLost}
            gameFinished={(state) => setIsGameFinished(state)}
            playerLost={(state) => setIsPlayerLost(state)}
          />
        </GameWrapper>
      )}
      {isGameFinished && !isPlayerLost && (
        <EndPage
          imageSrc={finishedGameImageSrc}
          text="YAY! The player is safe"
          gameFinished={(state) => setIsGameFinished(state)}
          playerLost={(state) => setIsPlayerLost(state)}
        />
      )}
      {isPlayerLost && !isGameFinished && (
        <EndPage
          imageSrc={lostInSpaceImageSrc}
          text="Oh no! The astronaut is lost in space!"
          gameFinished={(state) => setIsGameFinished(state)}
          playerLost={(state) => setIsPlayerLost(state)}
        />
      )}
    </>
  );
}

export default GamePage;
