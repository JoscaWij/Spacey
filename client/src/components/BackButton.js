import React from "react";
import gobackButtonImageSrc from "../assets/backbtnIcon.svg";
import styled from "@emotion/styled";

const InvisableButtonWrapper = styled.button`
  padding: 0;
  background: none;

  :hover {
    background: none;
    box-shadow: var(--highlight-color) 0 0 10px;
  }
`;

function BackButton() {
  return (
    <InvisableButtonWrapper>
      <img src={gobackButtonImageSrc} alt="Go back button" />
    </InvisableButtonWrapper>
  );
}

export default BackButton;
