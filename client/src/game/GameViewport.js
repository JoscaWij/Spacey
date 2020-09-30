import React from "react";
import Game from "./Game";
import styled from "@emotion/styled";

const CameraContainer = styled.div`
  width: 375px;
  height: 667px;
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
