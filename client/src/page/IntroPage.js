import React from "react";
import OutlinedContainer from "../components/OutlinedContainer";
import styled from "@emotion/styled";
import { PageWrapper } from "../components/PageWrapper";
import IconArrowLeftSrc from "../assets/IconArrowLeft.svg";
import IconArrowRightSrc from "../assets/IconArrowRight.svg";
import IconSpraceSrc from "../assets/IconSpace.svg";

const IntroPageWrapper = styled(PageWrapper)`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const IntroTextbox = styled.div`
  background: transparent;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  height: 100%;
  text-align: center;

  *:first-child {
    font-family: PermanentMarker;
    flex-basis: 100%;
    font-size: 1.5em;
    font-weight: lighter;
  }
`;

function IntroPage() {
  return (
    <IntroPageWrapper>
      <OutlinedContainer>
        <IntroTextbox>
          <span>Please help!</span>
          <p>
            The little astronaut is stranded on a lonley planet. He needs to get
            back to his spaceship as soon as possible. Can you help him to get
            back? Its very easy. You can use the
          </p>
          <img src={IconArrowLeftSrc} alt="arrow left" />
          <img src={IconArrowRightSrc} alt="arrow right" />
          <p>keys to walk. And</p>
          <img src={IconSpraceSrc} alt="Space key" /> <p>Space to jump.</p>
        </IntroTextbox>
      </OutlinedContainer>
    </IntroPageWrapper>
  );
}

export default IntroPage;
