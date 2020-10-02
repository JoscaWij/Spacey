import React from "react";
import styled from "@emotion/styled";
import { PageWrapper } from "../components/PageWrapper";

const EndPageWrapper = styled(PageWrapper)`
  justify-content: center;

  image {
    margin: 2em;
  }
`;

const EndPage = () => {
  return (
    <EndPageWrapper>
      <img src="" alt="Player illustration" />
      <p>Text</p>
    </EndPageWrapper>
  );
};

export default EndPage;
