import styled from "@emotion/styled";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
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

const ProceedButton = ({ path }) => {
  return (
    <ImageButton>
      <Link to={`${path}`}>
        <img
          src={proceedImageSrc}
          alt="arrow right inside the proceed button"
        />
      </Link>
    </ImageButton>
  );
};

export default ProceedButton;

ProceedButton.propTypes = {
  path: PropTypes.string,
};
