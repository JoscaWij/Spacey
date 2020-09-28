import React from "react";
import OutlinedContainer from "../components/OutlinedContainer";
import styled from "@emotion/styled";
import { PageWrapper } from "../components/PageWrapper";

const IntroPageWrapper = styled(PageWrapper)`
  display: flex;
  justify-content: center;
  align-content: center;
`;

function IntroPage() {
  return (
    <IntroPageWrapper>
      <OutlinedContainer>
        <h4>Please help!</h4>
        <p>
          The little astronaut is stranded on a lonley planet. He needs to get
          back to his spaceship as soon as possible. Can you help him to get
          back? Its very easy. You can use the keys to walk. And the to jump.
        </p>
      </OutlinedContainer>
    </IntroPageWrapper>
  );
}

export default IntroPage;
