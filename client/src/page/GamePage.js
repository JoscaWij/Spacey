import React from "react";
import Game from "../game/Game";
import styled from "@emotion/styled";
import { PageWrapper } from "../components/PageWrapper";
import EndPage from "./EndPage";
import lostInSpaceImageSrc from "../assets/playerJumping.png";
import finishedGameImageSrc from "../assets/asteronautRekate.png";

const GameWrapper = styled(PageWrapper)`
  justify-content: center;
`;

function GamePage() {
  return (
    <>
      {/* {!gamefinished && ( */}
      <GameWrapper>
        <Game />
      </GameWrapper>
      {/*   )}
      {gamefinished && ( */}
      <EndPage imageSrc={finishedGameImageSrc} text="YAY! The player is safe" />
      {/*       )}
      {playerLost && ( */}
      <EndPage
        imageSrc={lostInSpaceImageSrc}
        text="Oh no! The astronaut is lost in space!"
      />
      {/* )} */}
    </>
  );
}

export default GamePage;
