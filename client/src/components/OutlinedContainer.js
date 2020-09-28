import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const OutlinedDiv = styled.div`
  border: solid var(--highlight-color) 7px;
  border-radius: 20px;
  height: 80%;
  width: 90%;
  padding: 2em;
  background-image: linear-gradient(
    180deg,
    var(--highlight-color),
    transparent
  );
`;

function OutlinedContainer({ children }) {
  return <OutlinedDiv>{children}</OutlinedDiv>;
}

export default OutlinedContainer;

OutlinedContainer.propTypes = {
  children: PropTypes.node,
};
