import React from "react";
import styled from "@emotion/styled";
import MenuImageSrc from "./../assets/AsteronautRakete.png";

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: space-around;
`;

const MenuImage = styled.img`
  height: 55vh;
`;

function MenuPage() {
  return (
    <MenuWrapper>
      <h1>Spacey</h1>
      <MenuImage
        src={MenuImageSrc}
        alt="Astronaut sitting on a little rocket"
      />
      <button>Button</button>
    </MenuWrapper>
  );
}

export default MenuPage;
