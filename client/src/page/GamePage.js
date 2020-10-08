import React from "react";
import styled from "@emotion/styled";
import { PageWrapper } from "../components/PageWrapper";
import BackToMenuButton from "../components/BackToMenuButton";
import GameViewport from "../game/GameViewport";

const GameWrapper = styled(PageWrapper)`
  justify-content: center;
`;

function GamePage() {
  return (
    <GameWrapper>
      <BackToMenuButton />
      <GameViewport />
    </GameWrapper>
  );
}

export default GamePage;
