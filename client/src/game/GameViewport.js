import React from "react";
import Game from "./Game";
import styled from "@emotion/styled";

const VIEWPORT_SIZE = {
  width: 375,
  height: 667,
};

const CameraContainer = styled.div`
  width: ${`${VIEWPORT_SIZE.width}px`};
  height: ${`${VIEWPORT_SIZE.height}px`};
  background: transparent;
  overflow-y: hidden;

  canvas {
    position: relative;
    top: 200px;
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
