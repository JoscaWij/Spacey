import React from "react";
import Game, { CANVAS_SIZE } from "./Game";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

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
    0% {
      top: ${`${-(CANVAS_SIZE.height - VIEWPORT_SIZE.height)}px`};
    }
    5% {
      top: ${`${-(CANVAS_SIZE.height - VIEWPORT_SIZE.height)}px`};
    }
    to {
      top: 0px;
    }
  }
`;

const GameViewport = ({
  isGameFinished,
  isPlayerLost,
  gameFinished,
  playerLost,
}) => {
  return (
    <CameraContainer>
      <Game
        isGameFinished={isGameFinished}
        isPlayerLost={isPlayerLost}
        gameFinished={(state) => gameFinished(state)}
        playerLost={(state) => playerLost(state)}
      />
    </CameraContainer>
  );
};

export default GameViewport;

GameViewport.propTypes = {
  isGameFinished: PropTypes.bool,
  isPlayerLost: PropTypes.bool,
  gameFinished: PropTypes.func,
  playerLost: PropTypes.func,
};
