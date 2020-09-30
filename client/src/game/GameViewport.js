import React from "react";
import Game from "./Game";
import { VIEWPORT_SIZE } from "./viewport";
import styled from "@emotion/styled";

const CameraContainer = styled.div`
  width: ${`${VIEWPORT_SIZE.width}px`};
  height: ${`${VIEWPORT_SIZE.height}px`};
  overflow-y: hidden;
  background: blue;
`;

const GameViewport = () => {
  return (
    <CameraContainer>
      <Game />
    </CameraContainer>
  );
};

export default GameViewport;
