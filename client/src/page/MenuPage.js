import React from "react";
import styled from "@emotion/styled";
import MenuImageSrc from "./../assets/asteronautRakete.png";
import MenuBackgroundImageSrc from "./../assets/planet.png";
import { Link } from "react-router-dom";

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const MenuImage = styled.img`
  height: 45%;
`;

const MenuBackgroundImage = styled.img`
  width: 100%;
  height: 12%;
  margin-top: 2em;
`;

const GameTitle = styled.h1`
  font-size: 3rem;
  -webkit-text-stroke: 1px #000;
  text-shadow: var(--highlight-color) 0 3px 5px;
`;

const MenuButton = styled.button`
  font-size: 1.5em;
  text-shadow: var(--highlight-color) 0 3px 5px;
  padding: 0.7em 1em;
  margin: 1em;
  cursor: pointer;
`;

function MenuPage() {
  return (
    <MenuWrapper>
      <GameTitle>Spacey</GameTitle>
      <MenuImage
        src={MenuImageSrc}
        alt="Astronaut sitting on a little rocket"
      />
      <MenuButton>
        <Link to="/game">Start game</Link>
      </MenuButton>
      <MenuBackgroundImage src={MenuBackgroundImageSrc} alt="planetside" />
    </MenuWrapper>
  );
}

export default MenuPage;
