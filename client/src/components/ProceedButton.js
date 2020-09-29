import styled from "@emotion/styled";
import React from "react";
import proceedImageSrc from "./../assets/IconArrow_proceed.svg";

const ImageButton = styled.button`
  background: none;
  position: absolute;
  bottom: 10%;
  right: 5%;
  :hover {
    background: none;
  }
`;

const ProceedButton = () => {
  return (
    <ImageButton>
      <img src={proceedImageSrc} alt="arrow right inside the proceed button" />
    </ImageButton>
  );
};

export default ProceedButton;
