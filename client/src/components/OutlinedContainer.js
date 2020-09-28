import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const OutlinedDiv = styled.div`
  border: solid var(--highlight-color) 5px;
  border-radius: 20px;
  height: 80%;
  width: 90%;
  padding: 2em;
`;

function OutlinedContainer({ children }) {
  return <OutlinedDiv>{children}</OutlinedDiv>;
}

export default OutlinedContainer;

OutlinedContainer.propTypes = {
  children: PropTypes.node,
};
