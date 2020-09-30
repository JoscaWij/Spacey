import React from "react";
import Game, { CANVAS_SIZE } from "./Game";
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
    animation: scrollingcamera linear 30s;
  }
  @keyframes scrollingcamera {
    from {
      top: ${`${-(CANVAS_SIZE.height - VIEWPORT_SIZE.height)}px`};
    }
    to {
      top: 0px;
    }
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
