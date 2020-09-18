import React from "react";
import Game from "../game/Game";
import styled from "@emotion/styled";

const GameWrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

function GamePage() {
  return (
    <GameWrapper>
      <Game />
    </GameWrapper>
  );
}

export default GamePage;
