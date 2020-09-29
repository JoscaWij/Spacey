import React from "react";
import Game from "../game/Game";
import styled from "@emotion/styled";
/* import { player, CANVAS_SIZE } from "./GameLoop"; */

const CameraContainer = styled.div`
  width: 375px;
  height: 667px;

  * > {
    position: relative;
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
