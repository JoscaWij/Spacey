import React from "react";
import gobackButtonImageSrc from "../assets/backbtnIcon.svg";
import styled from "@emotion/styled";

const InvisableButtonWrapper = styled.button`
  padding: 0;
  background: none;
  position: fixed;
  top: 1.3em;
  left: 1.3em;

  :hover {
    background: none;
    box-shadow: var(--highlight-color) 0 0 10px;
  }
`;

function BackToMenuButton() {
  return (
    <InvisableButtonWrapper>
      <img src={gobackButtonImageSrc} alt="Go back to Menu" />
    </InvisableButtonWrapper>
  );
}

export default BackToMenuButton;
