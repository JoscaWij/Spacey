import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { PageWrapper } from "../components/PageWrapper";
import { Link } from "react-router-dom";

const EndPageWrapper = styled(PageWrapper)`
  justify-content: center;
  text-align: center;

  img {
    margin: 2em;
    height: 35%;
  }

  span {
    font-size: 2em;
    font-family: "PermanentMarker";
    max-width: 80%;
  }
  button {
    font-size: 1.3em;
    padding: 0.8em 1.3em;
    margin: 1em;
  }
`;

const EndPage = ({ imageSrc, text }) => {
  return (
    <EndPageWrapper>
      <img src={imageSrc} alt="Player illustration" />
      <span>{text}</span>
      <button>
        <Link to="/game">Try again</Link>
      </button>
    </EndPageWrapper>
  );
};

export default EndPage;

EndPage.propTypes = {
  imageSrc: PropTypes.string,
  text: PropTypes.string,
};
