import React from "react";
import Game, { CANVAS_SIZE } from "./Game";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

export const VIEWPORT_SIZE = {
  width: window.innerWidth,
  height: window.innerHeight,
};

export const animation = {
  duration: 30,
  scrollStartPercentage: 5,
};

const CameraContainer = styled.div`
  width: ${`${VIEWPORT_SIZE.width}px`};
  height: ${`${VIEWPORT_SIZE.height}px`};
  background: transparent;
  overflow-y: hidden;

  canvas {
    position: relative;
    animation: scrollingcamera linear ${`${animation.duration}s`};
  }
  @keyframes scrollingcamera {
    0% {
      top: ${`${-(CANVAS_SIZE.height - VIEWPORT_SIZE.height)}px`};
    }
    ${`${animation.scrollStartPercentage}%`} {
      top: ${`${-(CANVAS_SIZE.height - VIEWPORT_SIZE.height)}px`};
    }
    to {
      top: 0px;
    }
  }
`;

const GameViewport = ({
  isFinished,
  isLost,
  gameFinished,
  playerLost,
  resetGame,
  restartGame,
}) => {
  return (
    <CameraContainer>
      <Game
        isGameFinished={isFinished}
        isPlayerLost={isLost}
        finishGame={(state) => gameFinished(state)}
        playerLoses={(state) => playerLost(state)}
        restartGame={(state) => restartGame(state)}
        resetGame={resetGame}
      />
    </CameraContainer>
  );
};

export default GameViewport;

GameViewport.propTypes = {
  isFinished: PropTypes.bool,
  isLost: PropTypes.bool,
  gameFinished: PropTypes.func,
  playerLost: PropTypes.func,
  resetGame: PropTypes.bool,
  restartGame: PropTypes.func,
};
