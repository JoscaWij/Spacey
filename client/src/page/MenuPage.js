import React from "react";
import styled from "@emotion/styled";
import MenuImageSrc from "./../assets/AsteronautRakete.png";

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: space-around;
  padding: 1.5em;
`;

const MenuImage = styled.img`
  height: 55vh;
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
`;

function MenuPage() {
  return (
    <MenuWrapper>
      <GameTitle>Spacey</GameTitle>
      <MenuImage
        src={MenuImageSrc}
        alt="Astronaut sitting on a little rocket"
      />
      <MenuButton>Start game</MenuButton>
    </MenuWrapper>
  );
}

export default MenuPage;
