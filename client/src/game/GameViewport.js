import React from "react";
import Game, { CANVAS_SIZE } from "../game/Game";
import styled from "@emotion/styled";

const CameraContainer = styled.div`
  width: 375px;
  height: 667px;
  overflow-y: hidden;

  canvas {
    position: relative;
    top: ${`${CANVAS_SIZE.width}px`};
  }
`;

const GameViewport = () => {
  return (
    <CameraContainer>
      <Game />
    </CameraContainer>
  );
};

export default GameViewport;
