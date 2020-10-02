import React from "react";
import Game from "../game/Game";
import styled from "@emotion/styled";
import { PageWrapper } from "../components/PageWrapper";
import BackToMenuButton from "../components/BackToMenuButton";

const GameWrapper = styled(PageWrapper)`
  justify-content: center;
`;

function GamePage() {
  return (
    <GameWrapper>
      <BackToMenuButton />
      <Game />
    </GameWrapper>
  );
}

export default GamePage;
