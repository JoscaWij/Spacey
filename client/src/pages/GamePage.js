import React from "react";
import Game from "../game/Game";
import styled from "@emotion/styled";

const GameWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function GamePage(props) {
  return (
    <GameWrapper>
      <Game />
    </GameWrapper>
  );
}

export default GamePage;
