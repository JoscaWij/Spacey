import React from "react";
import OutlinedContainer from "../components/OutlinedContainer";
import styled from "@emotion/styled";
import { PageWrapper } from "../components/PageWrapper";
import IconArrowLeftSrc from "../assets/IconArrowLeft.svg";
import IconArrowRightSrc from "../assets/IconArrowRight.svg";
import IconSpraceSrc from "../assets/IconSpace.svg";
import ProceedButton from "../components/ProceedButton";
import BackToMenuButton from "../components/BackToMenuButton";

function IntroPage() {
  return (
    <IntroPageWrapper>
      <BackToMenuButton />
      <OutlinedContainer>
        <IntroTextbox>
          <span>Please help!</span>
          <p>
            The little astronaut is stranded on a lonley planet. He needs to get
            back to his spaceship as soon as possible. No time to lose!
          </p>
          <span>Can you help him to get back?</span>
          <p>Its very easy. You can use the</p>
          <ImageCenteredContainer>
            <img src={IconArrowLeftSrc} alt="arrow left" />
            <img src={IconArrowRightSrc} alt="arrow right" />
          </ImageCenteredContainer>
          <p>keys to walk. And</p>
          <img src={IconSpraceSrc} alt="Space key" />
          <p>Space to jump.</p>
        </IntroTextbox>
        <ProceedButton path="/game" />
      </OutlinedContainer>
    </IntroPageWrapper>
  );
}

export default IntroPage;

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
  justify-content: center;
  height: 100%;
  font-size: 1em;
  line-height: 2em;

  span {
    :first-of-type {
      font-size: 1.5em;
    }
    font-size: 1.1em;
    font-family: PermanentMarker;
    flex-basis: 100%;
    font-weight: lighter;
  }

  * {
    text-align: center;
    flex-basis: 100%;
  }
`;

const ImageCenteredContainer = styled.div`
  background: transparent;
  display: flex;

  *:first-of-type {
    margin-left: 30%;
  }
  *:last-child {
    margin-right: 30%;
  }
`;
