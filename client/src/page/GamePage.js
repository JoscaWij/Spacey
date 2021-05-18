import React from "react";
import styled from "@emotion/styled";
import { PageWrapper } from "../components/PageWrapper";
import EndPage from "./EndPage";
import Gameviewport from "./../game/level1/GameViewport";
import lostInSpaceImageSrc from "../assets/playerJumping.png";
import finishedGameImageSrc from "../assets/asteronautRakete.png";
import BackToMenuButton from "../components/BackToMenuButton";
import { useParams } from "react-router";

const GameWrapper = styled(PageWrapper)`
  justify-content: center;
`;

function GamePage() {
  const [isPlayerLost, setIsPlayerLost] = React.useState(false);
  const [isGameFinished, setIsGameFinished] = React.useState(false);
  const [resetGame, setResetGame] = React.useState(false);

  let { levelnumber } = useParams();
  console.log(levelnumber);

  function renderLevel(
    levelnumber,
    isGameFinished,
    isPlayerLost,
    resetGame,
    setIsGameFinished,
    setIsPlayerLost,
    setResetGame
  ) {
    switch (levelnumber) {
      case "1":
        return (
          <GameWrapper>
            <BackToMenuButton />
            <Gameviewport
              isFinished={isGameFinished}
              isLost={isPlayerLost}
              gameFinished={(state) => setIsGameFinished(state)}
              playerLost={(state) => setIsPlayerLost(state)}
              restartGame={(state) => setResetGame(state)}
              resetGame={resetGame}
            />
          </GameWrapper>
        );
      case "2":
        return <div>level 2 - coming soon</div>;
      default:
        return <div>No level choosen. Please try again</div>;
    }
  }

  return (
    <>
      {!isGameFinished &&
        !isPlayerLost &&
        renderLevel(
          levelnumber,
          isGameFinished,
          isPlayerLost,
          resetGame,
          setIsGameFinished,
          setIsPlayerLost,
          setResetGame
        )}
      {isGameFinished && !isPlayerLost && (
        <EndPage
          imageSrc={finishedGameImageSrc}
          text="YAY! The player is safe"
          gameFinished={(state) => setIsGameFinished(state)}
          playerLost={(state) => setIsPlayerLost(state)}
          restartGame={(state) => setResetGame(state)}
        />
      )}
      {isPlayerLost && !isGameFinished && (
        <EndPage
          imageSrc={lostInSpaceImageSrc}
          text="Oh no! The astronaut is lost in space!"
          gameFinished={(state) => setIsGameFinished(state)}
          playerLost={(state) => setIsPlayerLost(state)}
          restartGame={(state) => setResetGame(state)}
        />
      )}
    </>
  );
}

export default GamePage;
