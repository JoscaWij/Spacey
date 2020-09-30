import React from "react";
import Game, { CANVAS_SIZE } from "./Game";
import { VIEWPORT_SIZE } from "./viewport";
import styled from "@emotion/styled";

const CameraContainer = styled.div`
  width: ${`${VIEWPORT_SIZE.width}px`};
  height: ${`${VIEWPORT_SIZE.height}px`};
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
