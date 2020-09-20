import React from "react";
import styled from "@emotion/styled";

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: space-around;
`;

function MenuPage() {
  return (
    <MenuWrapper>
      <h1>Spacey</h1>
      <img src="" alt="Astronaut sitting on a little rocket" />
      <button>Button</button>
    </MenuWrapper>
  );
}

export default MenuPage;
