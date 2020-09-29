import React from "react";
import styled from "@emotion/styled";
import { PageWrapper } from "../components/PageWrapper";
import GameViewport from "../game/GameViewport";

const GameWrapper = styled(PageWrapper)`
  justify-content: center;
  align-items: center;
`;

function GamePage() {
  return (
    <GameWrapper>
      <GameViewport />
    </GameWrapper>
  );
}

export default GamePage;
