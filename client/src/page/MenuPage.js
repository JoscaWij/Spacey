import React from "react";
import styled from "@emotion/styled";
import MenuImageSrc from "./../assets/asteronautRakete.png";
import MenuBackgroundImageSrc from "./../assets/planet.png";
import { Link } from "react-router-dom";
import { PageWrapper } from "../components/PageWrapper";
import { GameTitle } from "../components/GameTitle";
import { MenuButton } from "../components/MenuButton";

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

const MenuWrapper = styled(PageWrapper)`
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
